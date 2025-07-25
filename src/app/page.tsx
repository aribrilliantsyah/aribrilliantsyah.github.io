'use client';

import { useState } from 'react';
import type { FC } from 'react';
import { Button } from '@/components/ui/button';
import { InfoCard } from '@/components/info-card';
import { DetailDialog } from '@/components/detail-dialog';
import { BentoCard, BentoGrid } from '@/components/bento-grid';
import { Github, Linkedin, Mail, User, Code, Briefcase, Lightbulb, ExternalLink, ArrowRight, Award } from 'lucide-react';
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
    title: 'Enterprise Application with Spring Boot',
    description: 'Developing scalable and robust enterprise-level applications.',
    tags: ['Spring Boot', 'Java', 'Microservices', 'API Design'],
    longDescription:
      'Led the design and development of enterprise applications using Spring Boot. Focused on creating scalable microservices architecture, ensuring high performance, and maintaining robust security protocols. Responsible for the full development lifecycle, from conception to deployment.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'api code',
    link: 'https://github.com/iAri'
  },
  {
    title: 'Kubernetes Container Orchestration',
    description: 'Managing and scaling containerized applications with Kubernetes.',
    tags: ['Kubernetes', 'DevOps', 'Go', 'Containerization', 'CI/CD'],
    longDescription:
      'Implemented and managed container orchestration using Kubernetes for various projects. Focused on automating deployment, scaling, and operations of application containers across clusters of hosts. Improved system reliability and deployment efficiency significantly.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'kubernetes server',
  },
  {
    title: 'Backend Development with Go',
    description: 'Building high-performance backend services using Go.',
    tags: ['Go', 'Backend', 'Performance', 'API'],
    longDescription:
      'Developed high-performance backend services and APIs using the Go programming language. Leveraged Go\'s concurrency model to build efficient, scalable, and easy-to-maintain systems for high-traffic applications.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'modern code',
    link: 'https://github.com/iAri'
  },
];

const experiences: Detail[] = [
    {
        title: 'Project Lead Developer',
        description: 'PT Digital Amore Kriyanesia | Jul 2023 - Present',
        tags: ['Project Management', 'System Architecture', 'Team Leadership', 'Agile'],
        longDescription: 'Managed the entire project lifecycle, from analyzing business flows and data structures to leading the development team. Successfully delivered high-quality projects on time by fostering a collaborative and innovative work environment.',
        image: 'https://placehold.co/600x400.png',
        imageHint: 'team meeting',
    },
    {
        title: 'Full Stack Developer',
        description: 'PT Digital Amore Kriyanesia | Apr 2020 - Dec 2023',
        tags: ['Full Stack', 'RESTful API', 'Database Design', 'Web', 'Mobile'],
        longDescription: 'Developed comprehensive solutions across desktop, web, and mobile platforms. Designed RESTful API services and database structures, integrating various technologies to create seamless and complete applications.',
        image: 'https://placehold.co/600x400.png',
        imageHint: 'developer desk',
    },
    {
        title: 'Web Developer',
        description: 'PT Digital Amore Kriyanesia | Jul 2019 - Dec 2020',
        tags: ['Web Development', 'CMS', 'Frontend', 'Backend'],
        longDescription: 'Created custom management systems tailored to organizational needs. Developed intuitive user interfaces and implemented efficient backend functionalities to ensure a smooth user experience.',
        image: 'https://placehold.co/600x400.png',
        imageHint: 'website code',
    },
     {
        title: 'Freelance Software Engineer',
        description: 'Self-Employed | Jul 2017 - Present',
        tags: ['Freelance', 'Software Engineering', 'Web Development'],
        longDescription: 'Provided freelance software engineering and web development services to various clients. Successfully delivered projects ranging from custom web applications to system integrations, demonstrating versatility and a commitment to quality.',
        image: 'https://placehold.co/600x400.png',
        imageHint: 'home office',
    },
];

const certifications = [
    { name: 'JavaScript Dasar' },
    { name: 'Unix Command Line Dasar' },
    { name: 'Project Management Associate' },
    { name: 'Web 101' },
    { name: 'Git & Github Dasar' },
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
                    With over 5 years in IT, I am a dedicated and results-driven developer with a solid track record of career progression from a Junior Developer to a Project Lead. My loyalty and adaptability are demonstrated by my 6-year tenure at PT Digital Amore Kriyanesia.
                </p>
                <p>
                    I thrive on solving complex problems and building efficient, user-friendly applications using modern technologies like Go, Spring Boot, and Kubernetes.
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
        title: "Featured Skill: Go",
        background: <Image src="https://placehold.co/600x400.png" alt="Project background" layout="fill" objectFit="cover" className="absolute -z-10 opacity-30" data-ai-hint="code laptop" />,
        className: "col-span-12 lg:col-span-6",
        content: (
            <div className="space-y-2">
                <h3 className="font-semibold text-foreground">High-Performance Backend</h3>
                <p className="text-sm text-muted-foreground">Building fast, scalable, and concurrent systems with the power of Go. Ideal for modern backend development and microservices.</p>
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
    <div className="bg-background min-h-screen text-text-light dark:text-text-dark">
      <header className="fixed top-0 left-0 right-0 z-50 bg-bg-light/80 dark:bg-bg-dark/80 backdrop-blur-sm">
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
            <p className="mt-4 text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
              Project Lead Developer | Full Stack Developer
            </p>
            <p className="mt-2 text-md md:text-lg text-muted-foreground/80 max-w-3xl mx-auto animate-fade-in-up animation-delay-500">
              Crafting scalable and innovative solutions with modern technologies like Go, Spring Boot, and Kubernetes.
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
        <Section id="projects" title="Projects & Expertise" icon={<Code size={24} />}>
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
        
         {/* Certifications Section */}
        <Section id="certifications" title="Certifications" icon={<Award size={24} />}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
                {certifications.map((cert, index) => (
                    <div key={index} className="bg-card p-4 rounded-lg shadow-md flex items-center justify-center">
                        <p className="font-medium text-foreground">{cert.name}</p>
                    </div>
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
