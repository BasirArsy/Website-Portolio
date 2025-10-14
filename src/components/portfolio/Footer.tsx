import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-2">
              Web Developer
            </h3>
            <p className="text-muted-foreground text-sm">
              Crafting digital experiences with Laravel & Vue.js
            </p>
          </div>
          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <button
              onClick={() =>
                document
                  .getElementById("home")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("internshipExperience")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("skills")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Skills
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end space-x-4">
            {/* <Button variant="ghost" size="icon" className="hover:text-primary">
              <Github className="w-5 h-5" />
            </Button> */}
            <a
              href="https://wa.me/6282249919354"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                >
                  <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.607 1.938 6.563L4 29l7.563-1.938A12.94 12.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.953 0-3.844-.512-5.5-1.477l-.391-.227-4.5 1.156 1.156-4.5-.227-.391A9.94 9.94 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.297-7.297c-.297-.148-1.758-.867-2.031-.967-.273-.099-.47-.148-.668.148-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.074-.297-.148-1.255-.463-2.39-1.477-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.457.13-.605.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.074-.148-.668-1.611-.915-2.205-.242-.583-.487-.504-.668-.513-.173-.009-.372-.011-.57-.011-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.477 0 1.461 1.065 2.875 1.213 3.074.148.198 2.099 3.205 5.077 4.367.711.306 1.264.489 1.697.625.713.227 1.362.195 1.875.118.572-.085 1.758-.719 2.007-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                </svg>
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/basrarsy/" target="_blank">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
            </a>
            <a
              target="_blank"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=basirsyams26@gmail.com"
            >
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
              >
                <Mail className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <button
            onClick={scrollToTop}
            className="hover:text-primary transition-colors"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
