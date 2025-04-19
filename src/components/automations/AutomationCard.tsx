
import React from 'react';
import { Eye } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Automation {
  id: string;
  name: string;
  createdAt: string;
  status: 'active' | 'paused' | 'failed';
  description: string;
  logs: string[];
}

interface AutomationCardProps {
  automation: Automation;
  onViewDetails: () => void;
}

const statusColors = {
  active: 'bg-green-100 text-green-800 border-green-200',
  paused: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  failed: 'bg-red-100 text-red-800 border-red-200'
};

const AutomationCard = ({ automation, onViewDetails }: AutomationCardProps) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-start justify-between">
          <span className="text-lg font-semibold">{automation.name}</span>
          <Badge className={statusColors[automation.status]} variant="outline">
            {automation.status.charAt(0).toUpperCase() + automation.status.slice(1)}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-gray-500 mb-4">
          Created on {new Date(automation.createdAt).toLocaleDateString()}
        </div>
        <Button
          variant="outline"
          className="w-full"
          onClick={onViewDetails}
        >
          <Eye className="mr-2 h-4 w-4" />
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default AutomationCard;
