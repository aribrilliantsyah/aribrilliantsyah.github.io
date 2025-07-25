'use client';

import { useState } from 'react';
import type { FC } from 'react';
import { Button } from '@/components/ui/button';
import { InfoCard } from '@/components/info-card';
import { DetailDialog } from '@/components/detail-dialog';
import { BentoCard, BentoGrid } from '@/components/bento-grid';
import { Github, Linkedin, Mail, User, Code, Briefcase, Lightbulb, ExternalLink, ArrowRight } from 'lucide-react';
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

const bentoItems = [
    {
        icon: User,
        title: "About Me",
        background: <Image src="https://placehold.co/600x400.png" alt="About me background" layout="fill" objectFit="cover" className="absolute -z-10 opacity-30" data-ai-hint="abstract geometric" />,
        className: "col-span-12 lg:col-span-8",
        content: (
            <div className="space-y-4 text-base text-muted-foreground">
                <p>
                    I am a dedicated and results-driven developer with a strong foundation in backend technologies and a keen eye for frontend architecture. With several years of experience in the industry, I thrive on solving complex problems and building applications that are both efficient and user-friendly. 
                </p>
                <p>
                    My journey in software development is fueled by a constant desire to learn and adapt to new technologies, ensuring that I can deliver modern and effective solutions.
                </p>
            </div>
        )
    },
    {
        icon: Lightbulb,
        title: "Philosophy",
        background: null,
        className: "col-span-12 lg:col-span-4",
        content: (
            <blockquote className="relative h-full flex flex-col justify-center items-center">
                <p className="text-xl md:text-2xl italic font-medium text-foreground text-center">
                  "The best way to predict the future is to create it."
                </p>
                <footer className="mt-4 text-right text-sm text-muted-foreground w-full">- Peter Drucker</footer>
            </blockquote>
        )
    },
    {
        icon: Briefcase,
        title: "Work History",
        background: null,
        className: "col-span-12 lg:col-span-6",
        content: (
            <div className="space-y-4">
                {experiences.slice(0, 2).map((exp, i) => (
                    <div key={i}>
                        <h3 className="font-semibold text-foreground">{exp.title}</h3>
                        <p className="text-sm text-muted-foreground">{exp.description}</p>
                    </div>
                ))}
                <a href="#experience" className="inline-flex items-center text-sm font-semibold text-primary hover:underline">
                    View all experiences <ArrowRight className="ml-1 h-4 w-4" />
                </a>
            </div>
        )
    },
    {
        icon: Code,
        title: "Featured Project",
        background: <Image src="https://placehold.co/600x400.png" alt="Project background" layout="fill" objectFit="cover" className="absolute -z-10 opacity-30" data-ai-hint="code laptop" />,
        className: "col-span-12 lg:col-span-6",
        content: (
            <div className="space-y-2">
                <h3 className="font-semibold text-foreground">{projects[0].title}</h3>
                <p className="text-sm text-muted-foreground">{projects[0].description}</p>
                 <a href="#projects" className="inline-flex items-center text-sm font-semibold text-primary hover:underline">
                    Explore more projects <ArrowRight className="ml-1 h-4 w-4" />
                </a>
            </div>
        )
    }
];

const Section: FC<{ id: string; title: string; icon: React.ReactNode; children: React.ReactNode; className?: string }> = ({ id, title, icon, children, className }) => (
  <section id={id} className={`w-full max-w-5xl mx-auto py-12 md:py-20 px-4 md:px-0 ${className}`}>
    <div className="flex items-center gap-3 mb-8">
      <div className="flex items-center justify-center size-10 rounded-full bg-primary/20 text-primary">{icon}</div>
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
                    <Mail className="ml-2" />
                  </Button>
                </a>
            </div>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center animated-grid">
          <div className="z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tight text-foreground animate-fade-in-up">
              Ari Ardiansyah
            </h1>
            <p className="mt-4 text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
              Fullstack Developer / Backend Engineer
            </p>
            <p className="mt-2 text-md md:text-lg text-muted-foreground/80 max-w-2xl mx-auto animate-fade-in-up animation-delay-500">
              Crafting robust and scalable solutions with a passion for clean code.
            </p>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="w-full max-w-5xl mx-auto py-12 md:py-20 px-4 md:px-0">
             <BentoGrid>
                {bentoItems.map((item, i) => (
                    <BentoCard key={i} {...item} />
                ))}
            </BentoGrid>
        </section>
        
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
        <footer id="contact" className="bg-secondary/50">
          <Section id="contact-inner" title="Get In Touch" icon={<Mail size={24} />}>
            <p className="text-center text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision. Feel free to reach out.
            </p>
            <div className="flex justify-center items-center gap-6 flex-wrap">
                <a href="mailto:ari.ardiansyah.101@gmail.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="lg" className="h-14 px-6 text-lg bg-background/50 backdrop-blur-sm">
                        <Mail className="mr-3" /> Email
                    </Button>
                </a>
                <a href="https://www.linkedin.com/in/ari-ardiansyah101" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="lg" className="h-14 px-6 text-lg bg-background/50 backdrop-blur-sm">
                        <Linkedin className="mr-3" /> LinkedIn
                    </Button>
                </a>
                <a href="https://github.com/iAri" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="lg" className="h-14 px-6 text-lg bg-background/50 backdrop-blur-sm">
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
