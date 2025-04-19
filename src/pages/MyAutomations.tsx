
import React, { useState } from 'react';
import { Plus, Eye } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import AutomationCard from "@/components/automations/AutomationCard";
import AutomationDetails from "@/components/automations/AutomationDetails";

interface Automation {
  id: string;
  name: string;
  createdAt: string;
  status: 'active' | 'paused' | 'failed';
  description: string;
  logs: string[];
}

// Mock data - in a real app, this would come from an API
const mockAutomations: Automation[] = [
  {
    id: '1',
    name: 'Email Follow-up Sequence',
    createdAt: '2025-04-15',
    status: 'active',
    description: 'Automatically sends follow-up emails to leads',
    logs: ['Email sent to john@example.com', 'Follow-up scheduled for tomorrow']
  },
  {
    id: '2',
    name: 'Invoice Processing',
    createdAt: '2025-04-14',
    status: 'paused',
    description: 'Processes incoming invoices and updates accounting system',
    logs: ['Invoice #1234 processed', 'Waiting for approval']
  },
  {
    id: '3',
    name: 'Social Media Posts',
    createdAt: '2025-04-13',
    status: 'failed',
    description: 'Schedules and posts social media updates',
    logs: ['Error: API rate limit exceeded', 'Retrying in 5 minutes']
  }
];

const MyAutomations = () => {
  const [selectedAutomation, setSelectedAutomation] = useState<Automation | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const handleViewDetails = (automation: Automation) => {
    setSelectedAutomation(automation);
    setIsDetailsOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Your Active Automations
          </h1>
          <p className="text-gray-600">
            Manage, monitor, and control your business automations in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockAutomations.map((automation) => (
            <AutomationCard
              key={automation.id}
              automation={automation}
              onViewDetails={() => handleViewDetails(automation)}
            />
          ))}
        </div>

        {/* New Automation Button */}
        <Button
          className="fixed bottom-8 right-8 rounded-full shadow-lg"
          size="lg"
        >
          <Plus className="mr-2 h-5 w-5" />
          New Automation
        </Button>

        {/* Automation Details Modal */}
        <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Automation Details</DialogTitle>
            </DialogHeader>
            {selectedAutomation && (
              <AutomationDetails automation={selectedAutomation} />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default MyAutomations;
