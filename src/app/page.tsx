'use client';

import { useState } from 'react';
import type { FC } from 'react';
import { Button } from '@/components/ui/button';
import { InfoCard } from '@/components/info-card';
import { DetailDialog } from '@/components/detail-dialog';
import { Github, Linkedin, Mail, User, Code, Briefcase, Lightbulb, ExternalLink } from 'lucide-react';
import Image from 'next/image';

interface Detail {
  title: string;
  description: string;
  tags: string[];
  longDescription: string;
  image?: string;
  imageHint?: string;
  link?: string;
}

const projects: Detail[] = [
  {
    title: 'POS API',
    description: 'A robust Point-of-Sale API for retail applications.',
    tags: ['Backend', 'API', 'Node.js', 'Express', 'MongoDB'],
    longDescription:
      'Designed and developed a comprehensive RESTful API for a Point-of-Sale system. Features include inventory management, sales tracking, user authentication, and receipt generation. Built with a focus on scalability and security, serving as the backbone for multiple client-side applications.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'api code',
    link: 'https://github.com'
  },
  {
    title: 'Kubernetes Log Catcher',
    description: 'A service to aggregate and analyze logs from Kubernetes clusters.',
    tags: ['DevOps', 'Go', 'Kubernetes', 'gRPC'],
    longDescription:
      'Created a high-performance log aggregation service in Go that collects, parses, and stores logs from various pods within a Kubernetes cluster. The system provides real-time log searching and analysis capabilities through a gRPC interface, significantly improving debugging and monitoring efficiency.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'kubernetes server',
  },
  {
    title: 'VA System',
    description: 'An intelligent virtual assistant for customer support automation.',
    tags: ['AI', 'Python', 'NLP', 'FastAPI'],
    longDescription:
      'Developed a virtual assistant system using natural language processing (NLP) to automate responses to common customer support queries. The system integrates with existing knowledge bases and ticketing systems, reducing response times and freeing up human agents to handle more complex issues.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'virtual assistant',
    link: 'https://github.com'
  },
];

const experiences: Detail[] = [
    {
        title: 'Senior Backend Engineer',
        description: 'Tech Solutions Inc. | 2020 - Present',
        tags: ['Python', 'Django', 'AWS', 'PostgreSQL', 'Docker'],
        longDescription: 'Led the development of scalable backend services for enterprise clients. Architected and implemented microservices on AWS, mentored junior engineers, and improved system performance by 30% through targeted optimizations. Championed best practices in code quality and testing.',
        image: 'https://placehold.co/600x400.png',
        imageHint: 'office building',
    },
    {
        title: 'Fullstack Developer',
        description: 'Creative Agency Co. | 2018 - 2020',
        tags: ['JavaScript', 'React', 'Node.js', 'GraphQL', 'Heroku'],
        longDescription: 'Built and maintained full-stack applications for various clients, from e-commerce sites to interactive marketing campaigns. Collaborated closely with designers and project managers to deliver high-quality, user-centric products on tight deadlines.',
        image: 'https://placehold.co/600x400.png',
        imageHint: 'team collaboration',
    },
];

const Section: FC<{ id: string; title: string; icon: React.ReactNode; children: React.ReactNode; className?: string }> = ({ id, title, icon, children, className }) => (
  <section id={id} className={`w-full max-w-5xl mx-auto py-12 md:py-20 px-4 md:px-0 ${className}`}>
    <div className="flex items-center gap-3 mb-8">
      <div className="flex items-center justify-center size-10 rounded-full bg-primary/20 text-primary-foreground">{icon}</div>
      <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">{title}</h2>
    </div>
    {children}
  </section>
);


export default function CodeFolioPage() {
  const [dialogContent, setDialogContent] = useState<Detail | null>(null);

  const openDialog = (content: Detail) => {
    setDialogContent(content);
  };

  return (
    <div className="bg-background min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                    <span className="font-headline text-xl font-bold text-foreground">Ari Ardiansyah</span>
                </div>
                <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                        <a href="#about" className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
                        <a href="#projects" className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors">Projects</a>
                        <a href="#experience" className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors">Experience</a>
                    </div>
                </div>
                <a href="#contact">
                  <Button variant="default">
                    Contact Me
                    <Mail className="ml-2 h-4 w-4" />
                  </Button>
                </a>
            </div>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center bg-background overflow-hidden">
          <div className="absolute inset-0 bg-grid-gray-200/40 dark:bg-grid-gray-800/40 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div className="z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tight text-foreground">
              Ari Ardiansyah
            </h1>
            <p className="mt-4 text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Fullstack Developer / Backend Engineer
            </p>
            <p className="mt-2 text-md md:text-lg text-muted-foreground/80 max-w-2xl mx-auto">
              Crafting robust and scalable solutions with a passion for clean code.
            </p>
          </div>
        </section>

        {/* About Me Section */}
        <Section id="about" title="About Me" icon={<User size={24} />}>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-4 text-lg text-muted-foreground">
                    <p>
                        I am a dedicated and results-driven developer with a strong foundation in backend technologies and a keen eye for frontend architecture. With several years of experience in the industry, I thrive on solving complex problems and building applications that are both efficient and user-friendly. 
                    </p>
                    <p>
                        My journey in software development is fueled by a constant desire to learn and adapt to new technologies, ensuring that I can deliver modern and effective solutions.
                    </p>
                    <div className="space-y-2 pt-4">
                        <h3 className="text-xl font-headline font-semibold text-foreground">Education</h3>
                        <p>Bachelor of Science in Computer Science - University of Technology (2014 - 2018)</p>
                    </div>
                </div>
                <div className="flex items-center justify-center bg-accent/50 rounded-lg p-6">
                  <blockquote className="relative">
                    <Lightbulb className="absolute -top-4 -left-4 text-primary" size={32} />
                    <p className="text-xl italic font-medium text-foreground">
                      "The best way to predict the future is to create it."
                    </p>
                    <footer className="mt-2 text-right text-sm text-muted-foreground">- Peter Drucker</footer>
                  </blockquote>
                </div>
            </div>
        </Section>
        
        {/* Projects Showcase */}
        <Section id="projects" title="Projects" icon={<Code size={24} />}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <InfoCard
                        key={index}
                        {...project}
                        onClick={() => openDialog(project)}
                    />
                ))}
            </div>
        </Section>
        
        {/* Work Experience */}
        <Section id="experience" title="Work Experience" icon={<Briefcase size={24} />}>
             <div className="space-y-8">
                {experiences.map((exp, index) => (
                    <InfoCard
                        key={index}
                        {...exp}
                        onClick={() => openDialog(exp)}
                        layout="horizontal"
                    />
                ))}
            </div>
        </Section>
        
        {/* Contact Information */}
        <footer id="contact" className="bg-secondary">
          <Section id="contact-inner" title="Get In Touch" icon={<Mail size={24} />}>
            <p className="text-center text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision. Feel free to reach out.
            </p>
            <div className="flex justify-center items-center gap-6">
                <a href="mailto:ari.ardiansyah@example.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="lg" className="h-14 px-6 text-lg">
                        <Mail className="mr-3" /> Email
                    </Button>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="lg" className="h-14 px-6 text-lg">
                        <Linkedin className="mr-3" /> LinkedIn
                    </Button>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="lg" className="h-14 px-6 text-lg">
                        <Github className="mr-3" /> GitHub
                    </Button>
                </a>
            </div>
            <div className="text-center mt-12 text-muted-foreground text-sm">
                <p>&copy; {new Date().getFullYear()} Ari Ardiansyah. All rights reserved.</p>
                <p>Designed and Built with Passion</p>
            </div>
          </Section>
        </footer>

      </main>
      
      <DetailDialog
        content={dialogContent}
        onOpenChange={(isOpen) => {
          if (!isOpen) setDialogContent(null);
        }}
      />
    </div>
  );
}
