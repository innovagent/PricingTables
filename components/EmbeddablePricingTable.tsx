import { useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Switch } from "./ui/switch";
import { Check, X } from "lucide-react";

interface Feature {
  name: string;
  available: boolean;
}

interface PricingTier {
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  features: (string | Feature)[];
  isPopular?: boolean;
  buttonText: string;
  buttonVariant: "default" | "outline" | "secondary";
}

const pricingTiers: PricingTier[] = [
  {
    name: "Basic",
    monthlyPrice: 97,
    annualPrice: 81,
    description: "Simplify Your Pipeline",
    features: [
      "Innovagent Mobile App",
      "AI-enabled Chat Widget",
      "Meta DM Chat Widget",
      "Meta Comments Widget",
      "Social Media Reputation Management",
      "AI-enabled Email Campaign Builder",
      "AI-enabled Calendaring",
      "Payment Integration",
      { name: "AI Employee", available: false },
      { name: "AI Marketing Tools", available: false },
      { name: "Advanced Reporting", available: false },
      { name: "AI Workflows", available: false },
      { name: "AI Automations", available: false },
      { name: "Forms and Surveys", available: false },
      { name: "Missed Call Text Back", available: false },
      { name: "Lightweight CRM", available: false },
      {
        name: "CRM integration (Salesforce, ServiceTitan, Jobber)",
        available: false,
      },
      {
        name: "Dedicated Customer Success Manager",
        available: false,
      },
      { name: "Priority Support", available: false },
      {
        name: "Advanced Setup for Workflows and CRM",
        available: false,
      },
      { name: "Custom Integrations", available: false },
      { name: "Custom Campaign Setup", available: false },
      { name: "Advanced Reputation Manager", available: false },
    ],
    buttonText: "Start Basic Trial",
    buttonVariant: "outline",
  },
  {
    name: "Standard",
    monthlyPrice: 297,
    annualPrice: 248,
    description: "Power to Save Massive Time",
    features: [
      "Innovagent Mobile App",
      "AI-enabled Chat Widget",
      "Meta DM Chat Widget",
      "Meta Comments Widget",
      "Social Media Reputation Management",
      "AI-enabled Email Campaign Builder",
      "AI-enabled Calendaring",
      "Payment Integration",
      { name: "AI Employee", available: true },
      { name: "AI Marketing Tools", available: true },
      { name: "Advanced Reporting", available: true },
      { name: "AI Workflows", available: true },
      { name: "AI Automations", available: true },
      { name: "Forms and Surveys", available: true },
      { name: "Missed Call Text Back", available: true },
      { name: "Lightweight CRM", available: true },
      {
        name: "CRM integration (Salesforce, ServiceTitan, Jobber)",
        available: true,
      },
      {
        name: "Dedicated Customer Success Manager",
        available: true,
      },
      { name: "Priority Support", available: true },
      {
        name: "Advanced Setup for Workflows and CRM",
        available: false,
      },
      { name: "Custom Integrations", available: false },
      { name: "Custom Campaign Setup", available: false },
      { name: "Advanced Reputation Manager", available: false },
    ],
    isPopular: true,
    buttonText: "Start Standard Trial",
    buttonVariant: "default",
  },
  {
    name: "Premium",
    monthlyPrice: 497,
    annualPrice: 415,
    description: "Level Up Your Productivity",
    features: [
      "Innovagent Mobile App",
      "AI-enabled Chat Widget",
      "Meta DM Chat Widget",
      "Meta Comments Widget",
      "Social Media Reputation Management",
      "AI-enabled Email Campaign Builder",
      "AI-enabled Calendaring",
      "Payment Integration",
      { name: "AI Employee", available: true },
      { name: "AI Marketing Tools", available: true },
      { name: "Advanced Reporting", available: true },
      { name: "AI Workflows", available: true },
      { name: "AI Automations", available: true },
      { name: "Forms and Surveys", available: true },
      { name: "Missed Call Text Back", available: true },
      { name: "Lightweight CRM", available: true },
      {
        name: "CRM integration (Salesforce, ServiceTitan, Jobber)",
        available: true,
      },
      {
        name: "Dedicated Customer Success Manager",
        available: true,
      },
      { name: "Priority Support", available: true },
      {
        name: "Advanced Setup for Workflows and CRM",
        available: true,
      },
      { name: "Custom Integrations", available: true },
      { name: "Custom Campaign Setup", available: true },
      { name: "Advanced Reputation Manager", available: true },
    ],
    buttonText: "Start Premium Trial",
    buttonVariant: "outline",
  },
];

