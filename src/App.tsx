
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
import Pricing from "./pages/Pricing";
import MyAutomations from "./pages/MyAutomations";
import MyPrompts from "./pages/MyPrompts";
import { AuthProvider } from "./context/AuthContext";
import CustomRequests from "./pages/CustomRequests";
import ProfileSettings from "./pages/ProfileSettings";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/automations" element={<MyAutomations />} />
              <Route path="/dashboard/prompts" element={<MyPrompts />} />
              <Route path="/dashboard/profile" element={<ProfileSettings />} />
              <Route path="/new-prompt" element={<NewPrompt />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/community" element={<Community />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/dashboard/custom-requests" element={<CustomRequests />} />
            </Routes>
          </BrowserRouter>
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
