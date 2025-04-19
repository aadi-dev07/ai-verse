
import React from "react";
import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";

interface PricingPlan {
  name: string;
  useCase: string;
  features: string[];
  price: string;
  isPopular?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Basic",
    useCase: "Try it out",
    features: ["1 project", "Manual data upload", "PDF reports only"],
    price: "$49",
  },
  {
    name: "Smart",
    useCase: "Small businesses",
    features: ["3 projects", "Real-time tracking", "Email support"],
    price: "$149",
    isPopular: true,
  },
  {
    name: "Pro Plus",
    useCase: "Marketing teams",
    features: ["10 campaigns", "Live dashboards", "A/B testing"],
    price: "$399",
  },
  {
    name: "Custom Elite",
    useCase: "Large orgs or agencies",
    features: ["Unlimited usage", "Dedicated AI model", "API access"],
    price: "Let's Talk",
  },
];

const Pricing = () => {
  return (
    <div className="container mx-auto px-4 py-24 min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold font-heading mb-4 bg-gradient-to-r from-tech-purple to-autoverse-600 bg-clip-text text-transparent">
          Flexible Plans for Every Business
        </h1>
        <p className="text-lg text-gray-600">
          Pick the plan that matches your growth stage — upgrade anytime as your needs evolve.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {pricingPlans.map((plan) => (
          <Card
            key={plan.name}
            className={`p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 ${
              plan.isPopular ? 'border-autoverse-500 border-2' : ''
            }`}
          >
            <div>
              <h3 className="text-2xl font-bold font-heading mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-4">{plan.useCase}</p>
              <div className="mb-6">
                <span className="text-3xl font-bold">{plan.price}</span>
                {plan.price !== "Let's Talk" && <span className="text-gray-600">/month</span>}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-700">
                    <Check className="w-5 h-5 text-autoverse-600 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            {plan.name === "Custom Elite" ? (
              <Button
                variant="outline"
                className="w-full border-autoverse-500 text-autoverse-600 hover:bg-autoverse-50"
              >
                Contact Sales
              </Button>
            ) : (
              <GradientButton className="w-full">
                Get Started
              </GradientButton>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
