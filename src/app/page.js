"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const projects = [
  {
    title: "Document Reminders",
    description: "Add reminders and comments to your ggogle drive docs",
    tags: ["Nextjs", "OAuth"],
    link: "https://casesrem.vercel.app",
    github: "https://github.com/AubreyAmoah/doc_commenter",
  },
  {
    title: "Ecomerce site",
    description: "A web application built with Next js",
    tags: ["Nextjs"],
    link: "https://penastore.vercel.app",
    github: "https://github.com/AubreyAmoah/pena_store",
  },
  {
    title: "Business Locator",
    description: "A responsive web app for finding businesses near you",
    tags: ["Next.js", "Tailwind", "Mongo DB", "Node Js", "Rest API"],
    link: "https://elitestrategiesgh.com/business",
    github: "https://github.com/AubreyAmoah/elitestrategies",
  },
  {
    title: "Facial Recognition Attendance App",
    description: "A web application for facial recognition.",
    tags: ["Next Js", "Tensoflow Js", "MongoDB"],
    link: "https://presentsir.vercel.app",
    github: "https://github.com/AubreyAmoah/attendance-system-presentsir-",
  },
  {
    title: "Voice Calculator",
    description: "A voice recognition calculator",
    tags: ["Javascript", "Web Speech API", "HTML"],
    link: "https://mymaat.netlify.app",
    github: "https://github.com/AubreyAmoah/maat",
  },
  {
    title: "Authentication API",
    description: "A rest API for user authentication",
    tags: ["Node js", "Express", "JWT"],
    link: "#",
    github: "https://github.com/AubreyAmoah/Authorization",
  },
  {
    title: "Network Adapter Lister",
    description: "List network adapters on your system",
    tags: ["C", "Networking"],
    link: "#",
    github: "https://github.com/AubreyAmoah/network_adapter_lister",
  },
];

const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "C",
  "SQL",
  "AWS",
  "Docker",
  "Git",
];

const pcBuilds = [
  {
    title: "Cyberpunk Build 2024",
    specs: [
      "AMD Ryzen 9 7950X",
      "NVIDIA RTX 4090",
      "64GB DDR5 RAM",
      "2TB NVMe SSD",
    ],
    description:
      "A high-end gaming build with custom water cooling and RGB synchronization.",
    image: `/cyber.webp`,
  },
  {
    title: "Minimal Workstation",
    specs: [
      "Intel i9-14900K",
      "NVIDIA RTX 4080",
      "32GB DDR5 RAM",
      "4TB NVMe RAID",
    ],
    description: "Clean, minimalist build focused on performance and silence.",
    image: `/minimalistic.webp`,
  },
  {
    title: "SFF Gaming Rig",
    specs: [
      "AMD Ryzen 7 7800X3D",
      "NVIDIA RTX 4070 Ti",
      "32GB DDR5 RAM",
      "1TB NVMe SSD",
    ],
    description: "Compact powerhouse in a sub-10L case with custom cables.",
    image: `/sff.webp`,
  },
];

