
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Award, Medal, FileCheck, Trophy } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "Best Paper Award - International Conference on ML Applications",
    description: "Recognized for research on novel deep learning approaches for time series forecasting in healthcare applications.",
    icon: <Trophy className="h-8 w-8 text-yellow-500" />,
    year: "2023"
  },
  {
    id: 2,
    title: "Kaggle Competition - Top 1% Finisher",
    description: "Ranked in the top 1% of participants (14th out of 2,800+) in the Kaggle competition for predictive modeling of biological responses.",
    icon: <Award className="h-8 w-8 text-yellow-500" />,
    year: "2022"
  },
  {
    id: 3,
    title: "Google Cloud - Professional Data Engineer Certification",
    description: "Certified expert in designing and building data processing systems on Google Cloud Platform.",
    icon: <FileCheck className="h-8 w-8 text-yellow-500" />,
    year: "2022"
  },
  {
    id: 4,
    title: "Global AI Hackathon - 1st Place",
    description: "Led a team to victory in developing an AI solution for early disease detection using multi-modal data.",
    icon: <Medal className="h-8 w-8 text-yellow-500" />,
    year: "2021"
  },
  {
    id: 5,
    title: "TensorFlow Developer Certification",
    description: "Demonstrated proficiency in building scalable machine learning models using TensorFlow.",
    icon: <FileCheck className="h-8 w-8 text-yellow-500" />,
    year: "2021"
  },
  {
    id: 6,
    title: "Data Science Leadership Award",
    description: "Recognized by the company for exceptional leadership in implementing data-driven decision making across the organization.",
    icon: <Trophy className="h-8 w-8 text-yellow-500" />,
    year: "2020"
  },
];

const Achievements = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 py-12">
        <h1 className="text-3xl font-bold mb-8">Achievements</h1>
        <p className="text-xl text-gray-700 mb-8">
          Awards, recognitions, certifications, and notable accomplishments throughout my career.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex">
              <div className="mr-4 flex-shrink-0">
                <div className="bg-yellow-50 p-3 rounded-lg">
                  {achievement.icon}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-bold">{achievement.title}</h3>
                  <Badge variant="secondary" className="bg-green-50 text-green-800">
                    {achievement.year}
                  </Badge>
                </div>
                <p className="text-gray-700">{achievement.description}</p>
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

export default Achievements;
