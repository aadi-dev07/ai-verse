
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Filter, Sales, Marketing, Key } from "lucide-react";

interface Agent {
  id: number;
  name: string;
  description: string;
  category: string;
  credentials: Array<{ key: string; label: string; type: string }>;
}

const agents: Agent[] = [
  {
    id: 1,
    name: "Sales Outreach Automation",
    description: "Automate your sales outreach process with personalized messaging and follow-ups",
    category: "Sales",
    credentials: [
      { key: "api_key", label: "API Key", type: "password" },
      { key: "email", label: "Email Address", type: "email" }
    ]
  },
  {
    id: 2,
    name: "Email Campaign Manager",
    description: "Create and manage sophisticated email campaigns with AI-powered content generation",
    category: "Marketing",
    credentials: [
      { key: "api_token", label: "API Token", type: "password" }
    ]
  },
  {
    id: 3,
    name: "HR Document Processor",
    description: "Automatically process and analyze HR documents using advanced AI algorithms",
    category: "HR",
    credentials: [
      { key: "access_key", label: "Access Key", type: "password" },
      { key: "organization_id", label: "Organization ID", type: "text" }
    ]
  }
];

const categories = ["All", "Sales", "Marketing", "HR", "Emails", "Lead Generation", "Content Creation"];

const Marketplace = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [credentials, setCredentials] = useState<Record<string, string>>({});

  const filteredAgents = agents.filter(
    agent => selectedCategory === "All" || agent.category === selectedCategory
  );

  const handleRunAgent = () => {
    console.log("Running agent with credentials:", credentials);
    // Add agent execution logic here
  };

  return (
    <div className="container mx-auto px-4 py-24 min-h-screen">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-heading mb-4 bg-gradient-to-r from-tech-purple to-autoverse-600 bg-clip-text text-transparent">
          Discover Agents in the AutoVerse Marketplace
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Explore powerful AI-driven agents for your business automation needs.
        </p>
      </div>

      {/* Filter Section */}
      <div className="mb-8 flex justify-end max-w-xs ml-auto">
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full">
            <Filter className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Agents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAgents.map((agent) => (
          <Card key={agent.id} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>{agent.name}</CardTitle>
              <CardDescription className="line-clamp-2">{agent.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button 
                className="w-full bg-gradient-to-r from-tech-purple to-autoverse-600 hover:from-autoverse-600 hover:to-tech-purple"
                onClick={() => {
                  setSelectedAgent(agent);
                  setIsModalOpen(true);
                }}
              >
                View Agent
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Agent Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{selectedAgent?.name}</DialogTitle>
            <DialogDescription>
              {selectedAgent?.description}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {selectedAgent?.credentials.map((cred) => (
              <div key={cred.key} className="grid grid-cols-4 items-center gap-4">
                <label htmlFor={cred.key} className="text-right">
                  {cred.label}
                </label>
                <Input
                  id={cred.key}
                  type={cred.type}
                  className="col-span-3"
                  onChange={(e) =>
                    setCredentials((prev) => ({
                      ...prev,
                      [cred.key]: e.target.value,
                    }))
                  }
                />
              </div>
            ))}
          </div>
          <Button
            onClick={handleRunAgent}
            className="w-full bg-gradient-to-r from-tech-purple to-autoverse-600 hover:from-autoverse-600 hover:to-tech-purple"
          >
            <Key className="w-4 h-4 mr-2" />
            Run Agent
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Marketplace;
