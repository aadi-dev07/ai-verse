
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const industries = [
  "E-commerce",
  "Professional Services",
  "Marketing Agency",
  "Software/SaaS",
  "Financial Services",
  "Healthcare",
  "Real Estate",
  "Education",
  "Manufacturing",
  "Retail",
  "Other"
];

const automationOptions = [
  { id: "email", label: "Email Automation" },
  { id: "calls", label: "Call & Follow-up Automation" },
  { id: "hr", label: "HR & Onboarding" },
  { id: "leads", label: "Lead Generation" },
  { id: "support", label: "Customer Support" },
  { id: "content", label: "Content Creation" }
];

type BusinessSize = "Solo" | "SMB" | "Enterprise";

interface OnboardingData {
  business_name: string;
  industry: string;
  businessSize: BusinessSize;
  automationNeeds: string[];
  customNeeds?: string;
}

interface OnboardingFormProps {
  initialData?: Partial<OnboardingData>;
  onSubmit: (data: OnboardingData) => void;
  onSkip?: () => void;
}

const OnboardingForm = ({ initialData, onSubmit, onSkip }: OnboardingFormProps) => {
  const [formData, setFormData] = useState<OnboardingData>({
    business_name: initialData?.business_name || "",
    industry: initialData?.industry || "",
    businessSize: initialData?.businessSize || "SMB",
    automationNeeds: initialData?.automationNeeds || [],
    customNeeds: initialData?.customNeeds || ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (id: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        automationNeeds: [...prev.automationNeeds, id]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        automationNeeds: prev.automationNeeds.filter(need => need !== id)
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="business_name">Business Name</Label>
        <input
          type="text"
          id="business_name"
          name="business_name"
          value={formData.business_name}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-autoverse-400 focus:ring-2 focus:ring-autoverse-200 outline-none transition-all"
          placeholder="Your business name"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="industry">Industry / Niche</Label>
        <Select
          value={formData.industry}
          onValueChange={(value) => handleSelectChange("industry", value)}
        >
          <SelectTrigger id="industry" className="w-full">
            <SelectValue placeholder="Select your industry" />
          </SelectTrigger>
          <SelectContent>
            {industries.map((industry) => (
              <SelectItem key={industry} value={industry}>
                {industry}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="businessSize">Business Size</Label>
        <Select
          value={formData.businessSize}
          onValueChange={(value) => handleSelectChange("businessSize", value as BusinessSize)}
        >
          <SelectTrigger id="businessSize" className="w-full">
            <SelectValue placeholder="Select your business size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Solo">Solo Entrepreneur</SelectItem>
            <SelectItem value="SMB">Small/Medium Business</SelectItem>
            <SelectItem value="Enterprise">Enterprise</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        <Label>Automation Needs (Select all that apply)</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {automationOptions.map((option) => (
            <div key={option.id} className="flex items-start space-x-2">
              <Checkbox 
                id={option.id}
                checked={formData.automationNeeds.includes(option.id)}
                onCheckedChange={(checked) => 
                  handleCheckboxChange(option.id, checked === true)
                }
              />
              <Label htmlFor={option.id} className="text-sm font-normal cursor-pointer">
                {option.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="customNeeds">Tell us more about your automation needs</Label>
        <Textarea
          id="customNeeds"
          name="customNeeds"
          value={formData.customNeeds}
          onChange={handleChange}
          className="min-h-[100px] w-full"
          placeholder="Describe any specific workflows or processes you'd like to automate..."
        />
      </div>

      <div className="flex space-x-4 pt-4">
        {onSkip && (
          <button
            type="button"
            onClick={onSkip}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
          >
            Skip for now
          </button>
        )}
        <button
          type="submit"
          className="flex-1 bg-gradient-to-r from-tech-purple to-autoverse-600 text-white font-medium py-2 px-4 rounded-lg hover:from-autoverse-600 hover:to-tech-purple shadow-md transition-all"
        >
          Continue
        </button>
      </div>
    </form>
  );
};

export default OnboardingForm;
