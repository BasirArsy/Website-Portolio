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
    <section id="about" className="py-20 bg-gradient-primary relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 px-4 py-2 text-sm">
            👋 Available for opportunities
          </Badge>
        </div>

        {/* Main Content */}
        <div className="max-w-2xl mx-auto">
          <div className="space-y-8 text-center">
            {/* Profile Image */}
            <div className="animate-fade-up">
              <img
                src="/assets/profile.jpg"
                alt="Basir Arsy Syams"
                className="w-40 h-40 rounded-full mx-auto shadow-lg object-cover"
              />
            </div>

            {/* Title and Description */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Hi, I'm <span className="text-primary">Basir Arsy Syams</span>
              </h2>

              <p className="text-muted-foreground leading-relaxed text-lg">
                I am a fresh graduate with a background in Information
                Technology and hold a Bachelor of Applied Computer Science
                degree. I have experience in developing web-based systems. This
                experience has honed my problem-solving abilities, programming
                logic, and resilience.
              </p>

              <p className="text-muted-foreground leading-relaxed text-lg">
                If you are looking for a fresh graduate with strong
                problem-solving capabilities, solid logical thinking, and quick
                adaptability to new technologies, I am ready to contribute to
                your team.
              </p>
            </div>

            {/* Skills Badges */}
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge variant="secondary">Laravel</Badge>
              <Badge variant="secondary">Vue.js</Badge>
              <Badge variant="secondary">PHP</Badge>
              <Badge variant="secondary">Javascript</Badge>
              <Badge variant="secondary">Tailwind</Badge>
              <Badge variant="secondary">Bootstrap</Badge>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <a
                href="/assets/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="shadow-primary hover:shadow-glow transition-all duration-300"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </Button>
              </a>

              <a
                href="/assets/BNSP.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="shadow-primary hover:shadow-glow transition-all duration-300"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download BNSP
                </Button>
              </a>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToInternshipExperience}
                className="hover:bg-primary/10 hover:border-primary transition-all duration-300"
              >
                View Experience
                <ArrowDown className="w-5 h-5 ml-2" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={scrollToProjects}
                className="hover:bg-primary/10 hover:border-primary transition-all duration-300"
              >
                View Projects
                <ArrowDown className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Animated Arrow Down */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
