import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const projects = [
  {
    id: 1,
    title: "Aircraft Satisfaction Prediction",
    description: "Make model with Machine Learning to see Airplane Satisfaction from passenger",
    image: "img/aircraftt.png",
    tags: ["Machine Learning", "Streamlit", "Python"],
    github: "https://github.com/diditeko/Airline-Satisfaction-Predict",
    demo: "https://aircraft-app.herokuapp.com/"
  },
  {
    id: 2,
    title: "Data Viz Dashboard",
    description: "Made Dashboard Customer Segmentation Sinarmas using Tableau",
    image: "img/credit.png",
    tags: ["Data Visualization", "SQL", "Tableau"],
    github: "https://github.com/diditeko/Customer-Segmentation-Sinarmas",
    demo: "https://public.tableau.com/app/profile/didit.eko.setyo.ariandi1076/viz/Sinarmas/Dashboard1"
  },
  {
    id: 3,
    title: "Ez Meeting",
    description: "A recommendation system that help people to find a meeting room based on their location, the facilities, and price.",
    image: "img/meet.jpg",
    tags: ["Machine Learning", "Word2Vex", "Python"],
    github: "https://github.com/diditeko/Ez-Meeting",
    demo: null
  },
  {
    id: 4,
    title: "Face mask detection",
    description: "Made prediction face mask detection for detected person who used mask or without Mask. Using CNN Deep learning from Tensorflow.",
    image: "img/face.png",
    tags: ["CNN", "Tensorflow", "Deep Learning"],
    github: "https://github.com/diditeko/Face-Mask-Detection",
    demo: null
  },
  {
    id: 5,
    title: "Sentiment Analysis Bert Model",
    description: "Load data from Superbase and processing using Spark and Made predicted sentiment analysis using Bert Model with accuracy 89%.",
    image: "img/bert.png",
    tags: ["Superbase", "Spark","Tensorflow", "Deep Learning","Huggingface"],
    github: "https://github.com/diditeko/Sentiment-Bert",
    demo: "https://huggingface.co/spaces/VIOLET21/Sentiment_Tweet"
  },
];

const SideProjects = () => {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 2) % projects.length);
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 2) % projects.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 2 + projects.length) % projects.length);
  };

  const visibleProjects = [projects[startIndex], projects[(startIndex + 1) % projects.length]];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 py-12">
        <h1 className="text-3xl font-bold mb-8">Side Projects</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
          Personal initiatives, open-source contributions, and experimental projects I've built in my free time.
        </p>

        <div className="flex justify-between items-center mb-4">
          <Button variant="outline" onClick={handlePrev}>
            <ArrowLeft className="h-4 w-4 mr-2" /> Prev
          </Button>
          <Button variant="outline" onClick={handleNext}>
            Next <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleProjects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-100 dark:border-gray-700">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="bg-green-50 text-green-800 border-green-200">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button
                    size="sm"
                    className="bg-green-700 hover:bg-green-800"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4" /> View Code
                  </Button>
                  {project.demo && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-green-700 border-green-700 hover:bg-green-50"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default SideProjects;
