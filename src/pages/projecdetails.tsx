// components/ProjectModal.tsx

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog";
  import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  
  type Project = {
    id: number;
    title: string;
    description: string;
    Company?: string;
    image: string;
    tags: string[];
    year: string;
    images?: string[];
    tasks?: string[]; // ✅ already declared
  };
  
  type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    project: Project | null;
  };
  
  const ProjectModal = ({ open, onOpenChange, project }: Props) => {
    if (!project) return null;
  
    const hasMultipleImages = project.images && project.images.length > 1;
  
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{project.title}</DialogTitle>
          </DialogHeader>
  
          <p className="text-sm text-gray-600 mb-2">{project.year}</p>
          <p className="mb-4">{project.description}</p>
  
          {project.Company && (
            <p className="text-green-700 mb-4 font-medium">{project.Company}</p>
          )}
  
          {/* ✅ Tasks section */}
          {project.tasks && project.tasks.length > 0 && (
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">What I Did</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {project.tasks.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            </div>
          )}
  
          <div className="mb-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
  
          {/* Image or Carousel */}
          <div className="mt-4">
            {hasMultipleImages ? (
              <Carousel className="w-full max-w-[600px] mx-auto">
                <CarouselContent>
                  {project.images!.map((img, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <img
                          src={img}
                          alt={`Slide ${index}`}
                          className="rounded-lg object-cover w-full max-h-[300px]"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg w-full max-h-[300px] object-cover mx-auto"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    );
  };
  
  export default ProjectModal;
  