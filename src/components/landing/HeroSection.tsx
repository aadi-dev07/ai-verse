
import { GradientButton } from "@/components/ui/gradient-button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 overflow-hidden bg-gradient-to-b from-white to-autoverse-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              Your One-Stop <span className="text-autoverse-600">Automation Partner</span> for Business
            </h1>
            <p className="text-xl text-gray-600">
              No code. No hassle. Just results.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <GradientButton size="lg" className="group" asChild>
                <Link to="/register">
                  Get Started with a Prompt
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </GradientButton>
              <GradientButton variant="outline" size="lg" asChild>
                <a href="#how-it-works">
                  See How It Works
                </a>
              </GradientButton>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-autoverse-200/30 to-tech-softBlue/30 rounded-3xl blur-3xl"></div>
            <div className="relative z-10 bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden p-6 animate-scale-in">
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-tech-purple to-autoverse-600 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">A</span>
                    </div>
                    <span className="font-heading font-bold">Autoverse AI</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="h-3 w-3 rounded-full bg-red-400"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                    <div className="h-3 w-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-autoverse-100 flex items-center justify-center shrink-0">
                      <span className="text-autoverse-600 text-sm font-medium">A</span>
                    </div>
                    <div className="bg-gray-100 rounded-2xl rounded-tl-none p-3 text-sm text-left">
                      How can I help automate your business today?
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 justify-end">
                    <div className="bg-autoverse-100 rounded-2xl rounded-tr-none p-3 text-sm text-left">
                      I need a system to send onboarding emails and schedule intro calls with new clients automatically.
                    </div>
                    <div className="w-8 h-8 rounded-full bg-tech-blue/20 flex items-center justify-center shrink-0">
                      <span className="text-tech-blue text-sm font-medium">U</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-autoverse-100 flex items-center justify-center shrink-0">
                      <span className="text-autoverse-600 text-sm font-medium">A</span>
                    </div>
                    <div className="bg-gray-100 rounded-2xl rounded-tl-none p-3 text-sm text-left">
                      <p className="text-gray-600 mb-2">I'll create a complete onboarding automation for you:</p>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>Welcome email sequence</li>
                        <li>Calendar integration for booking</li>
                        <li>Automated follow-ups</li>
                      </ul>
                      <div className="mt-3 h-1.5 w-24 bg-autoverse-200 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
