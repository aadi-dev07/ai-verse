
import React from 'react';
import { Play, Pause } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Automation {
  id: string;
  name: string;
  createdAt: string;
  status: 'active' | 'paused' | 'failed';
  description: string;
  logs: string[];
}

interface AutomationDetailsProps {
  automation: Automation;
}

const AutomationDetails = ({ automation }: AutomationDetailsProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">Overview</h3>
        <p className="text-gray-600">{automation.description}</p>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Execution Logs</h3>
          <Button variant="outline">
            {automation.status === 'active' ? (
              <>
                <Pause className="mr-2 h-4 w-4" />
                Pause Automation
              </>
            ) : (
              <>
                <Play className="mr-2 h-4 w-4" />
                Resume Automation
              </>
            )}
          </Button>
        </div>

        <ScrollArea className="h-[200px] rounded-md border p-4">
          {automation.logs.map((log, index) => (
            <div
              key={index}
              className="text-sm text-gray-600 py-1 border-b last:border-0"
            >
              {log}
            </div>
          ))}
        </ScrollArea>
      </div>
    </div>
  );
};

export default AutomationDetails;
