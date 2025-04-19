
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import NewPrompt from "./pages/NewPrompt";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Explore from "./pages/Explore";
import Marketplace from "./pages/Marketplace";
import Community from "./pages/Community";
import { useState } from "react";
import { AuthProvider } from "./context/AuthContext";
