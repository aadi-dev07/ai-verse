
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GradientButton } from "@/components/ui/gradient-button";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const businessTypes = [
  "E-commerce",
  "Professional Services",
  "Marketing Agency",
  "Software/SaaS",
  "Financial Services",
  "Healthcare",
  "Real Estate",
  "Hospitality",
  "Education",
  "Other"
];

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    businessName: "",
    businessType: "",
    acceptTerms: false
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, businessType: value }));
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would register with a backend
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Column - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="mb-8 flex items-center gap-2">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-tech-purple to-autoverse-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-xl font-heading font-bold bg-gradient-to-r from-tech-purple to-autoverse-600 bg-clip-text text-transparent">
              Autoverse
            </span>
          </div>
          
          <h1 className="text-3xl font-heading font-bold mb-2">Create an account</h1>
          <p className="text-gray-600 mb-8">Start automating your business workflows</p>
          
          <form onSubmit={handleRegister} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full name</Label>
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                required
                className="w-full"
              />
              <p className="text-xs text-gray-500">Must be at least 8 characters</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="businessName">Business name</Label>
              <Input
                id="businessName"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                placeholder="Your business name"
                required
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="businessType">Business type</Label>
              <Select
                value={formData.businessType}
                onValueChange={handleSelectChange}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select your business type" />
                </SelectTrigger>
                <SelectContent>
                  {businessTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-start space-x-2 mt-6">
              <Checkbox 
                id="terms" 
                checked={formData.acceptTerms}
                onCheckedChange={() => setFormData(prev => ({ ...prev, acceptTerms: !prev.acceptTerms }))}
                className="mt-1"
              />
              <Label htmlFor="terms" className="text-sm font-normal">
                I agree to the{" "}
                <Link to="/terms" className="text-autoverse-600 hover:text-autoverse-700">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-autoverse-600 hover:text-autoverse-700">
                  Privacy Policy
                </Link>
              </Label>
            </div>
            
            <GradientButton 
              type="submit" 
              className="w-full"
              disabled={!formData.acceptTerms}
            >
              Create account
            </GradientButton>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-autoverse-600 hover:text-autoverse-700 font-medium">
                Sign in
              </Link>
            </p>
          </div>
          
          <div className="mt-10">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-3">
              <Button variant="outline" className="w-full">
                <svg className="mr-2 h-4 w-4" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                </svg>
                Google
              </Button>
              <Button variant="outline" className="w-full">
                <svg className="mr-2 h-4 w-4" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
                Facebook
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right Column - Image/Banner */}
      <div className="hidden md:block md:w-1/2 bg-gradient-to-br from-autoverse-500 to-tech-purple">
        <div className="h-full flex flex-col justify-center items-center p-12 text-center">
          <h2 className="text-4xl font-heading font-bold text-white mb-6">
            Your One-Stop Automation Partner for Business
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-md">
            No code. No hassle. Just results.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl">
            {[
              {
                title: "Easy Setup",
                description: "Get started in minutes with simple text prompts"
              },
              {
                title: "Time Saving",
                description: "Automate repetitive tasks and focus on growth"
              },
              {
                title: "No Technical Skills",
                description: "No coding knowledge required to build workflows"
              },
              {
                title: "24/7 Support",
                description: "Our team is here to help whenever you need us"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-left">
                <h3 className="text-white font-medium mb-1">{feature.title}</h3>
                <p className="text-white/70 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
