
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-gray-900">
              Didit Eko Setyo Ariandi
            </h1>
            <h2 className="text-3xl font-semibold text-gray-800">
              Data Scientist
            </h2>
            <p className="text-lg text-gray-600">
            Experienced Data Scientist Skilled in Python, SQL, and deep learning techniques, with a strong ability to analyze complex datasets 
            and extract meaningful insights. Proficient in data manipulation, visualization, and predictive modeling, enabling informed decision-making. 
            Adept at collaborating with cross-functional teams to translate business requirements into data-driven strategies.
            </p>
            <div className="flex gap-4">
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="rounded-full border-4 border-white shadow-lg relative z-10">
              <img
                src="profille.jpeg"
                alt="Didit eko"
                className="rounded-full w-64 h-64 object-cover"
              />
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-16">
                {/* Skill Icons */}
                <div className="bg-white p-3 rounded-lg shadow-md flex items-center justify-center absolute" style={{ top: "-20%", left: "45%" }}>
                  <span className="text-green-700 text-xl">📊</span>
                  <span className="ml-2 text-sm font-medium">Statistics</span>
                </div>

                <div className="bg-white p-3 rounded-lg shadow-md flex items-center justify-center absolute" style={{ top: "20%", right: "10%" }}>
                  <span className="text-green-700 text-xl">🤖</span>
                  <span className="ml-2 text-sm font-medium">Deep Learning</span>
                </div>

                <div className="bg-white p-3 rounded-lg shadow-md flex items-center justify-center absolute" style={{ top: "30%", left: "15%" }}>
                  <span className="text-green-700 text-xl"> 🪩 </span>
                  <span className="ml-2 text-sm font-medium">Python</span>
                </div>

                <div className="bg-white p-3 rounded-lg shadow-md flex items-center justify-center absolute" style={{ bottom: "18%", right: "10%" }}>
                  <span className="text-green-700 text-xl">📈</span>
                  <span className="ml-2 text-sm font-medium">Data Analytics</span>
                </div>

                <div className="bg-white p-3 rounded-lg shadow-md flex items-center justify-center absolute" style={{ bottom: "20%", left: "5%" }}>
                  <span className="text-green-700 text-xl">🤖</span>
                  <span className="ml-2 text-sm font-medium">Machine Learning</span>
                </div>

                <div className="bg-white p-3 rounded-lg shadow-md flex items-center justify-center absolute" style={{ bottom: "-20%", right: "45%" }}>
                  <span className="text-green-700 text-xl">📓</span>
                  <span className="ml-2 text-sm font-medium">SQL</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;