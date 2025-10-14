import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: "🔧",
      skills: [
        {
          name: "Laravel",
        },
        {
          name: "PHP",
        },
        {
          name: "MySQL",
        },
        {
          name: "RESTful APIs",
        },
      ],
    },
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        {
          name: "Vue.js",
        },
        {
          name: "JavaScript",
        },
        {
          name: "HTML/CSS",
        },
        {
          name: "Tailwind CSS",
        },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: "⚡",
      skills: [
        { name: "Visual Studio Code" },
        { name: "Postman" },
        { name: "GIT" },
        { name: "DBeaver" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Technical Skills
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set focused on Laravel and Vue.js ecosystem for
            full-stack web development
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-2">{category.icon}</div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-3 py-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-primary font-semibold shadow hover:scale-105 transition-transform duration-200"
                    >
                      <svg
                        width="18"
                        height="18"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="8" fill="#6366F1" />
                        <text
                          x="12"
                          y="16"
                          textAnchor="middle"
                          fontSize="10"
                          fill="#fff"
                        >
                          {skill.name[0]}
                        </text>
                      </svg>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Technologies */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Workholic",
              "Resilience",
              "Adaptif",
              "Kompeten",
              "Amanah",
              "Kolaboratif",
            ].map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
