import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Full-Stack Web Developer",
      company: "PT Cipta Krida Bahari (CKB Group)",
      location: "Jakarta, Indonesia",
      period: "Jun - Oct 2025",
      type: "Internship",
      description:
        "Developing comprehensive web application modules to support operational efficiency and safety compliance across company branches using Laravel and Vue.js technologies.",
      achievements: [
        " Developed the First Aid Kit Consumption module using Laravel and Vue.js, enabling each branch of PT Cipta Krida Bahari to efficiently record and track the usage of first aid kits",
        "Developed the Genset Inspection module using Laravel and Vue.js, enabling systematic inspections to ensure operational readiness and propermaintenance tracking of generators across branches.",
        "Developed the First Aid Kit Inspection module using Laravel and Vue.js, facilitating monthly inspections to monitor how many first aid kits have been used and the remaining stock in each branch.",
        "Developed the Hydrant Pipe Inspection module using Laravel and Vue.js, supporting regular inspections to ensure fire safety compliance andaccurate monitoring of hydrant conditions across branches.",
      ],
      technologies: ["Laravel", "Vue.js", "PHP", "JavaScript", "MySQL"],
    },
    {
      title: "Back-End Web Developer",
      company: "PT Telkom Satelit Indonesia (Telkomsat)",
      location: "Bogor, Indonesia",
      period: "Jul - Nov 2024",
      type: "Internship",
      description:
        "Participated in the development of an Inventory Management System website's workshop module, focusing on backend API development and system integration.",
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
    <section id="internshipExperience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Career Journey
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My internship journey as a web developer, gaining hands-on
            experience in both full-stack and backend development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>

                  <Card className="md:ml-16 bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <CardTitle className="text-xl">
                              {experience.title}
                            </CardTitle>
                            <Badge className="bg-blue-900 text-white px-3 py-1 rounded-full text-xs font-semibold">
                              {experience.type}
                            </Badge>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Building className="w-4 h-4" />
                              <span className="font-medium">
                                {experience.company}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              <span>{experience.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start md:items-end gap-2">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span>{experience.period}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {experience.achievements.map(
                            (achievement, achievementIndex) => (
                              <li
                                key={achievementIndex}
                                className="flex items-start gap-2 text-muted-foreground"
                              >
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span>{achievement}</span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="outline"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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
