import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, X } from "lucide-react";

export default function ProductDemo() {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <section id="demo" className="py-24 bg-blue-600 rounded-xl">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            See SmartShelf in Action
          </h2>
          <p className="text-white text-lg max-w-2xl mx-auto">
            Watch how our IoT-powered shelves revolutionize retail inventory management
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="overflow-hidden">
              <div className="relative aspect-video bg-muted">
                {/* Replace src with actual demo video URL */}
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/MtSojiNQH_4?si=anhnp_Sw258sTv1m"
                  title="SmartShelf Demo Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">
                  Smart Inventory Management Demo
                </h3>
                <p className="text-muted-foreground mb-4">
                  See how SmartShelf automatically tracks inventory, generates insights, and optimizes stock levels.
                </p>
                <Button className="gap-2" onClick={toggleFullScreen}>
                  <Play className="h-4 w-4" /> Watch Full Demo
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>

        {isFullScreen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative w-full h-full max-w-4xl max-h-[90vh]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/MtSojiNQH_4?si=anhnp_Sw258sTv1m&autoplay=1"
                title="SmartShelf Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <Button
                className="absolute top-4 right-4 bg-white text-black hover:bg-gray-200"
                onClick={toggleFullScreen}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}