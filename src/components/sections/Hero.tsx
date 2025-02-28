import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Radio } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-background" />

      <div className="my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="h-screen bg-blue-600 flex justify-center items-center"
          >
            <div className="container text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Smart Retail Analytics Through{" "}
                <span className="text-white">IoT Innovation</span>
              </h1>
              <p className="text-xl text-white mb-8">
                Reduce inventory costs by 30% with real-time stock monitoring and automated reordering powered by IoT sensors and computer vision.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Book Demo
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: -200 }} // Start off-screen to the left
            animate={{ opacity: 1, x: 0 }} // Slide in to its natural position
            transition={{ duration: 2.5, ease: "easeOut" }} 
            className="relative"
          >
            <div className="aspect-square rounded-full bg-primary/10 absolute -right-20 -top-20 blur-3xl" />
            <div className="relative bg-background/50 backdrop-blur-sm p-8">
              <img
                src="https://images.unsplash.com/photo-1733507267119-5b7ea4a989cb"
                alt="IoT Sensor Demo"
                className="w-full rounded-lg mb-6"
              />
              <div className="flex items-center gap-4 text-sm">
                <Radio className="text-primary animate-pulse" />
                <span>Active IoT sensors monitoring inventory</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}