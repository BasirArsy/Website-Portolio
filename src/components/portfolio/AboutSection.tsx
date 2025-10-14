import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Lightbulb } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Frontend",
      description: "Creating responsive and interactive UI.",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Backend",
      description:
        "Experienced in designing API and create database management.",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Hard Worker & Adaptable",
      description:
        "Workholic, resilient, highly adaptable, and able to thrive under pressure without taking things personally.",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Debugging",
      description:
        "Skilled in identifying, analyzing, and resolving bugs to ensure optimal application performance.",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "AI Enthusiast",
      description:
        "Good understanding in utilizing AI technologies to enhance web solutions and productivity.",
    },
  ];
  return (
    <section id="about" className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            About Me
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Turning Ideas Into{" "}
            <span className="text-primary">Digital Reality</span>
          </h2>
          {/* <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate web developer who loves creating efficient, and
            user-friendly web applications
          </p> */}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="animate-fade-up">
              <img
                src="/assets/profile.jpg" // gunakan slash untuk path public
                alt="Basir Arsy Syams"
                className="w-40 h-40 rounded-full mx-auto mb-4 shadow-lg object-cover"
              />
              <h3 className="text-2xl font-semibold mb-4">
                Hi, I'm a Basir Arsy Syams
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I have a knowledge in both backend and frontend
                development, enabling me to deliver complete web solutions. My
                main expertise is in building robust backend systems with
                Laravel and crafting dynamic, responsive user interfaces using
                Vue.js.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                I am dedicated to writing clean, maintainable code and
                continuously learning the latest technologies in web
                development. Every project is a chance to grow, innovate, and
                deliver outstanding results for clients and users.
              </p>

              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Laravel Expert</Badge>
                <Badge variant="secondary">Vue.js Specialist</Badge>
                <Badge variant="secondary">Full Stack</Badge>
                <Badge variant="secondary">Problem Solver</Badge>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div
            className="
              grid
              grid-cols-2
              grid-rows-3
              gap-6
              md:[grid-template-areas:'a_b''c_c''d_e']
              [grid-template-areas:'a_b''c_c''d_e']
            "
            style={{
              gridTemplateAreas: `
                "a b"
                "c c"
                "d e"
              `,
            }}
          >
            <div style={{ gridArea: "a" }}>
              <Card className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary">
                    {highlights[0].icon}
                  </div>
                  <h4 className="font-semibold mb-2">{highlights[0].title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {highlights[0].description}
                  </p>
                </CardContent>
              </Card>
            </div>
            <div style={{ gridArea: "b" }}>
              <Card className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary">
                    {highlights[1].icon}
                  </div>
                  <h4 className="font-semibold mb-2">{highlights[1].title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {highlights[1].description}
                  </p>
                </CardContent>
              </Card>
            </div>
            <div style={{ gridArea: "c" }}>
              <Card className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary">
                    {highlights[2].icon}
                  </div>
                  <h4 className="font-semibold mb-2">{highlights[2].title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {highlights[2].description}
                  </p>
                </CardContent>
              </Card>
            </div>
            <div style={{ gridArea: "d" }}>
              <Card className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary">
                    {highlights[3].icon}
                  </div>
                  <h4 className="font-semibold mb-2">{highlights[3].title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {highlights[3].description}
                  </p>
                </CardContent>
              </Card>
            </div>
            <div style={{ gridArea: "e" }}>
              <Card className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary">
                    {highlights[4].icon}
                  </div>
                  <h4 className="font-semibold mb-2">{highlights[4].title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {highlights[4].description}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
