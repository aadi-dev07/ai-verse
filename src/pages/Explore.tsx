
import { Helmet } from "react-helmet";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { GradientButton } from "@/components/ui/gradient-button";
import { Mail, PhoneCall, Users, TrendingUp, FileText } from "lucide-react";

const automationServices = [
  {
    icon: <Mail className="h-8 w-8 text-autoverse-600" />,
    name: "Email Automation",
    description: "Automate your email sequences, lead nurturing, and follow-ups to convert more customers."
  },
  {
    icon: <PhoneCall className="h-8 w-8 text-autoverse-600" />,
    name: "Call & Follow-up Automation",
    description: "Schedule calls, send reminders, and automate post-call actions through seamless VAPI integration."
  },
  {
    icon: <Users className="h-8 w-8 text-autoverse-600" />,
    name: "HR Automation",
    description: "Streamline employee onboarding, document collection, and training workflows with AI-powered processes."
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-autoverse-600" />,
    name: "Lead Generation",
    description: "Capture, qualify, and nurture leads automatically. Convert visitors into customers with smart workflows."
  },
  {
    icon: <FileText className="h-8 w-8 text-autoverse-600" />,
    name: "Content Automation",
    description: "Generate, schedule, and distribute content across multiple channels with AI-powered content tools."
  }
];

const Explore = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Explore AutoVerse - Your One-Stop Automation Partner</title>
      </Helmet>
      <Navbar />
      <main className="flex-grow animate-fade-in">
        <section className="py-20 bg-gradient-to-b from-white to-autoverse-50/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 bg-gradient-to-r from-tech-purple to-autoverse-600 bg-clip-text text-transparent">
                Explore AutoVerse — Your One-Stop Automation Partner
              </h1>
              <p className="text-lg text-gray-600">
                Discover our suite of AI-powered automation solutions designed to streamline your business operations and boost productivity.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {automationServices.map((service, index) => (
                <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 card-glow overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="w-14 h-14 rounded-lg bg-autoverse-100 flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl font-heading">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <CardDescription className="text-gray-600 text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <GradientButton className="w-full">
                      Use This Agent
                    </GradientButton>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="mt-20 bg-white rounded-2xl p-10 border border-gray-100 shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="text-3xl font-heading font-bold mb-4 text-autoverse-gradient">
                    Need a Custom Automation?
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Don't see exactly what you're looking for? We create custom automation 
                    solutions tailored to your unique business requirements.
                  </p>
                  <GradientButton size="lg">
                    Request Custom Solution
                  </GradientButton>
                </div>
                <div className="bg-gradient-to-r from-autoverse-50 to-tech-purple/10 rounded-xl p-8">
                  <h3 className="text-xl font-heading font-semibold mb-4">
                    Our Custom Solutions Process
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Initial consultation to understand your needs",
                      "Tailored solution design by our automation experts",
                      "Implementation and integration with your existing systems",
                      "Comprehensive testing and quality assurance",
                      "Ongoing support and optimization"
                    ].map((step, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="bg-autoverse-100 text-autoverse-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Explore;
