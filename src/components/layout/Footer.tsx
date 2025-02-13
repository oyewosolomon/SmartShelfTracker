import { Link } from "wouter";
import { Twitter, Linkedin, Github } from "lucide-react";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Analytics", href: "#analytics" },
  { label: "Success Stories", href: "#success" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" }
];

export default function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link href="/" className="font-bold text-xl mb-4 block">
              SmartShelf
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Revolutionizing retail operations through IoT innovation and real-time analytics. 
              Reduce inventory costs and optimize stock management with our smart solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>contact@smartshelf.com</p>
              <p>+1 (555) 123-4567</p>
              <p>
                123 Innovation Street<br />
                Tech Hub, CA 94103<br />
                United States
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SmartShelf Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
