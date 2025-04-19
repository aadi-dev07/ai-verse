
import { GradientButton } from "@/components/ui/gradient-button";
import { Calendar } from "lucide-react";

const CustomRequestSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-autoverse-50 to-tech-softBlue/30 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-heading font-bold mb-4">
                Need Something More Custom?
              </h2>
              <p className="text-gray-600 mb-6">
                Our team of automation experts can build custom workflows for your unique business needs.
                Simply tell us what you're looking for, and we'll schedule a call to discuss.
              </p>
              
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Business Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-autoverse-400 focus:ring-2 focus:ring-autoverse-200 outline-none transition-all"
                      placeholder="Your business name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-autoverse-400 focus:ring-2 focus:ring-autoverse-200 outline-none transition-all"
                      placeholder="you@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Request Summary
                    </label>
                    <textarea 
                      className="w-full min-h-[100px] px-4 py-2 rounded-lg border border-gray-200 focus:border-autoverse-400 focus:ring-2 focus:ring-autoverse-200 outline-none transition-all resize-none"
                      placeholder="Tell us what you're looking to automate..."
                    ></textarea>
                  </div>
                  
                  <GradientButton className="w-full">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book a Call with our Developer
                  </GradientButton>
                </form>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-autoverse-300/20 to-tech-purple/20 rounded-full blur-3xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" 
                  alt="Team collaboration" 
                  className="relative rounded-xl shadow-lg w-full max-w-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomRequestSection;
