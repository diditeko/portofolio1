
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExploreWorks from "@/components/ExploreWorks";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <ExploreWorks />
      <Footer />
    </div>
  );
};

export default Index;
