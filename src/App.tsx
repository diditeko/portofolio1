
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Resume from "./pages/Resume";
import WorkPortfolio from "./pages/WorkPortfolio";
import SideProjects from "./pages/SideProjects";
import Achievements from "./pages/Achievements";
import OtherActivities from "./pages/OtherActivities";
import Socials from "./pages/Socials";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/work-portfolio" element={<WorkPortfolio />} />
          <Route path="/side-projects" element={<SideProjects />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/Theme" element={<OtherActivities />} />
          <Route path="/socials" element={<Socials />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
