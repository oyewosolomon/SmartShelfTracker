import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Instagram, Linkedin, Mail, MessageSquare, Phone } from "lucide-react";
import { FaTiktok, FaXTwitter } from "react-icons/fa6";
import { SectionProps } from "@/types/Type";


export default function Contact({id}: SectionProps) {
  return (
    <section id="contact" className="py-24 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to transform your retail operations? Contact us today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="space-y-4">
                    <Input placeholder="Name" />
                    <Input placeholder="Email" type="email" />
                    <Input placeholder="Company" />
                    <Textarea
                      placeholder="Message"
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-muted-foreground">hello@smartshelftech.com</p>
              </div>
            </div>

          
            <div className="mt-8 pt-8 border-gray-200">
                    <h4 className={`font-bold mb-4 text-gray-800}`}>Connect</h4>
                    <div className="flex gap-4">
                      <a href="www.facebook.com/emmanuel.kenneth.54" className="bg-gray-100 p-3 rounded-lg hover:bg-blue-100 transition-colors">
                        <Facebook className="text-gray-700 hover:text-blue-600" size={20} />
                      </a>
                      <a href="https://instagram.com/manlikekenzay" className="bg-gray-100 p-3 rounded-lg hover:bg-blue-100 transition-colors">
                        <Instagram className="text-gray-700 hover:text-blue-600" size={20} />
                      </a>
                      <a href="https://www.linkedin.com/in/kennethemmanuel?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="bg-gray-100 p-3 rounded-lg hover:bg-blue-100 transition-colors">
                        <Linkedin className="text-gray-700 hover:text-blue-600" size={20} />
                      </a>
                      <a href="https://tiktok.com/@manlikekenzay" className="bg-gray-100 p-3 rounded-lg hover:bg-blue-100 transition-colors">
                        <FaTiktok className="text-gray-700 hover:text-blue-600" size={20} />
                      </a>
                      <a href="https://twitter.com/iamkobaken" className="bg-gray-100 p-3 rounded-lg hover:bg-blue-100 transition-colors">
                        <FaXTwitter className="text-gray-700 hover:text-blue-600" size={20} />
                      </a>
                    </div>
          </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
