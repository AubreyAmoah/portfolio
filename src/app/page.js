"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const Portfolio = () => {
  // Sample data - replace with your own
  const projects = [
    {
      title: "Project 1",
      description: "A web application built with React and Node.js",
      tags: ["React", "Node.js", "MongoDB"],
      link: "https://project1.com",
      github: "https://github.com/username/project1",
    },
    {
      title: "Project 2",
      description: "Mobile-first e-commerce platform",
      tags: ["Next.js", "Tailwind", "PostgreSQL"],
      link: "https://project2.com",
      github: "https://github.com/username/project2",
    },
  ];

  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "SQL",
    "AWS",
    "Docker",
    "Git",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Aubrey Amoah</h1>
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
          <Button className="mr-4">
            <Mail className="mr-2 h-4 w-4" />
            Get in Touch
          </Button>
          <Button variant="outline">View Resume</Button>
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

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-16 bg-muted/50">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="mb-8 text-muted-foreground">
            I'm a software developer with a passion for creating beautiful,
            functional, and user-friendly applications. With several years of
            experience in web development, I enjoy tackling complex problems and
            turning ideas into reality through elegant code.
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
              <a href="mailto:your.email@example.com">
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://linkedin.com/in/yourusername"
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
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
