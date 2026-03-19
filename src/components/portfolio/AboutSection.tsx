import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, ArrowDown } from "lucide-react";

const AboutSection = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToInternshipExperience = () => {
    const element = document.getElementById("internshipExperience");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center relative pt-20">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-white" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/[0.03] rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Status Badge */}
          <div className="mb-8 animate-fade-in">
            <Badge
              variant="outline"
              className="px-4 py-1.5 text-xs font-medium tracking-wide uppercase border-primary/20 text-primary bg-primary/5"
            >
              Available for opportunities
            </Badge>
          </div>

          {/* Name & Title */}
          <div className="space-y-6 animate-fade-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground text-balance">
              Hi, I'm{" "}
              <span className="text-primary">Basir Arsy Syams</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              I am a fresh graduate with a background in Information Technology
              and hold a Bachelor of Applied Computer Science degree. I have
              experience in developing web-based systems, which has honed my
              problem-solving abilities, programming logic, and resilience.
            </p>

            <p className="text-base md:text-lg text-muted-foreground/80 leading-relaxed max-w-xl mx-auto">
              If you are looking for someone with strong problem-solving
              capabilities, solid logical thinking, and quick adaptability to new
              technologies — I am ready to contribute to your team.
            </p>
          </div>

          {/* Skill Tags */}
          <div className="flex flex-wrap gap-2 justify-center mt-10">
            {["Laravel", "React.js", "Python", "Vue.js", "PHP", "JavaScript", "Tailwind", "Bootstrap"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-600 border border-slate-200/80"
                >
                  {skill}
                </span>
              )
            )}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-12">
            <a href="/assets/cv_basir.pdf" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="rounded-full px-8 shadow-sm hover:shadow-md transition-all duration-300 bg-primary hover:bg-primary/90"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </a>
            <a href="/assets/BNSP.pdf" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-border hover:border-primary hover:text-primary transition-all duration-300"
              >
                <Download className="w-4 h-4 mr-2" />
                BNSP Certificate
              </Button>
            </a>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToInternshipExperience}
              className="text-muted-foreground hover:text-primary transition-all duration-300"
            >
              View Experience
              <ArrowDown className="w-4 h-4 ml-1.5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToProjects}
              className="text-muted-foreground hover:text-primary transition-all duration-300"
            >
              View Projects
              <ArrowDown className="w-4 h-4 ml-1.5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-5 h-5 text-muted-foreground/50" />
      </div>
    </section>
  );
};

export default AboutSection;
