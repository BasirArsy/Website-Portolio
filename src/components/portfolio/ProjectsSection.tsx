import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Monitor,
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
      title: "Data Validation System",
      description:
        "This application enables teams from each module to view data that has been loaded into the datamart and identify data that requires correction. Through this system, original source data is separated from user-corrected data, ensuring data integrity and simplifying the audit process.",
      image: "/assets/sisi/csa1.png",
      images: ["/assets/sisi/csa1.png", "/assets/sisi/csa2.png", "/assets/sisi/csa3.png", "/assets/sisi/csa4.png"],
      technologies: ["Laravel", "React", "PostgreSQL"],
      company: "PT Sinergi Informatika Semen Indonesia",
      category: "Internship Project",
    },
    {
      title: "First Aid Kit Consumption Module",
      description:
        "Developed the First Aid Kit Consumption module, enabling each branch of PT Cipta Krida Bahari to efficiently record and track the usage of first aid kits.",
      image: "/assets/consumptionP3K/consumptionP3K1.png",
      images: [
        "/assets/consumptionP3K/consumptionP3K1.png",
        "/assets/consumptionP3K/consumptionP3K2.png",
      ],
      technologies: ["Laravel", "Vue.js", "PHP", "MySQL", "Postman"],
      company: "PT Cipta Krida Bahari (CKB Group)",
      category: "Internship Project",
    },
    {
      title: "First Aid Kit Inspection Module",
      description:
        "Developed the First Aid Kit Inspection module, facilitating monthly inspections to monitor how many first aid kits have been used and the remaining stock in each branch.",
      image: "/assets/inspectionP3K/inspectionP3K_1.png",
      images: [
        "/assets/inspectionP3K/inspectionP3K_1.png",
        "/assets/inspectionP3K/inspectionP3K_2.png",
        "/assets/inspectionP3K/inspectionP3K_3.png",
      ],
      technologies: ["Laravel", "Vue.js", "PHP", "MySQL", "Postman"],
      company: "PT Cipta Krida Bahari (CKB Group)",
      category: "Internship Project",
    },
    {
      title: "Genset Inspection Module",
      description:
        "Developed the Genset Inspection module, enabling systematic inspections to ensure operational readiness and proper maintenance tracking of generators across branches.",
      image: "/assets/inspectionGenset/inspectionGenset_1.png",
      images: [
        "/assets/inspectionGenset/inspectionGenset_1.png",
        "/assets/inspectionGenset/inspectionGenset_2.png",
        "/assets/inspectionGenset/inspectionGenset_3.png",
        "/assets/inspectionGenset/inspectionGenset_4.png",
      ],
      technologies: ["Laravel", "Vue.js", "PHP", "MySQL", "Postman"],
      company: "PT Cipta Krida Bahari (CKB Group)",
      category: "Internship Project",
    },
    {
      title: "Hydrant Pipe Inspection Module",
      description:
        "Developed the Hydrant Pipe Inspection module, supporting regular inspections to ensure fire safety compliance and accurate monitoring of hydrant conditions across branches.",
      image: "/assets/inspectionHydrant/inspectionHydrant_1.png",
      images: [
        "/assets/inspectionHydrant/inspectionHydrant_1.png",
        "/assets/inspectionHydrant/inspectionHydrant_2.png",
      ],
      technologies: ["Laravel", "Vue.js", "PHP", "MySQL", "Postman"],
      company: "PT Cipta Krida Bahari (CKB Group)",
      category: "Internship Project",
    },
    {
      title: "Inventory Management System",
      description:
        "Participated in the development of the Inventory Management System workshop module. Designed, developed, and implemented 16 REST APIs to support system integration within two months.",
      image: "/assets/magangTelkomsat/sertifikatTelkomsat.jpg",
      images: [
        "/assets/magangTelkomsat/sertifikatTelkomsat.jpg",
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
      category: "Internship Project",
    },
  ];

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
    <section id="projects" className="section-padding bg-slate-50/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
            My Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Projects
          </h2>
          <div className="w-12 h-[2px] bg-primary mx-auto mt-4" />
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white border border-border/50 rounded-xl overflow-hidden hover:shadow-lg hover:border-border transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => openModal(project)}
                    className="rounded-full"
                  >
                    <Monitor className="w-4 h-4 mr-2" />
                    View Screenshots
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-medium uppercase tracking-wider text-primary">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-foreground mb-1.5 leading-tight">
                  {project.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-3">
                  {project.company}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-slate-50 text-slate-500 border border-slate-200/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full rounded-lg text-xs hover:bg-primary hover:text-white hover:border-primary transition-all"
                  onClick={() => openModal(project)}
                >
                  <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-border/50">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {selectedProject.company}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeModal}
                  className="rounded-full hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Image Gallery */}
              <div className="relative bg-slate-50">
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={`${selectedProject.title} - Screenshot ${currentImageIndex + 1}`}
                  className="w-full h-80 md:h-96 object-contain"
                />
                {selectedProject.images.length > 1 && (
                  <>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full shadow-md"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full shadow-md"
                      onClick={nextImage}
                    >
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                  </>
                )}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-muted-foreground">
                  {currentImageIndex + 1} / {selectedProject.images.length}
                </div>
              </div>

              {/* Thumbnails */}
              {selectedProject.images.length > 1 && (
                <div className="p-4 border-t border-border/50">
                  <div className="flex gap-2 overflow-x-auto pb-1">
                    {selectedProject.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className={`w-14 h-14 object-cover rounded-lg cursor-pointer flex-shrink-0 transition-all ${
                          index === currentImageIndex
                            ? "ring-2 ring-primary ring-offset-1"
                            : "opacity-50 hover:opacity-80"
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Details */}
              <div className="p-6 border-t border-border/50">
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-0.5 text-[11px] font-medium rounded-full bg-slate-50 text-slate-500 border border-slate-200/80"
                    >
                      {tech}
                    </span>
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