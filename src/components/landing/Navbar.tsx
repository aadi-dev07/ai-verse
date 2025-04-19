
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
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
          <Link 
            to="/" 
            className={`transition-colors ${isActive('/') ? 'text-autoverse-600 font-medium' : 'text-gray-600 hover:text-autoverse-600'}`}
          >
            Home
          </Link>
          <Link 
            to="/explore" 
            className={`transition-colors ${isActive('/explore') ? 'text-autoverse-600 font-medium' : 'text-gray-600 hover:text-autoverse-600'}`}
          >
            Explore
          </Link>
          <Link 
            to="/marketplace" 
            className={`transition-colors ${isActive('/marketplace') ? 'text-autoverse-600 font-medium' : 'text-gray-600 hover:text-autoverse-600'}`}
          >
            Marketplace
          </Link>
          <a 
            href="#pricing" 
            className="text-gray-600 hover:text-autoverse-600 transition-colors"
          >
            Pricing
          </a>
          <Link 
            to="/community" 
            className={`transition-colors ${isActive('/community') ? 'text-autoverse-600 font-medium' : 'text-gray-600 hover:text-autoverse-600'}`}
          >
            Join the Community
          </Link>
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
