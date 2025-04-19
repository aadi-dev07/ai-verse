import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Chatbot from "@/components/dashboard/Chatbot";
import { useAuth } from "@/context/AuthContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GradientButton } from "@/components/ui/gradient-button";
import { Mail, PhoneCall, MessageCircle, Users, ArrowRight, Play, Pause, AlertCircle } from "lucide-react";

const automationSuggestions = [
  {
    title: "Email Follow-Up Sequence",
    description: "Automatically follow up with leads who haven't responded",
    icon: Mail,
    category: "Email & Lead"
  },
  {
    title: "Call Scheduling & Reminders",
    description: "Schedule calls and send automatic reminders",
    icon: PhoneCall,
    category: "Call & Follow-up"
  },
  {
    title: "Customer Onboarding",
    description: "Send welcome materials and schedule onboarding calls",
    icon: Users,
    category: "HR & Onboarding"
  },
  {
    title: "Support Chat Automation",
    description: "Automate responses to common customer questions",
    icon: MessageCircle,
    category: "Chat & Support"
  }
];

const activeWorkflows = [
  {
    name: "Lead Qualification",
    status: "active",
    lastRun: "2 hours ago",
    tasks: 145,
    category: "Email & Lead"
  },
  {
    name: "Client Onboarding",
    status: "active",
    lastRun: "1 day ago",
    tasks: 87,
    category: "HR & Onboarding"
  },
  {
    name: "Meeting Follow-ups",
    status: "paused",
    lastRun: "3 days ago",
    tasks: 32,
    category: "Call & Follow-up"
  }
];

const Dashboard = () => {
  const [promptInput, setPromptInput] = useState("");
  const { profile } = useAuth();
  const userName = profile?.full_name || "User";

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-2xl font-heading font-bold mb-1">
                Welcome back, {userName}!
              </h1>
              <p className="text-gray-600">
                Here's what's happening with your automations today.
              </p>
            </div>
            
            <div className="mt-4 md:mt-0">
              <GradientButton>
                Create New Automation
                <ArrowRight className="ml-2 h-4 w-4" />
              </GradientButton>
            </div>
          </div>
          
          {/* Quick Start Prompt Box */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Quick-Start Prompt</CardTitle>
              <CardDescription>
                Describe what you want to automate in plain language. Our AI will build it for you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <textarea
                  value={promptInput}
                  onChange={(e) => setPromptInput(e.target.value)}
                  placeholder="Send onboarding emails and auto-schedule intro call for new leads."
                  className="w-full min-h-[100px] p-4 rounded-lg border border-gray-200 focus:border-autoverse-400 focus:ring-2 focus:ring-autoverse-200 outline-none transition-all resize-none"
                ></textarea>
                <GradientButton className="absolute right-3 bottom-3">
                  Build Automation
                </GradientButton>
              </div>
            </CardContent>
          </Card>
          
          {/* Automation Suggestions */}
          <h2 className="text-xl font-heading font-semibold mb-4">
            Suggested Automations for Your Business
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {automationSuggestions.map((suggestion, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-autoverse-100 flex items-center justify-center mb-4">
                      <suggestion.icon className="h-6 w-6 text-autoverse-600" />
                    </div>
                    <h3 className="font-semibold mb-2">{suggestion.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{suggestion.description}</p>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {suggestion.category}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Active Workflows */}
          <h2 className="text-xl font-heading font-semibold mb-4">
            Active Workflows & Status
          </h2>
          
          <div className="grid grid-cols-1 gap-4">
            {activeWorkflows.map((workflow, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="border-l-4 border-autoverse-600 pl-4 p-4 flex items-center justify-between">
                  <div>
                    <div className="flex items-center">
                      <h3 className="font-semibold">{workflow.name}</h3>
                      <span className={`ml-3 text-xs px-2 py-0.5 rounded-full ${
                        workflow.status === 'active' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {workflow.status.charAt(0).toUpperCase() + workflow.status.slice(1)}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mt-1">
                      <span className="mr-4">Last run: {workflow.lastRun}</span>
                      <span>{workflow.tasks} tasks completed</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {workflow.category}
                    </span>
                    {workflow.status === 'active' ? (
                      <button className="p-2 rounded-full text-gray-600 hover:bg-gray-100">
                        <Pause className="h-4 w-4" />
                      </button>
                    ) : (
                      <button className="p-2 rounded-full text-gray-600 hover:bg-gray-100">
                        <Play className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Alert for Completed Tasks */}
          <div className="mt-8 flex gap-3 items-center bg-autoverse-50 border border-autoverse-100 p-4 rounded-lg text-autoverse-700">
            <AlertCircle className="h-5 w-5 shrink-0" />
            <p className="text-sm">
              <strong>Pro Tip:</strong> Your automations have completed 264 tasks this week - saving you approximately 15 hours of manual work!
            </p>
          </div>
        </div>
      </main>
      
      <Chatbot />
    </div>
  );
};

export default Dashboard;
