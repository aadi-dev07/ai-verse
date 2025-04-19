
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Sidebar from "@/components/dashboard/Sidebar";
import { Edit, Plus, Trash } from "lucide-react";

// Mock data for initial development
const mockPrompts = [
  {
    id: "1",
    title: "Welcome Email Sequence",
    description: "Send personalized welcome emails to new clients and schedule follow-ups automatically.",
    lastEdited: "2025-04-15",
    tags: ["Email", "Onboarding"]
  },
  {
    id: "2",
    title: "Lead Follow-up",
    description: "Follow up with leads who haven't responded within 3 days with customized messages.",
    lastEdited: "2025-04-14",
    tags: ["Sales", "CRM"]
  }
];

const MyPrompts = () => {
  const navigate = useNavigate();
  const [editingPrompt, setEditingPrompt] = useState<typeof mockPrompts[0] | null>(null);

  const handleEdit = (prompt: typeof mockPrompts[0]) => {
    setEditingPrompt(prompt);
  };

  const handleUseNow = (promptId: string) => {
    navigate("/new-prompt", { state: { promptId } });
  };

  const handleDelete = (promptId: string) => {
    // Implement delete functionality
    console.log("Deleting prompt:", promptId);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-heading font-bold mb-1">
              Your Saved Prompts
            </h1>
            <p className="text-gray-600">
              Manage and reuse your most effective prompts for faster automation setup.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockPrompts.map((prompt) => (
              <Card key={prompt.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <h3 className="font-medium text-lg">{prompt.title}</h3>
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {prompt.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {prompt.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-autoverse-50 text-autoverse-600 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-500">
                      Last edited: {new Date(prompt.lastEdited).toLocaleDateString()}
                    </p>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEdit(prompt)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(prompt.id)}
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="default"
                        size="sm"
                        onClick={() => handleUseNow(prompt.id)}
                      >
                        Use Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Dialog open={!!editingPrompt} onOpenChange={() => setEditingPrompt(null)}>
          <DialogContent className="sm:max-w-[600px]">
            <h2 className="text-xl font-semibold mb-4">Edit Prompt</h2>
            {/* Edit form would go here */}
            <p className="text-gray-600">Edit prompt form would be implemented here.</p>
          </DialogContent>
        </Dialog>

        <Button
          className="fixed bottom-6 right-6 shadow-lg"
          size="lg"
          onClick={() => navigate("/new-prompt")}
        >
          <Plus className="mr-2 h-4 w-4" />
          New Prompt
        </Button>
      </main>
    </div>
  );
};

export default MyPrompts;
