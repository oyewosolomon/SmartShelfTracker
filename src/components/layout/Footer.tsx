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
    <footer className="border-t bg-blue-600/10">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center font-bold text-xl mb-4 block">
            <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" d="M7.4544 2.4212L7.23936 2.4614C5.15124 2.85176 3.56225 4.55367 3.32102 6.65818L3.30532 6.79516C2.89823 10.3467 2.89823 13.9329 3.30532 17.4844C3.55266 19.6422 5.24868 21.3512 7.41019 21.6206L8.42569 21.7471L8.42598 21.7472C8.92061 21.8088 9.16797 21.8396 9.41505 21.8654C11.1335 22.0449 12.866 22.0449 14.5845 21.8654C14.8315 21.8396 15.0789 21.8088 15.5735 21.7472L15.5738 21.7471L16.48 21.6342C18.7041 21.357 20.4473 19.5951 20.6948 17.3739L20.712 17.2199C21.1072 13.6729 21.0957 10.0925 20.6774 6.54809C20.4367 4.50764 18.8934 2.86019 16.8681 2.48157L16.5451 2.42119C13.541 1.8596 10.4585 1.8596 7.4544 2.4212Z" fill="#B4D9EF"></path> <path d="M7.48156 5.42503C7.164 5.15908 6.69098 5.20091 6.42503 5.51847C6.15908 5.83603 6.20091 6.30906 6.51847 6.57501C7.38044 7.29689 9.34385 8.25002 12 8.25002C14.6562 8.25002 16.6196 7.29689 17.4816 6.57501C17.7991 6.30906 17.841 5.83603 17.575 5.51847C17.3091 5.20091 16.836 5.15908 16.5185 5.42503C15.9413 5.90839 14.3238 6.75002 12 6.75002C9.67619 6.75002 8.05873 5.90839 7.48156 5.42503Z" fill="#1C274C"></path> </g></svg>
          
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
