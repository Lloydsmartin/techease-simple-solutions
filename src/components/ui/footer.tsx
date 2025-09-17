import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageSquare, Linkedin, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted-dark text-muted-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">TE</span>
              </div>
              <div>
                <span className="font-bold text-lg text-white">TechEase</span>
                <span className="text-primary font-medium"> Solutions</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Your trusted IT partner making technology simple and stress-free. 
              Professional solutions for individuals and businesses.
            </p>
            <div className="text-sm">
              <p className="font-medium text-primary">"Your Tech, Our Care"</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Quick Links</h3>
            <div className="flex flex-col space-y-2 text-sm">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
              <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
              <Link to="/why-choose-us" className="hover:text-primary transition-colors">Why Choose Us</Link>
              <Link to="/testimonials" className="hover:text-primary transition-colors">Testimonials</Link>
              <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Our Services</h3>
            <div className="flex flex-col space-y-2 text-sm">
              <span>Computer Repair</span>
              <span>Software Installation</span>
              <span>Cybersecurity</span>
              <span>Data Recovery</span>
              <span>Network Setup</span>
              <span>Website Creation</span>
              <span>Tech Consultation</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+254700244989" className="text-sm hover:text-primary transition-colors">
                  +254 700 244 989
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <MessageSquare className="w-4 h-4 text-secondary" />
                <a 
                  href="https://wa.me/254700244989" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm hover:text-secondary transition-colors"
                >
                  WhatsApp
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent" />
                <a 
                  href="mailto:lloydsmusau02@gmail.com" 
                  className="text-sm hover:text-accent transition-colors"
                >
                  lloydsmusau02@gmail.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Linkedin className="w-4 h-4 text-primary" />
                <a 
                  href="https://www.linkedin.com/in/lloydsmusau/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm hover:text-primary transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="pt-4 border-t border-border">
              <Button asChild variant="outline" size="sm" className="w-full">
                <a href="tel:+254700244989" className="flex items-center justify-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>Emergency Support</span>
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm">
              <p>&copy; {currentYear} TechEase Solutions. All rights reserved.</p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <span>Available 24/7 for Emergency Support</span>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                <span className="text-secondary">Online Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;