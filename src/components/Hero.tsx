import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import WeatherAnimation from "@/components/WeatherAnimation/WeatherAnimation";

const Hero = () => {
  return (
    <div className="bg-gray-50 py-16 relative overflow-hidden">
      <WeatherAnimation />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center md:text-left">
          
          {/* Left Section: Text */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 ">
              Didit Eko Setyo Ariandi
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
              Data Scientist
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Experienced Data Scientist skilled in Python, SQL, and deep learning techniques,
              with a strong ability to analyze complex datasets and extract meaningful insights.
              Proficient in data manipulation, visualization, and predictive modeling, enabling
              informed decision-making. Adept at collaborating with cross-functional teams to
              translate business requirements into data-driven strategies.
            </p>
          </div>

          {/* Right Section: Profile + Skill Icons */}
          <div className="relative flex justify-center mt-8 md:mt-0">
            <div className="rounded-full border-4 border-white shadow-lg relative z-10">
              <img
                src="/profille.jpeg"
                alt="Didit eko"
                className="rounded-full w-48 h-48 sm:w-64 sm:h-64 object-cover"
              />
            </div>

            {/* Skill Icons: only show on medium and up */}
            <div className="absolute top-0 left-0 right-0 bottom-0 hidden md:flex items-center justify-center">
              <div className="grid grid-cols-3 gap-16">
                {[
                  { icon: "📊", label: "Statistics", style: { top: "-20%", left: "45%" } },
                  { icon: "🤖", label: "Deep Learning", style: { top: "20%", right: "10%" } },
                  { icon: "🪩", label: "Python", style: { top: "30%", left: "15%" } },
                  { icon: "📈", label: "Data Analytics", style: { bottom: "18%", right: "10%" } },
                  { icon: "🤖", label: "Machine Learning", style: { bottom: "20%", left: "5%" } },
                  { icon: "📓", label: "SQL", style: { bottom: "-20%", right: "45%" } },
                ].map((skill, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-3 rounded-lg shadow-md flex items-center justify-center absolute"
                    style={skill.style as any}
                  >
                    <span className="text-green-700 text-xl">{skill.icon}</span>
                    <span className="ml-2 text-sm font-medium">{skill.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
