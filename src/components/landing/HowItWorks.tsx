
import { Check, UserCircle, MessageSquare, Zap } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <UserCircle className="h-10 w-10 text-autoverse-600" />,
      title: "Register with basic info",
      description: "Create an account and tell us about your business and domain to help us understand your needs."
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-autoverse-600" />,
      title: "Describe your automation",
      description: "Simply describe what you want to automate in plain language or follow our guided form."
    },
    {
      icon: <Zap className="h-10 w-10 text-autoverse-600" />,
      title: "Deploy your automation",
      description: "We'll instantly build and deploy your automation, or our team will craft a custom solution."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            How Autoverse Works
          </h2>
          <p className="text-lg text-gray-600">
            Automating your business workflows has never been easier. 
            Just tell us what you need in plain language, and we'll handle the rest.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-autoverse-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  Step {index + 1}: {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-autoverse-50 to-tech-softBlue/30 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-heading font-bold mb-4">
                What makes us different?
              </h3>
              <p className="text-gray-600 mb-6">
                Unlike traditional automation tools that require technical knowledge, 
                Autoverse translates your simple text instructions into powerful workflows.
              </p>
              
              <ul className="space-y-3">
                {[
                  "No coding or technical skills required",
                  "Quick setup in minutes, not days",
                  "Human-in-the-loop for complex requests",
                  "Integrations with tools you already use"
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="w-full md:w-1/2 bg-white rounded-xl p-6 shadow-md">
              <div className="space-y-4">
                <p className="text-sm text-gray-500 mb-2">Example prompt:</p>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <p className="text-gray-800">
                    "Send onboarding emails and auto-schedule intro call for new leads that fill out my website contact form."
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <p className="text-sm text-gray-600">Builds in seconds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
