
import React, { createContext, useContext, useState, ReactNode } from "react";

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
  login: (email: string, password: string) => void;
  register: (email: string, password: string, profile: Partial<UserProfile>) => void;
  logout: () => void;
  updateProfile: (profile: Partial<UserProfile>) => void;
}

const defaultContext: AuthContextType = {
  isAuthenticated: false,
  userProfile: null,
  login: () => {},
  register: () => {},
  logout: () => {},
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

  // In a real app, this would connect to a backend service
  const login = (email: string, password: string) => {
    console.log("Logging in with", email, password);
    // Mock login - would be replaced with actual authentication
    setIsAuthenticated(true);
    setUserProfile({
      email,
      fullName: "",
      businessName: "",
      industry: "",
      businessSize: "SMB",
      automationNeeds: [],
    });
  };

  const register = (email: string, password: string, profile: Partial<UserProfile>) => {
    console.log("Registering", email, profile);
    // Mock registration - would be replaced with actual authentication
    setIsAuthenticated(true);
    setUserProfile({
      email,
      fullName: profile.fullName || "",
      businessName: profile.businessName || "",
      industry: profile.industry || "",
      businessSize: profile.businessSize || "SMB",
      automationNeeds: profile.automationNeeds || [],
      customNeeds: profile.customNeeds,
    });
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserProfile(null);
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
