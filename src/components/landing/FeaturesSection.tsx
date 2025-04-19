
import { Mail, PhoneCall, Users, MessageCircle, Sparkles } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Mail className="h-8 w-8 text-autoverse-600" />,
      title: "Email & Lead Automation",
      description: "Automate your email sequences, lead nurturing, and follow-ups to convert more customers."
    },
    {
      icon: <PhoneCall className="h-8 w-8 text-autoverse-600" />,
      title: "Call & Follow-up Automation",
      description: "Schedule calls, send reminders, and automate post-call actions through seamless VAPI integration."
    },
    {
      icon: <Users className="h-8 w-8 text-autoverse-600" />,
      title: "HR & Onboarding Flows",
      description: "Streamline employee onboarding, document collection, and training workflows."
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-autoverse-600" />,
      title: "Chat & Customer Support",
      description: "Deploy AI-powered chat support that handles common questions and escalates when needed."
    },
    {
      icon: <Sparkles className="h-8 w-8 text-autoverse-600" />,
      title: "Custom Workflow Requests",
      description: "Human-in-the-loop service for building custom automations tailored to your specific needs."
    }
  ];

  return (
    <section id="features" className="py-20 bg-autoverse-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Core Features & Capabilities
          </h2>
          <p className="text-lg text-gray-600">
            Our AI-powered platform handles all your business automation needs in one place,
            so you can focus on growth, not processes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full"
            >
              <div className="w-16 h-16 rounded-lg bg-autoverse-100 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-autoverse-100/30 to-transparent"></div>
            
            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-heading font-bold mb-4">
                  Prompt-Based Automation
                </h3>
                <p className="text-gray-600 mb-6">
                  Simply type what you want to automate in plain language, and our AI will build it for you.
                </p>
                
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What would you like to automate today?
                  </label>
                  <div className="relative">
                    <textarea 
                      className="w-full min-h-[100px] px-4 py-3 rounded-lg border border-gray-200 focus:border-autoverse-400 focus:ring-2 focus:ring-autoverse-200 outline-none transition-all resize-none"
                      placeholder="Send onboarding emails and auto-schedule intro call for new leads."
                    ></textarea>
                    <button className="absolute right-3 bottom-3 bg-autoverse-600 text-white rounded-lg px-4 py-2 text-sm font-medium hover:bg-autoverse-700 transition-colors">
                      Build Automation
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Examples: "Follow up with leads who haven't responded in 3 days" or "Schedule social media posts from my content calendar"
                  </p>
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="bg-gradient-to-r from-autoverse-600 to-tech-purple rounded-xl text-white p-8">
                  <h4 className="text-xl font-heading font-semibold mb-4">
                    We Handle The Complex Stuff
                  </h4>
                  <p className="text-white/90 mb-6">
                    Behind the scenes, Autoverse's AI:
                  </p>
                  
                  <ul className="space-y-3">
                    {[
                      "Understands your business context",
                      "Maps out workflow logic",
                      "Connects necessary integrations",
                      "Tests every automation before deployment",
                      "Monitors performance and suggests improvements"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="bg-white/20 rounded-full p-1 mt-0.5">
                          <Check className="h-3 w-3 text-white" />
                        </span>
                        <span className="text-white/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

// Missing import for Check icon
import { Check } from "lucide-react";
