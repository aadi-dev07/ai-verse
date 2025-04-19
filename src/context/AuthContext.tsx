
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { User, Session } from '@supabase/supabase-js';
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface Profile {
  id: string;
  full_name: string | null;
  business_name: string | null;
  phone: string | null;
  business_domain: string | null;
  website_url: string | null;
  email_notifications: boolean;
  sms_notifications: boolean;
  push_notifications: boolean;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  session: Session | null;
  profile: Profile | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, profile: Partial<Profile>) => Promise<void>;
  logout: () => Promise<void>;
  updateProfile: (updates: Partial<Profile>) => Promise<void>;
}

const defaultContext: AuthContextType = {
  isAuthenticated: false,
  user: null,
  session: null,
  profile: null,
  login: async () => {},
  register: async () => {},
  logout: async () => {},
  updateProfile: async () => {},
};

const AuthContext = createContext<AuthContextType>(defaultContext);

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const navigate = useNavigate();

  const fetchProfile = async (userId: string) => {
    try {
      console.log("Fetching profile for user:", userId);
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) {
        console.error('Error fetching profile:', error.message);
        return;
      }
      
      if (data) {
        console.log("Profile data retrieved:", data);
        setProfile(data as Profile);
      } else {
        console.log("No profile data found");
      }
    } catch (error: any) {
      console.error('Exception fetching profile:', error.message);
    }
  };

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, currentSession) => {
        console.log("Auth state change event:", event);
        setSession(currentSession);
        setUser(currentSession?.user ?? null);
        setIsAuthenticated(!!currentSession);
        
        if (currentSession?.user) {
          console.log("User is logged in, fetching profile...");
          await fetchProfile(currentSession.user.id);
        } else {
          console.log("No user session, clearing profile");
          setProfile(null);
        }
      }
    );

    supabase.auth.getSession().then(({ data: { session: currentSession } }) => {
      console.log("Initial session check:", currentSession ? "Session exists" : "No session");
      setSession(currentSession);
      setUser(currentSession?.user ?? null);
      setIsAuthenticated(!!currentSession);
      if (currentSession?.user) {
        console.log("Initial user session detected, fetching profile...");
        fetchProfile(currentSession.user.id);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      toast.success("Successfully logged in!");
      navigate("/dashboard");
    } catch (error: any) {
      toast.error(error.message || "Failed to log in");
      throw error;
    }
  };

  const register = async (email: string, password: string, profileData: Partial<Profile>) => {
    try {
      console.log("Starting registration with email:", email);
      
      // First, check if user exists with this email
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password: "dummy-password-for-check", // Using a dummy password to check if user exists
      });
      
      // If sign in works (even with wrong password), user exists
      if (data?.user) {
        console.log("User already exists with this email (sign-in check)");
        const customError = new Error("This email is already registered");
        // @ts-ignore - Adding custom property to the error
        customError.code = "user_already_exists";
        throw customError;
      }
      
      // If error is not about invalid credentials, it could be another issue
      if (signInError && !signInError.message.toLowerCase().includes("invalid")) {
        console.error("Unexpected error during existence check:", signInError);
      }
      
      console.log("No existing user found, proceeding with registration");
      
      // Now try to register the user
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (authError) {
        console.error("Auth error during registration:", authError);
        
        // Handle any existing user errors from signUp
        if (authError.message?.toLowerCase().includes("already registered") || 
            authError.message?.toLowerCase().includes("already exists") ||
            authError.message?.toLowerCase().includes("email already")) {
          
          console.log("Supabase reports user already exists:", authError.message);
          const customError = new Error("This email is already registered");
          // @ts-ignore - Adding custom property to the error
          customError.code = "user_already_exists";
          throw customError;
        }
        
        throw authError;
      }
      
      if (!authData?.user) {
        console.error("No user returned from signUp");
        throw new Error("Registration failed - no user data returned");
      }

      console.log("User registered successfully with ID:", authData.user.id);
      console.log("Creating profile for new user...");

      // Create profile entry with the user data
      const { error: profileError } = await supabase
        .from('profiles')
        .upsert({
          id: authData.user.id,
          full_name: profileData.full_name || null,
          business_name: profileData.business_name || null,
          phone: profileData.phone || null,
          business_domain: profileData.business_domain || null,
          website_url: profileData.website_url || null,
          email_notifications: true,
          sms_notifications: false,
          push_notifications: true,
        });

      if (profileError) {
        console.error('Error creating profile:', profileError);
        // We don't throw here to avoid blocking the process if profile creation fails
      } else {
        console.log("Profile created successfully");
        
        // Immediately fetch the profile to update the local state
        await fetchProfile(authData.user.id);
      }

      toast.success("Registration successful! Please check your email to verify your account.");
      navigate("/dashboard");
    } catch (error: any) {
      // Ensure we preserve the error code if it exists
      console.error("Registration error:", error);
      
      // If the error has the user_already_exists code, propagate it
      if (error.code === "user_already_exists") {
        throw error;
      }
      
      // For other errors, add useful context
      throw new Error(error.message || "Failed to register");
    }
  };

  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      setProfile(null);
      setIsAuthenticated(false);
      navigate("/login");
      toast.success("Successfully logged out!");
    } catch (error: any) {
      toast.error(error.message || "Failed to log out");
    }
  };

  const updateProfile = async (updates: Partial<Profile>) => {
    try {
      if (!user?.id) throw new Error("No user logged in");

      const { error } = await supabase
        .from('profiles')
        .update(updates)
        .eq('id', user.id);

      if (error) throw error;

      // Update local profile state
      setProfile(prev => prev ? { ...prev, ...updates } : null);
      toast.success("Profile updated successfully!");
    } catch (error: any) {
      toast.error(error.message || "Failed to update profile");
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        session,
        profile,
        login,
        register,
        logout,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
