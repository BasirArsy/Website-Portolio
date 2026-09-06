import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  technologies: string[];
  company: string;
  bgColor: string;
  image: string;
  images: string[];
  role?: string;
  period?: string;
  documentation?: string;
}

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<null | Project>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [projectSlideIndex, setProjectSlideIndex] = useState(0);

  const projects: Project[] = [
    {
      title: "Enterprise Frontend Migration",
      description:
        "Migrated a enterprise frontend for client PT Kansai Paint Indonesia 4 main modules, 20 business modules, and 49 workflow submodules, including Request Management (Purchase Request, Reimbursement, Cash Advance, Settlement), Tracking Document (Purchase Request, AR Invoice, Purchase Order, Reimbursement, Outgoing Payments, PR-to-PO), and Approval Report (Purchase Order, AR Invoice, Outgoing Payment Reimbursement, Outgoing Payment Cash Advance, Outgoing Payment AP Invoice), from a HTML, CSS, Vanila Javascript multi-page architecture to a React js Single Page Application (SPA), successfully completing development, testing, and deployment within 5 weeks.",
      tags: ["React.js", "SPA", "JavaScript"],
      technologies: [
        "React.js",
        "Single Page Application (SPA)",
        "JavaScript",
        "HTML5",
        "CSS3",
      ],
      company: "PT. IDS Teknologi Indonesia",
      bgColor:
        "bg-gradient-to-br from-indigo-200 to-violet-100 border-2 border-indigo-200",
      image: "/assets/ids_documentation/dashboard.png",
      images: [
        "/assets/ids_documentation/login.png",
        "/assets/ids_documentation/dashboard.png",
        "/assets/ids_documentation/pending_task.png",
        "/assets/ids_documentation/pr_1.png",
        "/assets/ids_documentation/pr_2.png",
        "/assets/ids_documentation/pr_3.png",
        "/assets/ids_documentation/pr_4.png",
        "/assets/ids_documentation/pr_5.png",
        "/assets/ids_documentation/pr_6.png",
        "/assets/ids_documentation/reim_1.png",
        "/assets/ids_documentation/reim_2.png",
        "/assets/ids_documentation/reim_3.png",
        "/assets/ids_documentation/reim_4.png",
        "/assets/ids_documentation/reim_5.png",
        "/assets/ids_documentation/ca_1.png",
        "/assets/ids_documentation/ca_2.png",
        "/assets/ids_documentation/settlement_1.png",
        "/assets/ids_documentation/settlement_2.png",
        "/assets/ids_documentation/po_1.png",
        "/assets/ids_documentation/po_2.png",
        "/assets/ids_documentation/po_3.png",
        "/assets/ids_documentation/po_4.png",
        "/assets/ids_documentation/ar_1.png",
        "/assets/ids_documentation/opca_1.png",
        "/assets/ids_documentation/opca_2.png",
        "/assets/ids_documentation/opreim_1.png",
        "/assets/ids_documentation/tr_1.png",
        "/assets/ids_documentation/tr_2.png",
        "/assets/ids_documentation/mst_1.png",
        "/assets/ids_documentation/mst_2.png",
        "/assets/ids_documentation/mst_3.png",
        "/assets/ids_documentation/mst_4.png",
      ],
    },
    {
      title: "Data Validation System",
      description: "Designed and developed a web-based Data Validation System with two main module: Module validating SLA records that exceed standards by routing them to responsible teams for remarks and Module enabling high-volume raw data uploads into separate staging databases", 
      tags: ["Laravel", "ReactJS", "Postgresql"],
      technologies: ["Laravel", "React", "PostgreSQL"],
      company: "PT Sinergi Informatika Semen Indonesia",
      bgColor: "bg-gradient-to-br from-sky-200 to-blue-100 border-2 border-blue-200",
      image: "/assets/sisi/csa1.png",
      images: ["/assets/sisi/csa1.png", "/assets/sisi/csa2.png", "/assets/sisi/csa3.png", "/assets/sisi/csa4.png", "/assets/sisi/csa6.png", "/assets/sisi/csa7.png","/assets/sisi/csa13.png", "/assets/sisi/csa8.png",  "/assets/sisi/csa9.png", "/assets/sisi/csa10.png", "/assets/sisi/csa11.png", "/assets/sisi/csa12.png"],
    },
    {
      title: "Inventory Management System",
      description:
        "Designed and implemented 16 REST APIs for system integration. Participated in the development of workshop inventory module.",
      tags: ["Laravel", "PHP", "MySQL"],
      technologies: ["Laravel", "PHP", "MySQL"],
      company: "PT Telkom Satelit Indonesia",
      bgColor: "bg-gradient-to-br from-amber-200 to-orange-100 border-2 border-orange-200",
      image: "/assets/magangTelkomsat/sertifikatTelkomsat.jpg",
      images: [
        "/assets/magangTelkomsat/magangTel1.png",
        "/assets/magangTelkomsat/magangTel2.png",
        "/assets/magangTelkomsat/magangTel3.png",        
        "/assets/magangTelkomsat/sertifikatTelkomsat.jpg",
      ],
    },
    {
      title: "First Aid Kit Consumption",
      description:
        "Enabling each branch to efficiently record and track daily first aid kit usage with a comprehensive tracking module.",
      tags: ["Laravel", "Vue.js", "MySQL"],
      technologies: ["Laravel", "Vue.js", "MySQL"],
      company: "PT Cipta Krida Bahari",
      bgColor: "bg-gradient-to-br from-emerald-200 to-teal-100 border-2 border-teal-200",
      image: "/assets/consumptionP3K/consumptionP3K1.png",
      images: [
        "/assets/consumptionP3K/consumptionP3K1.png",
        "/assets/consumptionP3K/consumptionP3K2.png",
      ],
    },
    {
      title: "Genset Inspection",
      description:
        "Systematic inspection system to ensure operational readiness and proper maintenance tracking of generators.",
      tags: ["Laravel", "Vue.js", "MySQL"],
      technologies: ["Laravel", "Vue.js", "MySQL"],
      company: "PT Cipta Krida Bahari",
      bgColor: "bg-gradient-to-br from-emerald-200 to-teal-100 border-2 border-teal-200",
      image: "/assets/inspectionGenset/inspectionGenset_1.png",
      images: [
        "/assets/inspectionGenset/inspectionGenset_1.png",
        "/assets/inspectionGenset/inspectionGenset_2.png",
        "/assets/inspectionGenset/inspectionGenset_3.png",
      ],
    },
    {
      title: "Hydrant Pipe Inspection",
      description:
        "Regular inspection module for fire safety compliance and hydrant condition monitoring across branches.",
      tags: ["Laravel", "Vue.js", "MySQL"],
      technologies: ["Laravel", "Vue.js", "MySQL"],
      company: "PT Cipta Krida Bahari",
      bgColor: "bg-gradient-to-br from-emerald-200 to-teal-100 border-2 border-teal-200",
      image: "/assets/inspectionHydrant/inspectionHydrant_1.png",
      images: [
        "/assets/inspectionHydrant/inspectionHydrant_1.png",
        "/assets/inspectionHydrant/inspectionHydrant_2.png",
      ],
    },
    {
      title: "First Aid Kit Inspection",
      description:
        "Monthly inspection module to monitor usage trends and track remaining first aid kit stock across branches.",
      tags: ["Laravel", "Vue.js", "MySQL"],
      technologies: ["Laravel", "Vue.js", "MySQL"],
      company: "PT Cipta Krida Bahari",
      bgColor: "bg-gradient-to-br from-emerald-200 to-teal-100 border-2 border-teal-200",
      image: "/assets/inspectionP3K/inspectionP3K_1.png",
      images: [
        "/assets/inspectionP3K/inspectionP3K_1.png",
        "/assets/inspectionP3K/inspectionP3K_2.png",
        "/assets/inspectionP3K/inspectionP3K_3.png",
      ],
    },
  ];

  const openModal = (project: (typeof projects)[number]) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = "";
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

  useEffect(() => {
    const interval = window.setInterval(() => {
      setProjectSlideIndex((prev) => prev + 1);
    }, 2500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden text-neutral-900 selection:bg-blue-200 selection:text-blue-900">
      <div className="pointer-events-none absolute -top-40 -left-32 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />
      <div className="pointer-events-none absolute top-[30%] -right-40 h-[30rem] w-[30rem] rounded-full bg-sky-300/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-300/10 blur-3xl" />
      {/* ========== NAVIGATION ========== */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/65 backdrop-blur-xl border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-2 px-6 py-4">
          <a href="#" className="group" aria-label="Basir logo">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-200 bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-blue-500/25">
              <span className="text-2xl font-semibold leading-none" style={{ fontFamily: "'Times New Roman', serif" }}>ℬ</span>
            </div>
          </a>

          <div className="flex items-center gap-3 text-[12px] font-semibold tracking-[0.16em] uppercase font-mono text-slate-600">
            {/* <a
              href="/assets/cv_basir.pdf"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              Resume
            </a>
            <span className="text-slate-400">|</span> */}
            <a
              href="#work"
              className="hover:text-blue-600 transition-colors"
            >
              Work
            </a>
            <span className="text-slate-400">|</span>
            <a
              href="https://www.linkedin.com/in/basrarsy/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              Linkedin
            </a>
          </div>
        </div>
      </nav>

      {/* ========== HERO ========== */}
      <section className="pt-40 pb-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-[clamp(3rem,8vw,4rem)] font-bold leading-[0.9] tracking-tight text-neutral-800 uppercase">
            BASIR ARSY SYAMS
          </h1>
        </div>
      </section>

      {/* ========== PROJECTS / WORK ========== */}
      <section id="work" className="px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <p className="mb-3 text-sm font-medium text-red-700">
            *Please click on the project to view details*
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => openModal(project)}
              >
                {/* Image Card */}
                <div
                  className={`${project.bgColor} rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center p-8 transition-transform duration-500 group-hover:scale-[1.02]`}
                >
                  <div className="relative w-full h-full">
                    {project.images.map((img, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={img}
                        alt={`${project.title} - ${imgIndex + 1}`}
                        className={`absolute inset-0 w-full h-full object-contain rounded-lg shadow-2xl shadow-black/10 transition-all duration-700 ease-in-out group-hover:scale-105 ${
                          imgIndex === projectSlideIndex % project.images.length
                            ? "opacity-100 z-10"
                            : "opacity-0 z-0"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Info */}
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-blue-600 transition-colors">
                      {project.title} ({project.company})
                    </h3>
                    {(project.role || project.period) && (
                      <p className="mt-1 text-xs font-mono text-neutral-500">
                        {project.role} {project.role && project.period ? "•" : ""} {project.period}
                      </p>
                    )}
                    <p className="mt-1.5 text-sm text-neutral-500 leading-relaxed max-w-md">
                      {project.description}
                    </p>
                    {project.documentation && (
                      <div className="mt-2.5">
                        <a
                          href={project.documentation}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors hover:underline"
                        >
                          <span>Documentation</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-2 flex-shrink-0 mt-1 max-w-[140px] justify-end">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-medium tracking-[0.15em] uppercase text-neutral-400 border border-neutral-200 rounded px-2 py-0.5 font-mono whitespace-nowrap"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="relative px-6 pb-16 pt-8 overflow-hidden">
        <div className="mx-auto mb-8 max-w-6xl">
          <hr className="border-0 h-px bg-gradient-to-r from-transparent via-slate-300/90 to-transparent" />
        </div>

        <div className="relative max-w-6xl mx-auto flex flex-col items-center justify-center gap-6 md:flex-row md:justify-between">
          <p className="text-xs text-slate-500 font-mono tracking-wide">
            &copy; 2026 Basir Arsy Syams
          </p>

          <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.14em] uppercase font-mono text-slate-600">
            {/* <a
              href="/assets/cv_basir.pdf"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              Resume
            </a> */}
            <span className="text-slate-400">|</span>
            <a
              href="#work"
              className="hover:text-blue-600 transition-colors"
            >
              Work
            </a>
            <span className="text-slate-400">|</span>
            <a
              href="https://www.linkedin.com/in/basrarsy/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              Linkedin
            </a>
          </div>
        </div>
      </footer>

      {/* ========== PROJECT MODAL ========== */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center px-8 py-6 border-b border-neutral-100">
              <div>
                <h3 className="text-xl font-semibold text-neutral-900">
                  {selectedProject.company} ({selectedProject.title})
                </h3>
                {(selectedProject.role || selectedProject.period) && (
                  <p className="text-xs text-neutral-500 font-mono mt-1">
                    {selectedProject.role}
                    {selectedProject.role && selectedProject.period ? " • " : ""}
                    {selectedProject.period}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-3">
                {selectedProject.documentation && (
                  <a
                    href={selectedProject.documentation}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors border border-blue-200"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Documentation</span>
                  </a>
                )}
                <button
                  onClick={closeModal}
                  className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4 text-neutral-600" />
                </button>
              </div>
            </div>

            {/* Image Gallery */}
            <div className={`relative ${selectedProject.bgColor}`}>
              <div className="flex items-center justify-center p-8 min-h-[400px]">
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
                  className="max-w-full max-h-[60vh] object-contain rounded-lg shadow-lg"
                />
              </div>
              {selectedProject.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-neutral-700" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-neutral-700" />
                  </button>
                </>
              )}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-mono font-medium text-neutral-500">
                {currentImageIndex + 1} / {selectedProject.images.length}
              </div>
            </div>

            {/* Details */}
            <div className="px-8 py-6 border-t border-neutral-100">
              <p className="text-sm text-neutral-500 leading-relaxed mb-4">
                {selectedProject.description}
              </p>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono font-medium text-neutral-500 border border-neutral-200 rounded-full px-2.5 py-0.5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {selectedProject.documentation && (
                  <a
                    href={selectedProject.documentation}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    <span>View Full Documentation (Google Drive)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            {/* Thumbnails */}
            {selectedProject.images.length > 1 && (
              <div className="px-8 pb-6 flex gap-2 overflow-x-auto">
                {selectedProject.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImageIndex(i)}
                    className={`w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                      i === currentImageIndex
                        ? "border-blue-500 opacity-100"
                        : "border-transparent opacity-50 hover:opacity-80"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;