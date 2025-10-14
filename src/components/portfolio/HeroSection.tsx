import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, ArrowDown, Github, Linkedin } from "lucide-react";

const HeroSection = () => {
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
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-glow" />
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-accent/10 rounded-full blur-2xl" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-up">
          <Badge variant="outline" className="mb-6 px-4 py-2 text-sm">
            👋 Available for opportunities
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Web Developer
          </h1>

          <h2 className="text-2xl md:text-3xl font-medium mb-6 text-muted-foreground">
            <span className="text-primary font-semibold">Laravel</span> &{" "}
            <span className="text-primary font-semibold">Vue.js</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate web developer with expertise in creating robust backend
            solutions with Laravel and dynamic frontend experiences with Vue.js.
            Ready to bring your ideas to life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="public\assets\cv.pdf" target="_blank">
              <Button
                size="lg"
                className="shadow-primary hover:shadow-glow transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
            </a>
            <a href="public/assets/BNSP.pdf" target="_blank">
              <Button
                size="sm"
                className="shadow-primary hover:shadow-glow transition-all duration-300"
              >
                <Download className="w-4 h-4 mr-2" />
                Download BNSP Certificate
              </Button>
            </a>
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

          <div className="flex items-center justify-center space-x-6">
            {/* <Button
              variant="ghost"
              size="icon"
              className="hover:text-primary hover:scale-110 transition-all duration-300"
            >
              <Github className="w-6 h-6" />
            </Button> */}
            {/* <Button
              variant="ghost"
              size="icon"
              className="hover:text-primary hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </Button> */}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
