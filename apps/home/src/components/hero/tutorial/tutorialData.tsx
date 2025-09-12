import { Sparkles, Shield, ArrowRight } from "lucide-react";
import { TutorialStep } from "./types";

export const TUTORIAL_STEPS: TutorialStep[] = [
  {
    id: 1,
    title: "Premium Italian Fabric",
    description: "Hand-selected from the finest Italian mills",
    icon: () => <Sparkles className="w-3 h-3" />,
    target: "mens-fabric",
    delay: 4000
  },
  {
    id: 2,
    title: "Advanced Protection Technology",
    description: "Our proprietary nano-coating protects every thread",
    icon: () => <Shield className="w-3 h-3" />,
    target: "mens-fabric",
    delay: 4000
  },
  {
    id: 3,
    title: "Smart Wearable Integration",
    description: "Seamlessly embedded sensors monitor fabric health",
    icon: () => <ArrowRight className="w-3 h-3" />,
    target: "discover-more",
    delay: 4000
  },
  {
    id: 4,
    title: "Luxury Women's Collection",
    description: "Premium silk with intelligent care technology",
    icon: () => <Sparkles className="w-3 h-3" />,
    target: "womens-fabric",
    delay: 4000
  },
  {
    id: 5,
    title: "Complete Protection System",
    description: "From fabric to finish, every detail is protected",
    icon: () => <Shield className="w-3 h-3" />,
    target: "womens-fabric",
    delay: 4000
  }
];
