import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

const Resume = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Resume</h1>

          {/* Button wrapped in anchor tag for download */}
          <a href="public/didit eko new.pdf" download>
            <Button className="bg-green-700 hover:bg-green-800">
              <Download className="mr-2 h-4 w-4" /> Download PDF
            </Button>
          </a>
        </div>

        <div className="bg-white shadow-md rounded-lg p-8">
          {/* Profile Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Profile</h2>
            <p className="text-gray-700">
              Experienced Data Scientist Skilled in Python, SQL, and deep learning techniques, with a strong ability to analyze complex datasets and extract meaningful insights. Proficient in data manipulation, visualization, and predictive modeling, enabling informed decision-making. Adept at collaborating with cross-functional teams to translate business requirements into data-driven strategies.
            </p>
          </div>

          {/* Experience Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Professional Experience</h2>

            <div className="mb-6">
              <div className="flex justify-between mb-1">
                <h3 className="text-xl font-semibold">Data Scientist</h3>
                <span className="text-gray-600">Feb 2023 - Present</span>
              </div>
              <div className="text-gray-700 font-medium mb-2">PT.Bigjava</div>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Build and deploy Machine Learning models for Sentiment Analysis with 95% accuracy.</li>
                <li>Develop an algorithm using Natural Language Processing models for Emotion Detection with 90% accuracy.</li>
                <li>Develop and build unsupervised Natural Language Processing Topic modeling to extract topics from a large dataset.</li>
                <li>Develop algorithm using Named Entity Recognition to extract Names, Location and Organizations.</li>
                <li>Build Api for Machine Learning models so the Back-end team in the project can connect to and serve it to the front end.</li>
                <li>Develop algorithms for Data Cleaning and preprocessing on large datasets.</li>
                <li>Develop algorithm using ChatGPT api to generate automatic texts based on given topics.</li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex justify-between mb-1">
                <h3 className="text-xl font-semibold">Engineering - Internship</h3>
                <span className="text-gray-600">July 2019 - Oct 2019</span>
              </div>
              <div className="text-gray-700 font-medium mb-2">PT Dirgantara Indonesia</div>
              <p className="text-gray-700">
                Worked as an intern and received work of a safety assessment for installed Machine Gun for Helicopter Bell412:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Conduct helicopter safety inspections with an understanding of the minimum safety level and safety assessment process in the military.</li>
                <li>Identify potential hazards during conceptual design and understand risk assessment methods to determine mitigation measures.</li>
                <li>Provide a solution to the risk of danger that will occur to the helicopter such as: use bolt with wire locking minimum 4 pieces and installing the appliance detector/overheating and emergency button release.</li>
                <li>Determine the risk assessment method to determine the size of the mitigation.</li>
                <li>Create a final conceptual design after determining hazard analysis and determining mitigation measures.</li>
              </ul>
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Education</h2>

            <div className="mb-6">
              <div className="flex justify-between mb-1">
                <h3 className="text-xl font-semibold">Data Science</h3>
                <span className="text-gray-600">2022</span>
              </div>
              <div className="text-gray-700">Hactiv8 Data science</div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between mb-1">
                <h3 className="text-xl font-semibold">Aerospace Enginnering</h3>
                <span className="text-gray-600">2016 - 2021</span>
              </div>
              <div className="text-gray-700">Institut Teknologi Dirgantara Adisutjipto</div>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h2 className="text-2xl font-bold text-green-700 mb-4">Skills</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {["Python", "SQL", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "Big Data"].map((skill) => (
                    <span key={skill} className="bg-gray-100 px-3 py-1 rounded-full text-gray-700 text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Areas of Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Time Series Analysis", "Statistical Modeling", "Data Visualization"].map((skill) => (
                    <span key={skill} className="bg-gray-100 px-3 py-1 rounded-full text-gray-700 text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Resume;
