
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { FileJson } from "lucide-react";

interface AddAutomationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddAutomationModal = ({ isOpen, onClose }: AddAutomationModalProps) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [credentials, setCredentials] = useState("");
  const [jsonFile, setJsonFile] = useState<File | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "application/json") {
      setJsonFile(file);
    } else {
      toast({
        title: "Invalid file type",
        description: "Please upload a JSON file",
        duration: 3000,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically make an API call to save the automation
    // For now, we'll just show a success message and close
    toast({
      title: "Success",
      description: "Automation saved successfully!",
      duration: 3000,
    });
    
    onClose();
    navigate("/dashboard/automations");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Create a New Automation</DialogTitle>
          <DialogDescription className="text-gray-500">
            Define the details to add your automation.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Automation Name
            </label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter automation name"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium">
              Description
            </label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your automation"
              required
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="credentials" className="text-sm font-medium">
              Credentials Required
            </label>
            <Input
              id="credentials"
              value={credentials}
              onChange={(e) => setCredentials(e.target.value)}
              placeholder="API keys, tokens, or links"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="jsonFile" className="text-sm font-medium">
              Reference JSON File
            </label>
            <div className="flex items-center gap-2">
              <Input
                id="jsonFile"
                type="file"
                accept="application/json"
                onChange={handleFileUpload}
                className="hidden"
              />
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => document.getElementById('jsonFile')?.click()}
              >
                <FileJson className="w-4 h-4 mr-2" />
                {jsonFile ? jsonFile.name : "Upload JSON File"}
              </Button>
            </div>
          </div>

          <div className="flex gap-3 justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button type="submit">
              Save Automation
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddAutomationModal;
