import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Cloud, ShoppingBag, CreditCard, BarChart, Database, Network } from "lucide-react";

const partners = [
  {
    name: "Microsoft Azure",
    description: "Cloud infrastructure and IoT services",
    icon: Cloud
  },
  {
    name: "Amazon AWS",
    description: "Cloud computing and storage solutions",
    icon: Database
  },
  {
    name: "Google Cloud",
    description: "AI and machine learning integration",
    icon: Network
  },
  {
    name: "Shopify",
    description: "E-commerce platform integration",
    icon: ShoppingBag
  },
  {
    name: "Square",
    description: "Payment processing solutions",
    icon: CreditCard
  },
  {
    name: "SAP",
    description: "Enterprise resource planning",
    icon: BarChart
  }
];

export default function Partners() {
  return (
    <section id="partners" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            Integration Partners
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Seamlessly integrate with your existing tech stack through our trusted partners
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <partner.icon className="h-12 w-12 text-primary" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{partner.name}</h3>
                      <p className="text-sm text-muted-foreground">{partner.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}