const Portfolio = () => {
  const [time, setTime] = React.useState(new Date());
  const [text, setText] = React.useState("");
  const fullText = "Currently coding something awesome...";
  const [textIndex, setTextIndex] = React.useState(0);
  const [currentBuild, setCurrentBuild] = React.useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [slideDirection, setSlideDirection] = React.useState("right");

  // Update time every second
  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Typing animation effect
  React.useEffect(() => {
    if (textIndex < fullText.length) {
      const typingTimer = setTimeout(() => {
        setText(fullText.slice(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      }, 100);

      return () => clearTimeout(typingTimer);
    } else {
      // Reset after completion
      setTimeout(() => {
        setText("");
        setTextIndex(0);
      }, 2000);
    }
  }, [textIndex]);

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        nextBuild();
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [isAnimating]);

  const nextBuild = () => {
    setCurrentBuild((prev) => (prev + 1) % pcBuilds.length);
  };

  const previousBuild = () => {
    setCurrentBuild((prev) => (prev - 1 + pcBuilds.length) % pcBuilds.length);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Live Status Bar */}
      <div className="bg-primary/5 border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-muted-foreground">
                {text || "..."}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                {time.toLocaleTimeString()}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold hidden md:inline-block">
              Aubrey Amoah
            </h1>
            <div className="space-x-4">
              <Button
                variant="ghost"
                onClick={() =>
                  document.getElementById("projects").scrollIntoView()
                }
              >
                Projects
              </Button>
              <Button
                variant="ghost"
                onClick={() =>
                  document.getElementById("about").scrollIntoView()
                }
              >
                About
              </Button>
              <Button
                variant="ghost"
                onClick={() =>
                  document.getElementById("contact").scrollIntoView()
                }
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-6">Hi, I'm Aubrey 👋</h1>
          <p className="text-xl text-muted-foreground mb-8">
            A passionate software developer specializing in building exceptional
            web applications. Currently focused on creating accessible,
            human-centered digital experiences.
          </p>
          <Button
            onClick={() =>
              (window.location.href = "mailto:aoamoah98@gmail.com")
            }
            className="mr-4"
          >
            <Mail className="mr-2 h-4 w-4" />
            Get in Touch
          </Button>
          <Button
            onClick={() =>
              (window.location.href =
                "https://drive.google.com/file/d/1c69VrD5uITxJrN5RPD9UvZ5uSINFTERk/view?usp=drive_link")
            }
            variant="outline"
          >
            View Resume
          </Button>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* PC Builds Section with Enhanced Animations */}
      <section className="container mx-auto px-4 py-16 bg-primary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in">
            Oh! I build PCs too 😊
          </h2>
          <p className="text-muted-foreground mb-8 animate-fade-in">
            Beyond software development, I have a passion for building custom
            PCs, combining high performance with sleek aesthetics. Here are some
            of my recent builds, designed for both power and style. 🚀🔥
          </p>

          <Card className="relative overflow-hidden group">
            <div
              className={`relative transition-transform duration-500 ease-out ${
                isAnimating
                  ? slideDirection === "right"
                    ? "-translate-x-full"
                    : "translate-x-full"
                  : "translate-x-0"
              }`}
            >
              <img
                src={pcBuilds[currentBuild].image}
                alt={pcBuilds[currentBuild].title}
                className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button
                variant="outline"
                size="icon"
                onClick={previousBuild}
                className="transform -translate-x-full group-hover:translate-x-0 transition-all duration-300 bg-background/50 backdrop-blur-sm hover:bg-background/80"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextBuild}
                className="transform translate-x-full group-hover:translate-x-0 transition-all duration-300 bg-background/50 backdrop-blur-sm hover:bg-background/80"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <CardContent className="p-6 transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-300">
              <CardTitle className="mb-2 transition-colors duration-300">
                {pcBuilds[currentBuild].title}
              </CardTitle>
              <CardDescription className="mb-4 transition-colors duration-300">
                {pcBuilds[currentBuild].description}
              </CardDescription>
              <div className="flex flex-wrap gap-2">
                {pcBuilds[currentBuild].specs.map((spec, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="transform transition-all duration-300 hover:scale-105"
                  >
                    {spec}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-4 gap-2">
            {pcBuilds.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-all duration-300 transform hover:scale-150 ${
                  currentBuild === index ? "bg-primary w-4" : "bg-primary/20"
                }`}
                onClick={() => {
                  setSlideDirection(index > currentBuild ? "right" : "left");
                  setCurrentBuild(index);
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-16 bg-muted/50">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="mb-8 text-muted-foreground">
            I'm an IT professional with a passion for creating innovative,
            functional, and user-friendly solutions. With experience across
            various domains, including software development, web technologies,
            and IT support, I enjoy tackling complex problems and turning ideas
            into reality through technology-driven solutions.
          </p>
          <h3 className="text-xl font-semibold mb-4">Skills & Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <div className="flex flex-col items-center gap-6">
          <p className="text-muted-foreground text-center max-w-xl">
            I'm currently open to new opportunities and collaborations. Feel
            free to reach out if you'd like to connect!
          </p>
          <div className="flex gap-4">
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:aoamoah98@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com/AubreyAmoah"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://www.linkedin.com/in/aubrey-owusu-amoah-336b93334"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} Aubrey Amoah. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
