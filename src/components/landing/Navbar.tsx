
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-tech-purple to-autoverse-600 flex items-center justify-center">
            <span className="text-white font-bold text-xl">A</span>
          </div>
          <span className="text-xl font-heading font-bold bg-gradient-to-r from-tech-purple to-autoverse-600 bg-clip-text text-transparent">
            Autoverse
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-gray-600 hover:text-autoverse-600 transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-600 hover:text-autoverse-600 transition-colors">
            How It Works
          </a>
          <a href="#testimonials" className="text-gray-600 hover:text-autoverse-600 transition-colors">
            Testimonials
          </a>
          <a href="#pricing" className="text-gray-600 hover:text-autoverse-600 transition-colors">
            Pricing
          </a>
        </nav>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" asChild>
            <Link to="/login">Login</Link>
          </Button>
          <GradientButton asChild>
            <Link to="/register">Get Started</Link>
          </GradientButton>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
