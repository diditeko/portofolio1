import { FileText, Briefcase, Rocket, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Resume / CV",
    icon: <FileText className="h-10 w-10 text-green-700" />,
    description: "My professional experience",
    link: "/resume"
  },
  {
    title: "Work Portfolio",
    icon: <Briefcase className="h-10 w-10 text-green-700" />,
    description: "Professional projects and contributions",
    link: "/work-portfolio"
  },
  {
    title: "Side Projects",
    icon: <Rocket className="h-10 w-10 text-green-700" />,
    description: "Personal initiatives and experiments",
    link: "/side-projects"
  },
  {
    title: "Socials",
    icon: <ArrowRight className="h-10 w-10 text-green-700" />,
    description: "Connect with me on social media",
    link: "/socials"
  },
];

const ExploreWorks = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Explore My Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <Link to={category.link} key={category.title} className="group">
              <div 
                className="bg-green-50 rounded-lg p-8 h-full flex flex-col items-center text-center transition-all duration-300 hover:shadow-md animate-[slide-in-right_0.5s_ease-out_forwards]"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  opacity: 0,
                  transform: 'translateX(100%)'
                }}
              >
                <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-lg bg-white shadow-sm group-hover:bg-green-100 transition-colors duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreWorks;