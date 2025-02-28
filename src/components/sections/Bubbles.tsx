import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Boxes, BarChart3, Brain, Zap } from "lucide-react";


const Bubbles = () => {
    return (
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              x: [0, Math.random() * 500 - 250, 0],
              y: [0, Math.random() * 500 - 250, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5, // Random duration between 5 and 10 seconds
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5, // Random delay to stagger animations
            }}
            className="absolute w-16 h-16 bg-blue-200/50 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    );
  };

  export default Bubbles;