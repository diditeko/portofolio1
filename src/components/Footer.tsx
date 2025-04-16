
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left side - GIF replacing name and description */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-2">
              <img
                src="/tes.gif" // Put your gif in /public
                alt="Goku"
                className="h-20 w-auto"
              />
            </div>
            {/* You can keep or remove the description */}
            {/* <p className="text-gray-600 mt-2">
              Data Scientist with expertise in AI/ML, analytics, and database.
            </p> */}
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/diditeko"
                className="text-gray-600 hover:text-green-700 transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/diditekosetyoariandi"
                className="text-gray-600 hover:text-green-700 transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/21_boost"
                className="text-gray-600 hover:text-green-700 transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="text-gray-600 hover:text-green-700 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Didit eko setyo. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
