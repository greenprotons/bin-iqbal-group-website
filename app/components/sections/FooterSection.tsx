import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32 py-12">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Bin Iqbal Group</h3>
            <p className="mb-4">
              Excellence in construction and building services since 1995.
              Quality, reliability, and innovation in every project.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-white"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-white"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-white"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-white"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          {/* <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div> */}

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                {/* <a href="#" className="hover:text-white transition-colors"> */}
                  Commercial Construction
                {/* </a> */}
              </li>
              <li>
                {/* <a href="#" className="hover:text-white transition-colors"> */}
                  Residential Projects
                {/* </a> */}
              </li>
              <li>
                {/* <a href="#" className="hover:text-white transition-colors"> */}
                  Interior Finishing
                {/* </a> */}
              </li>
              {/* <li>
                <a href="#" className="hover:text-white transition-colors">
                  Project Management
                </a>
              </li> */}
              <li>
                {/* <a href="#" className="hover:text-white transition-colors"> */}
                  Consulting
                {/* </a> */}
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span>123 Construction Ave, Building City, ST 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <span>info@BinIqbalGroup.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>
              &copy; {new Date().getFullYear()} Bin Iqbal Group. All rights reserved.
            </p>
            {/* <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
