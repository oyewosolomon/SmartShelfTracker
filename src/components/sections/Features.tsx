import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Boxes, BarChart3, Brain, Zap } from "lucide-react";
import Bubbles from "./Bubbles";
import { SectionProps } from "@/types/Type";


const features = [
  {
    icon: Boxes,
    title: "Real-time Monitoring",
    description: "Track inventory levels across all locations with IoT sensors providing instant updates.",
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description: "Make data-driven decisions with comprehensive analytics and predictive insights.",
  },
  {
    icon: Brain,
    title: "Computer Vision",
    description: "Advanced image recognition for automated product identification and shelf monitoring.",
  },
  {
    icon: Zap,
    title: "Automated Reordering",
    description: "Never run out of stock with AI-powered automated reordering system.",
  },
];

export default function Features({ id }: SectionProps) {
  return (
    <section className="py-24 bg-muted/50 relative overflow-hidden">
      {/* Bubbles Background */}
      <Bubbles />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            Transform Your Retail Operations
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our comprehensive suite of IoT-powered solutions helps retailers optimize inventory management and boost efficiency.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Apply hover:text-white to the Card */}
                <Card className="h-full hover:bg-blue-600 hover:text-white transition-colors duration-300">
                  <CardContent className="pt-6">
                    {/* Apply hover:text-white to the icon */}
                    <feature.icon className="h-12 w-12 text-primary mb-4 hover:text-white transition-colors duration-300" />
                    {/* Apply hover:text-white to the title and description */}
                    <h3 className="font-semibold text-xl mb-5 hover:text-white transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground hover:text-white transition-colors duration-300">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}