export function EmbeddablePricingTable() {
  const [isAnnual, setIsAnnual] = useState(true);

  const formatPrice = (tier: PricingTier) => {
    const price = isAnnual ? tier.annualPrice : tier.monthlyPrice;
    return price === 0 ? "$0" : `$${price.toFixed(0)}`;
  };

  const getPeriod = (tier: PricingTier) => {
    return isAnnual ? "per month, billed annually" : "per month";
  };

  const getSavings = (tier: PricingTier) => {
    if (!isAnnual) return null;
    const monthlyCost = tier.monthlyPrice * 12;
    const annualCost = tier.annualPrice * 12;
    const savings = Math.round(((monthlyCost - annualCost) / monthlyCost) * 100);
    return savings;
  };

  return (
    <div
      className="min-h-screen w-full"
      style={{
        backgroundColor: "#6d28d9",
        fontFamily: "Raleway, sans-serif",
      }}
    >
      <div className="container mx-auto">
        <div className="w-full max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
              Simple, transparent pricing
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
              Choose the perfect plan for your needs. All plans include our core
              features with no hidden fees.
            </p>

            {/* Billing Toggle */}
            <div
              className="inline-flex items-center gap-4 backdrop-blur-sm rounded-full p-2 mb-12"
              style={{ backgroundColor: "#311687" }}
            >
              <span
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  !isAnnual
                    ? "bg-white text-gray-900"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Monthly
              </span>
              <Switch
                checked={isAnnual}
                onCheckedChange={setIsAnnual}
                className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-orange-600 data-[state=checked]:to-orange-500 data-[state=checked]:shadow-lg data-[state=checked]:shadow-orange-500/25 data-[state=unchecked]:bg-white/20 data-[state=unchecked]:shadow-inner transition-all duration-300"
                style={
                  {
                    "--tw-gradient-from": "#ff5722",
                    "--tw-gradient-to": "#e64a19",
                  } as React.CSSProperties
                }
              />
              <span
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isAnnual
                    ? "bg-white text-gray-900"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Annual
              </span>
              {isAnnual && (
                <Badge className="bg-green-500 text-white border-0 ml-2 font-medium">
                  Save 16%
                </Badge>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => {
              const savings = getSavings(tier);

              return (
                <Card
                  key={tier.name}
                  className={`relative border-0 transition-all duration-300 flex flex-col h-full ${
                    tier.isPopular ? "ring-2 scale-105" : ""
                  }`}
                  style={{
                    background: "linear-gradient(145deg, #3a1a8a, #2a1270)",
                    boxShadow: tier.isPopular
                      ? `
                      0 30px 60px -12px rgba(255, 87, 34, 0.4),
                      0 25px 50px -12px rgba(0, 0, 0, 0.5),
                      0 10px 20px -5px rgba(0, 0, 0, 0.3),
                      inset 0 1px 0 rgba(255, 255, 255, 0.1),
                      inset 0 -1px 0 rgba(0, 0, 0, 0.2),
                      0 0 0 3px #ff5722
                    `
                      : `
                      0 25px 50px -12px rgba(0, 0, 0, 0.5),
                      0 10px 20px -5px rgba(0, 0, 0, 0.3),
                      inset 0 1px 0 rgba(255, 255, 255, 0.1),
                      inset 0 -1px 0 rgba(0, 0, 0, 0.2)
                    `,
                    ...(tier.isPopular && {
                      "--tw-ring-color": "#ff5722",
                    }),
                  }}
                >
                  {tier.isPopular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge
                        className="text-white border-0 px-6 py-2 font-bold text-sm"
                        style={{
                          background:
                            "linear-gradient(145deg, #ff6722, #e54722)",
                          boxShadow: `
                            0 8px 16px -4px rgba(255, 87, 34, 0.4),
                            0 4px 8px -2px rgba(0, 0, 0, 0.3),
                            inset 0 1px 0 rgba(255, 255, 255, 0.2),
                            inset 0 -1px 0 rgba(0, 0, 0, 0.2)
                          `,
                        }}
                      >
                        MOST POPULAR
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="text-center pt-8 pb-6">
                    <CardTitle
                      className="text-2xl font-bold mb-2"
                      style={{ color: "#f4f4f4" }}
                    >
                      {tier.name}
                    </CardTitle>
                    <div className="mb-4">
                      <span
                        className="text-5xl font-bold transition-all duration-300"
                        style={{ color: "#f4f4f4" }}
                      >
                        {formatPrice(tier)}
                      </span>
                      <span
                        className="ml-2 text-lg"
                        style={{ color: "#f4f4f4", opacity: "0.8" }}
                      >
                        /{getPeriod(tier)}
                      </span>
                    </div>
                    <div className="h-8 flex items-center justify-center mb-4">
                      {savings ? (
                        <div className="text-sm text-green-600 font-semibold bg-green-50 px-3 py-1 rounded-full inline-block">
                          Save {savings}% with annual billing
                        </div>
                      ) : (
                        <div className="h-6"></div>
                      )}
                    </div>
                    <CardDescription
                      className="text-lg"
                      style={{ color: "#f4f4f4", opacity: "0.9" }}
                    >
                      {tier.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="px-8 pb-8 flex-grow">
                    <ul className="space-y-4">
                      {tier.features.map((feature, index) => {
                        const isFeatureObject = typeof feature === "object";
                        const featureName = isFeatureObject
                          ? feature.name
                          : feature;
                        const isAvailable = isFeatureObject
                          ? feature.available
                          : true;

                        return (
                          <li key={index} className="flex items-center gap-3">
                            {isAvailable ? (
                              <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                            ) : (
                              <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                            )}
                            <span
                              className={`font-medium ${
                                isAvailable ? "" : "line-through"
                              }`}
                              style={{
                                color: isAvailable ? "#f4f4f4" : "#f4f4f4",
                                opacity: isAvailable ? "0.9" : "0.5",
                              }}
                            >
                              {featureName}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </CardContent>

                  <CardFooter className="px-8 pb-8">
                    <Button
                      variant="default"
                      className="w-full transition-all duration-300 py-6 text-lg font-semibold text-white hover:scale-105"
                      size="lg"
                      style={{
                        background:
                          "linear-gradient(145deg, #4f46e5, #7c3aed)",
                        boxShadow: `
                          0 10px 20px -5px rgba(79, 70, 229, 0.4),
                          0 4px 8px -2px rgba(0, 0, 0, 0.3),
                          inset 0 1px 0 rgba(255, 255, 255, 0.2),
                          inset 0 -1px 0 rgba(0, 0, 0, 0.2)
                        `,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform =
                          "translateY(-3px) scale(1.02)";
                        e.currentTarget.style.boxShadow = `
                          0 15px 30px -5px rgba(79, 70, 229, 0.6),
                          0 8px 16px -2px rgba(0, 0, 0, 0.4),
                          inset 0 1px 0 rgba(255, 255, 255, 0.3),
                          inset 0 -1px 0 rgba(0, 0, 0, 0.2)
                        `;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform =
                          "translateY(0) scale(1)";
                        e.currentTarget.style.boxShadow = `
                          0 10px 20px -5px rgba(79, 70, 229, 0.4),
                          0 4px 8px -2px rgba(0, 0, 0, 0.3),
                          inset 0 1px 0 rgba(255, 255, 255, 0.2),
                          inset 0 -1px 0 rgba(0, 0, 0, 0.2)
                        `;
                      }}
                    >
                      {tier.buttonText}
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <p className="text-white/80 mb-6 text-lg">
              All plans include a 14-day free trial. No credit card required.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-white/70">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                Cancel anytime
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                GDPR Compliant
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                24/7 System Monitoring
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                Real-time Status Page
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}