
import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Chatbot from "@/components/dashboard/Chatbot";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GradientButton } from "@/components/ui/gradient-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Lightbulb } from "lucide-react";

const promptExamples = [
  "Send welcome emails to new clients and schedule an intro call",
  "Follow up with leads who haven't responded after 3 days",
  "Create a weekly report of customer support interactions",
  "Automatically assign incoming leads to sales reps based on territory",
  "Send birthday messages to clients with a special offer"
];

const integrationOptions = [
  {
    name: "Gmail",
    category: "Email",
    connected: true,
    icon: "📧"
  },
  {
    name: "Calendar",
    category: "Scheduling",
    connected: true,
    icon: "📅"
  },
  {
    name: "Slack",
    category: "Communication",
    connected: false,
    icon: "💬"
  },
  {
    name: "Salesforce",
    category: "CRM",
    connected: false,
    icon: "💼"
  },
  {
    name: "Zendesk",
    category: "Support",
    connected: true,
    icon: "🎫"
  },
  {
    name: "Hubspot",
    category: "Marketing",
    connected: false,
    icon: "📊"
  }
];

const NewPrompt = () => {
  const [promptInput, setPromptInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleBuildAutomation = () => {
    if (!promptInput.trim()) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Redirect or show success would happen here
    }, 2000);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-heading font-bold mb-1">
              Create New Automation
            </h1>
            <p className="text-gray-600">
              Describe what you want to automate and we'll build it for you.
            </p>
          </div>
          
          <Tabs defaultValue="prompt">
            <TabsList className="mb-8">
              <TabsTrigger value="prompt">Prompt Builder</TabsTrigger>
              <TabsTrigger value="guided">Guided Setup</TabsTrigger>
              <TabsTrigger value="integrations">Integrations</TabsTrigger>
            </TabsList>
            
            <TabsContent value="prompt">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Create with a Prompt</CardTitle>
                  <CardDescription>
                    Describe what you want to automate in detail. The more specific you are, the better results you'll get.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <textarea
                      value={promptInput}
                      onChange={(e) => setPromptInput(e.target.value)}
                      placeholder="E.g., When a new lead fills out the contact form, send them a welcome email series and schedule a discovery call if they click the calendar link."
                      className="w-full min-h-[180px] p-4 rounded-lg border border-gray-200 focus:border-autoverse-400 focus:ring-2 focus:ring-autoverse-200 outline-none transition-all resize-none"
                    ></textarea>
                  </div>
                  
                  <div className="flex justify-end">
                    <GradientButton 
                      size="lg" 
                      onClick={handleBuildAutomation}
                      disabled={isLoading || !promptInput.trim()}
                    >
                      {isLoading ? "Building Automation..." : "Build My Automation"}
                    </GradientButton>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lightbulb className="h-5 w-5 mr-2 text-yellow-500" />
                    Prompt Examples
                  </CardTitle>
                  <CardDescription>
                    Not sure what to automate? Try one of these examples to get started.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {promptExamples.map((example, index) => (
                      <div 
                        key={index}
                        onClick={() => setPromptInput(example)}
                        className="p-4 bg-gray-50 rounded-lg border border-gray-100 cursor-pointer hover:bg-autoverse-50 hover:border-autoverse-100 transition-colors"
                      >
                        <p className="text-gray-700">{example}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="guided">
              <Card>
                <CardHeader>
                  <CardTitle>Guided Setup</CardTitle>
                  <CardDescription>
                    Create an automation by answering a few simple questions about your needs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600 py-8">
                    The guided setup wizard would be implemented here with step-by-step form fields to create an automation without free-form prompting.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="integrations">
              <Card>
                <CardHeader>
                  <CardTitle>Connected Services</CardTitle>
                  <CardDescription>
                    Manage the services and platforms that Autoverse can work with.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {integrationOptions.map((integration, index) => (
                      <div 
                        key={index}
                        className="p-4 bg-white rounded-lg border border-gray-200 flex items-center justify-between"
                      >
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center mr-3 text-xl">
                            {integration.icon}
                          </div>
                          <div>
                            <h3 className="font-medium">{integration.name}</h3>
                            <p className="text-sm text-gray-600">{integration.category}</p>
                          </div>
                        </div>
                        
                        {integration.connected ? (
                          <div className="flex items-center text-green-600 text-sm">
                            <Check className="h-4 w-4 mr-1" />
                            Connected
                          </div>
                        ) : (
                          <button className="text-sm text-autoverse-600 font-medium hover:text-autoverse-700">
                            Connect
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Chatbot />
    </div>
  );
};

export default NewPrompt;
