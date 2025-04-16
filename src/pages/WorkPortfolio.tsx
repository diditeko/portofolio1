// app/workportfolio.tsx or pages/workportfolio.tsx

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import ProjectModal from "@/pages/projecdetails";

const projects = [
  {
    id: 1,
    title: "Mavigen",
    description: "This Project cannot be describe because it is in accordance with the agreement with company",
    Company : "PT Bigjava",
    image: "/img/mavi11.png",
    images: ["/img/mavi11.png", "/img/mavi12.png", "/img/mavi13.png"],
    tags: ["Deep Learning", "NLP","Python", "Sentiment analysist","FastApi"],
    year: "2023"
  },
  {
    id: 2,
    title: "Social Media Analytics",
    description: "Built model Sentiment Analysis, Emotion detection, Topic Modelling using Deep Learning techniques with accuracy 90% for social media and online news.",
    Company : "PT Bigjava",
    image: "/img/dash.png",
    images: ["/img/dash.png","/img/when.png","/img/last.png"],
    tags: ["Deep Learning", "TensorFlow", "Python", "Topic Modelling", "LDA","Social Network Analytics","NER","FastApi"],
    year: "2023-2024",
    tasks: [
      "Build and deploy Machine Learning models for Sentiment Analysis with 95% accuracy",
      "Develop and build unsupervised Natural Language Processing Topic modeling to extract topics from a large dataset",
      "Develop an algorithm using Natural Language Processing models for Emotion Detection with 90% accuracy.",
      "made worlcloud,hashtagcloud and emojcloud",
      "Build Api for Machine Learning models so the Back-end team in the project can connect to and serve it to the front end",
      "Develop algorithms for Data Cleaning and preprocessing on large datasets."
    ]
  },
  {
    id: 3,
    title: "Counter Opini Controller",
    description: "This Project cannot be describe because it is in accordance with the agreement with company",
    Company : "PT Bigjava",
    image: "/img/confi.png",
    images: ["/img/confi.png"],
    tags: ["Deep Learning", "Python", "Sentiment analysist","FastApi"],
    year: "2024"
  },
  {
    id: 4,
    title: "Crop Yield Prediction",
    description: "Made regression model for Crop Yield Prediction using Machine Learning techniques Random Forest, Decision Tree, Naive Bayes, KNN, SVR and Ensemble Learning with accuracy 87%",
    image: "/img/farm.png",
    images: ["/img/farm.png"],
    tags: ["Machine Learning","Explotary Data Analysis","Python"],
    year: "2024",
    tasks: [
      "Build Machine Learning models for Regression with Random forest 84% accuracy",
      "Data manipulation and cleaning data for imbalance dataset",
      "Build Machine Learning models for Regression with Decision Tree 83% accuracy.",
      "Build Machine Learning models for Regression with Naive baiyes 73% accuracy.",
      "Build Machine Learning models for Regression with KNN and SVC 86% accuracy.",
      "Build Machine Learning Ensemble Learning to combine some models and get final 87% accuracy.."
    ]
  },
];

const WorkPortfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 py-12">
        <h1 className="text-3xl font-bold mb-8">Work Portfolio</h1>
        <p className="text-xl text-gray-700 mb-8">
          A collection of professional projects showcasing my expertise in data science, machine learning, and AI application development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-xl font-bold">{project.title}</h2>
                  <Badge variant="secondary">{project.year}</Badge>
                </div>
                <p className="text-gray-700 mb-4">
                  {project.description}
                </p>
                <p className="text-green-700 mb-4">
                  {project.Company}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="bg-green-50 text-green-800 border-green-200">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="text-green-700 border-green-700 hover:bg-green-50"
                  onClick={() => {
                    setSelectedProject(project);
                    setModalOpen(true);
                  }}
                >
                  View Details <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>

      <ProjectModal 
        open={modalOpen}
        onOpenChange={setModalOpen}
        project={selectedProject}
      />
    </div>
  );
};

export default WorkPortfolio;
