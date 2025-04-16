
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Users, Video, BookOpen, Mic, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const activities = [
  {
    id: 1,
    title: "Data Science Mentoring Program",
    description: "Mentoring junior data scientists and career changers, providing guidance on technical skills and career development in the field of AI and machine learning.",
    icon: <Users className="h-6 w-6 text-green-700" />,
    type: "Mentoring"
  },
  {
    id: 2,
    title: "Conference Speaker: 'The Future of Generative AI'",
    description: "Delivered keynote presentations at major tech conferences on emerging trends in generative AI models and their applications in business.",
    icon: <Mic className="h-6 w-6 text-green-700" />,
    type: "Speaking"
  },
  {
    id: 3,
    title: "Data Science Webinar Series Host",
    description: "Hosted a monthly webinar series covering advanced topics in data science and machine learning, averaging 5,000+ live participants per session.",
    icon: <Video className="h-6 w-6 text-green-700" />,
    type: "Content Creation"
  },
  {
    id: 4,
    title: "AI Ethics Working Group",
    description: "Active member of an industry working group focused on establishing ethical guidelines for responsible AI development and deployment.",
    icon: <Globe className="h-6 w-6 text-green-700" />,
    type: "Community"
  },
  {
    id: 5,
    title: "Technical Blog Writer",
    description: "Regular contributor to leading tech publications, sharing insights on data science methodologies, tutorials, and industry trends.",
    icon: <BookOpen className="h-6 w-6 text-green-700" />,
    type: "Content Creation"
  },
  {
    id: 6,
    title: "AI Hackathon Judge",
    description: "Served as a judge for several national and international AI hackathons, evaluating innovative solutions and providing feedback to participants.",
    icon: <Calendar className="h-6 w-6 text-green-700" />,
    type: "Community"
  },
];

const OtherActivities = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 py-12">
        <h1 className="text-3xl font-bold mb-8">Other Activities</h1>
        <p className="text-xl text-gray-700 mb-8">
          Beyond my core professional work, I'm actively involved in mentoring, speaking, content creation, and community building in the data science ecosystem.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity) => (
            <div key={activity.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-green-50 p-2 rounded-full">
                  {activity.icon}
                </div>
                <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                  {activity.type}
                </Badge>
              </div>
              <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
              <p className="text-gray-700">{activity.description}</p>
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

export default OtherActivities;
