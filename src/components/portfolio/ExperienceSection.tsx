import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "PT. IDS Teknologi Indonesia",
      location: "Jakarta, Indonesia",
      achievements: [
        "Migrated enterprise frontend for client PT Kansai Paint Indonesia across 4 main modules, 20 business modules, and 49 workflow submodules from multi-page HTML, CSS, Vanilla JS architecture to a React.js Single Page Application (SPA).",
        "Developed and integrated Request Management (Purchase Request, Reimbursement, Cash Advance, Settlement), Tracking Document (PR, AR Invoice, PO, Reimbursement, Outgoing Payments, PR-to-PO), and Approval Report modules.",
        "Successfully completed development, testing, and deployment within 5 weeks.",
      ],
      technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "SPA"],
    },
    {
      title: "Software Engineer & Data Engineer",
      company: "PT Sinergi Informatika Semen Indonesia",
      location: "Jakarta, Indonesia",
      period: "Nov 2025 - May 2026",
      type: "Internship",
      achievements: [
        "Designed and developed a Data Validation System as a solo developer, a web-based application used to validate and correct data in a datamart environment.",
        "Developed ETL pipelines across three core modules using Python and Apache Airflow, ensuring data accuracy, consistency, and reliability.",
      ],
      technologies: ["Laravel", "React.js", "Python", "Apache Airflow", "Postgresql"],
    },
    {
      title: "Full-Stack Web Developer",
      company: "PT Cipta Krida Bahari (CKB Group)",
      location: "Jakarta, Indonesia",
      period: "Jun - Oct 2025",
      type: "Internship",
      achievements: [
        "Developed the First Aid Kit Consumption module, enabling each branch to efficiently record and track daily first aid kit usage.",
        "Developed the Genset Inspection module, enabling systematic monthly inspections to ensure operational readiness and maintenance tracking.",
        "Developed the First Aid Kit Inspection module, facilitating monthly inspections to monitor usage trends and track remaining stock.",
        "Developed the Hydrant Pipe Inspection module, supporting regular monthly inspections.",
      ],
      technologies: ["Laravel", "Vue.js", "PHP", "JavaScript", "MySQL"],
    },
    {
      title: "Back-End Web Developer",
      company: "PT Telkom Satelit Indonesia (Telkomsat)",
      location: "Bogor, Indonesia",
      period: "Jul - Nov 2024",
      type: "Internship",
      achievements: [
        "Successfully designed, developed, and implemented 16 REST APIs to support system integration during two months",
        "Collaborated with team members to ensure API functionality aligned with user requirements and project goals",
        "Ensured APIs met performance and reliability standards by conducting thorough testing and debugging",
        "Participated in recording and managing production equipment testing results through the workshop module",
      ],
      technologies: ["Laravel", "PHP", "REST API", "MySQL", "Git"],
    },
  ];

  return (
    <section id="internshipExperience" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
            Career Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Experience
          </h2>
          <div className="w-12 h-[2px] bg-primary mx-auto mt-4" />
          <p className="text-muted-foreground mt-6 max-w-lg mx-auto">
            My internship journey as a web developer, gaining hands-on
            experience in both full-stack and backend development
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border hidden md:block" />

            <div className="space-y-10">
              {experiences.map((experience, index) => (
                <div key={index} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute left-[14px] top-2 w-[12px] h-[12px] rounded-full border-2 border-primary bg-white hidden md:block group-hover:bg-primary transition-colors duration-300" />

                  <div className="md:ml-14">
                    <div className="bg-white border border-border/60 rounded-xl p-6 hover:shadow-md hover:border-border transition-all duration-300">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                        <div>
                          <div className="flex items-center gap-2.5 mb-1.5 flex-wrap">
                            <h3 className="text-lg font-semibold text-foreground">
                              {experience.title}
                            </h3>
                            <Badge className="bg-primary/10 text-primary border-0 text-[10px] uppercase tracking-wider font-medium px-2 py-0.5">
                              {experience.type}
                            </Badge>
                          </div>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                              <Building className="w-3.5 h-3.5" />
                              {experience.company}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <MapPin className="w-3.5 h-3.5" />
                              {experience.location}
                            </span>
                          </div>
                        </div>
                        <span className="flex items-center gap-1.5 text-sm text-muted-foreground whitespace-nowrap">
                          <Calendar className="w-3.5 h-3.5" />
                          {experience.period}
                        </span>
                      </div>

                      {/* Achievements */}
                      <div className="mb-5">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed"
                            >
                              <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1.5">
                        {experience.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-0.5 text-[11px] font-medium rounded-full bg-slate-50 text-slate-500 border border-slate-200/80"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;