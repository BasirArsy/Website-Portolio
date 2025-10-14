import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  Monitor,
  Smartphone,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      title: "First Aid Kit Consumption Module",
      description:
        "Developed the First Aid Kit Consumption module, enabling each branch of PT Cipta Krida Bahari to efficiently record and track the usage of first aid kits.",
      image: "public/assets/consumptionP3K/ConsumptionP3K_1.png", // gambar utama untuk preview
      images: [
        "public/assets/consumptionP3K/ConsumptionP3K_1.png",
        "public/assets/consumptionP3K/ConsumptionP3K_2.png",
      ],
      technologies: ["Laravel", "Vue.js", "PHP","MySQL", "Postman"],
      company: "PT Cipta Krida Bahari (CKB Group)",
      period: "Juni 2025",
      featured: true,
      category: "Internship Project",
    },
    {
      title: "First Aid Kit Inspection Module",
      description:
        "Developed the First Aid Kit Inspection module, facilitating monthly inspections to monitor how many first aid kits have been used and the remaining stock in each branch",
      image: "public/assets/inspectionP3K/inspectionP3K_1.png",
      images: [
        "public/assets/inspectionP3K/inspectionP3K_1.png",
        "public/assets/inspectionP3K/inspectionP3K_2.png",
        "public/assets/inspectionP3K/inspectionP3K_3.png",
      ],
      technologies: ["Laravel", "Vue.js", "PHP", "MySQL", "Postman"],
      company: "PT Cipta Krida Bahari (CKB Group)",
      featured: true,
      category: "Internship Project",
    },
    {
      title: "Genset Inspection Module",
      description:
        "Developed the Genset Inspection module, enabling systematic inspections to ensure operational readiness and proper maintenance tracking of generators across branches.",
      image: "public/assets/inspectionGenset/inspectionGenset_1.png",
      images: [
        "public/assets/inspectionGenset/inspectionGenset_1.png",
        "public/assets/inspectionGenset/inspectionGenset_2.png",
      ],
      technologies: ["Laravel", "Vue.js", "PHP", "MySQL", "Postman"],
      company: "PT Cipta Krida Bahari (CKB Group)",
      featured: true,
      category: "Internship Project",
    },
    {
      title: "Hydrant Pipe Inspection Module",
      description:
        "Developed the Hydrant Pipe Inspection module, supporting regular inspections to ensure fire safety compliance and accurate monitoring of hydrant conditions across branches",
      image: "public/assets/inspectionHydrant/inspectionHydrant_1.png",
      images: [
        "public/assets/inspectionHydrant/inspectionHydrant_1.png",
        "public/assets/inspectionHydrant/inspectionHydrant_2.png",
      ],
      technologies: ["Laravel", "Vue.js", "PHP", "MySQL", "Postman"],
      company: "PT Cipta Krida Bahari (CKB Group)",
      featured: true,
      category: "Internship Project",
    },
    {
      title: "Inventory Management System",
      description:
        "Participated in the development of the Inventory Management System website's workshop module, used to record and manage production equipment testing results. Successfully designed, developed, and implemented 16 REST APIs to support system integration within two months. Collaborated with team members to ensure API functionality aligned with user requirements and project goals, and ensured performance and reliability standards through thorough testing and debugging.",
      image: "/assets/magangTelkomsat/magangTel3.png",
      images: [
        "/assets/magangTelkomsat/magangTel3.png",
        "/assets/magangTelkomsat/magangTel4.png",
        "/assets/magangTelkomsat/magangTel5.png",
        "/assets/magangTelkomsat/magangTel6.png",
        "/assets/magangTelkomsat/magangTel7.png",
        "/assets/magangTelkomsat/magangTel8.png",
        "/assets/magangTelkomsat/magangTel9.png",
        "/assets/magangTelkomsat/magangTel10.png",
        "/assets/magangTelkomsat/magangTel11.png",
        "/assets/magangTelkomsat/magangTel12.png",
        "/assets/magangTelkomsat/magangTel13.png",
        "/assets/magangTelkomsat/magangTel14.png",
        "/assets/magangTelkomsat/magangTel15.png",
        "/assets/magangTelkomsat/magangTel16.png",
        "/assets/magangTelkomsat/magangTel17.png",
        "/assets/magangTelkomsat/magangTel18.png",
        "/assets/magangTelkomsat/magangTel19.png",
        "/assets/magangTelkomsat/magangTel20.png",
        "/assets/magangTelkomsat/magangTel21.png",
        "/assets/magangTelkomsat/magangTel22.png",
      ],
      technologies: ["Laravel", "PHP", "MySQL", "Postman"],
      company: "PT Telkom Satelit Indonesia (Telkomsat)",
      featured: true,
      category: "Internship Project",
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            My Work
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary">Projects</span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => openModal(project)}
                  >
                    <Monitor className="w-4 h-4 mr-2" />
                    View Screenshots
                  </Button>
                </div>
              </div>

              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                  <Badge className="bg-primary/10 text-primary">Featured</Badge>
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {project.company} 
                </p>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1"
                    onClick={() => openModal(project)}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal untuk menampilkan screenshot */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
              {/* Header Modal */}
              <div className="flex justify-between items-center p-6 border-b border-border">
                <div>
                  <h3 className="text-2xl font-bold">
                    {selectedProject.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {selectedProject.company}
                  </p>
                </div>
                <Button variant="ghost" size="icon" onClick={closeModal}>
                  <X className="w-6 h-6" />
                </Button>
              </div>

              {/* Image Gallery */}
              <div className="relative">
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={`${selectedProject.title} - Screenshot ${
                    currentImageIndex + 1
                  }`}
                  className="w-full h-96 object-contain bg-gray-100"
                />

                {/* Navigation Arrows */}
                {selectedProject.images.length > 1 && (
                  <>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute left-4 top-1/2 transform -translate-y-1/2"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </Button>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2"
                      onClick={nextImage}
                    >
                      <ChevronRight className="w-6 h-6" />
                    </Button>
                  </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-background/80 px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {selectedProject.images.length}
                </div>
              </div>

              {/* Thumbnail Navigation */}
              {selectedProject.images.length > 1 && (
                <div className="p-6 border-t border-border">
                  <div className="flex space-x-2 overflow-x-auto">
                    {selectedProject.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className={`w-16 h-16 object-cover rounded cursor-pointer flex-shrink-0 ${
                          index === currentImageIndex
                            ? "ring-2 ring-primary"
                            : "opacity-70"
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Project Details */}
              <div className="p-6 border-t border-border">
                <p className="text-muted-foreground mb-4">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
