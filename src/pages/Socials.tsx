
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Youtube, X, Mail, Instagram } from "lucide-react";

const socialLinks = [
  {
    id: 1,
    name: "LinkedIn",
    description: "Connect with me professionally and stay updated on my career developments.",
    icon: <Linkedin className="h-10 w-10 text-blue-600" />,
    url: "https://www.linkedin.com/in/diditekosetyoariandi",
    buttonText: "Connect on LinkedIn",
    buttonColor: "bg-blue-600 hover:bg-blue-700"
  },
  {
    id: 2,
    name: "GitHub",
    description: "Explore my open-source projects, contributions, and code repositories.",
    icon: <Github className="h-10 w-10 text-gray-800" />,
    url: "https://github.com/diditeko",
    buttonText: "See My Code",
    buttonColor: "bg-gray-800 hover:bg-gray-900"
  },
  {
    id: 3,
    name: "Twitter",
    description: "Follow me for thoughts on data science, AI and Web3",
    icon: <X className="h-10 w-10 text-black-400" />,
    url: "https://twitter.com/21_boost",
    buttonText: "Follow Me",
    buttonColor: "bg-blue-400 hover:bg-blue-500"
  },
  {
    id: 4,
    name: "Instagram",
    description: "Follow my instagram account.",
    icon: <Instagram className="h-10 w-10 text-[#E1306C]" />,
    url: "https://instagram.com/mzno.21",
    buttonText: "Follow Me",
    buttonColor: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:opacity-90"
  },
  {
    id: 5,
    name: "Medium",
    description: "Read my articles on data science, machine learning, and AI applications.",
    icon: (
      <img
        src="https://cdn.iconscout.com/icon/free/png-256/medium-47-433328.png"
        alt="Medium"
        className="h-10 w-10"
      />
    ),
    url: "https://medium.com/@diditekosetyo", // change to your actual username if different
    buttonText: "Read Articles",
    buttonColor: "bg-gray-800 hover:bg-gray-900"
  },
  {
    id: 6,
    name: "Email",
    description: "Contact me directly for speaking engagements, collaborations, or inquiries.",
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
        alt="Gmail"
        className="h-10 w-10"
      />
    ),
    url: "mailto:didit4111@gmail.com",
    buttonText: "Send Email",
    buttonColor: "bg-purple-600 hover:bg-purple-700"
  }
];

const Socials = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 py-12">
        <h1 className="text-3xl font-bold mb-8">Connect With Me</h1>
        <p className="text-xl text-gray-700 mb-8">
          Find me across the web on various platforms. Feel free to reach out, connect, or follow my work.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialLinks.map((social) => (
            <Card key={social.id} className="p-6 flex flex-col justify-between border border-gray-200 hover:shadow-md transition-shadow duration-200">
              <div>
                <div className="mb-4">
                  {social.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{social.name}</h3>
                <p className="text-gray-600 mb-6">{social.description}</p>
              </div>
              <Button className={`w-full ${social.buttonColor}`} asChild>
                <a href={social.url} target="_blank" rel="noreferrer">
                  {social.buttonText}
                </a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Socials;
