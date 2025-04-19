
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { User, Session } from '@supabase/supabase-js';
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

type BusinessSize = "Solo" | "SMB" | "Enterprise";

interface UserProfile {
  email: string;
  fullName: string;
  businessName: string;
  industry: string;
  businessSize: BusinessSize;
  automationNeeds: string[];
  customNeeds?: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  userProfile: UserProfile | null;
  user: User | null;
  session: Session | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, profile: Partial<UserProfile>) => Promise<void>;
  logout: () => Promise<void>;
  updateProfile: (profile: Partial<UserProfile>) => void;
}

const defaultContext: AuthContextType = {
  isAuthenticated: false,
  userProfile: null,
  user: null,
  session: null,
  login: async () => {},
  register: async () => {},
  logout: async () => {},
  updateProfile: () => {},
};

const AuthContext = createContext<AuthContextType>(defaultContext);

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Set up auth state listener first
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, currentSession) => {
        setSession(currentSession);
        setUser(currentSession?.user ?? null);
        setIsAuthenticated(!!currentSession);
        if (currentSession?.user) {
          // Set a basic profile when user logs in
          setUserProfile({
            email: currentSession.user.email || "",
            fullName: "",
            businessName: "",
            industry: "",
            businessSize: "SMB",
            automationNeeds: [],
          });
        } else {
          setUserProfile(null);
        }
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session: currentSession } }) => {
      setSession(currentSession);
      setUser(currentSession?.user ?? null);
      setIsAuthenticated(!!currentSession);
      if (currentSession?.user) {
        setUserProfile({
          email: currentSession.user.email || "",
          fullName: "",
          businessName: "",
          industry: "",
          businessSize: "SMB",
          automationNeeds: [],
        });
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
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

  const register = async (email: string, password: string, profile: Partial<UserProfile>) => {
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: profile.fullName,
            business_name: profile.businessName,
            industry: profile.industry,
            business_size: profile.businessSize,
            automation_needs: profile.automationNeeds,
            custom_needs: profile.customNeeds,
          },
        },
      });

      if (error) throw error;

      toast.success("Registration successful! Please check your email to verify your account.");
      navigate("/dashboard");
    } catch (error: any) {
      toast.error(error.message || "Failed to register");
      throw error;
    }
  };

  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      setUserProfile(null);
      setIsAuthenticated(false);
      navigate("/login");
      toast.success("Successfully logged out!");
    } catch (error: any) {
      toast.error(error.message || "Failed to log out");
    }
  };

  const updateProfile = (profile: Partial<UserProfile>) => {
    if (userProfile) {
      setUserProfile({ ...userProfile, ...profile });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        userProfile,
        user,
        session,
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
