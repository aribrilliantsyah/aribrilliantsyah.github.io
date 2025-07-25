'use client';

import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Github, Linkedin, Mail, ArrowUpRight, Briefcase, Code, User, GraduationCap } from 'lucide-react';
import Image from 'next/image';
import { Clock } from '@/components/clock';
import { cn } from '@/lib/utils';

const projects = [
  {
      icon: 'https://placehold.co/40x40.png',
      imageHint: 'code screen',
      title: 'Digdaya BPD DIY',
      description: 'Intermediary payment system for village finances using Spring Boot & Kubernetes.',
  },
  {
      icon: 'https://placehold.co/40x40.png',
      imageHint: 'qr code',
      title: 'Raharjo BPD DIY',
      description: 'QR-based social assistance distribution system with Kotlin.',
  },
  {
      icon: 'https://placehold.co/40x40.png',
      imageHint: 'bank account',
      title: 'Virtual Account System BPD DIY',
      description: 'Comprehensive virtual account management system.',
  },
  {
      icon: 'https://placehold.co/40x40.png',
      imageHint: 'online test',
      title: 'BINUS SCHOOL Test Platform',
      description: 'Online Potential Study Success Test (TPKS) platform with React.js.',
  },
  {
      icon: 'https://placehold.co/40x40.png',
      imageHint: 'chat bubbles',
      title: 'Owapi',
      description: 'WhatsApp management system with bots and live agents.',
  },
];

const experiences = [
  {
      date: '2023 - Now',
      title: 'Project Lead Developer',
      company: 'PT Digital Amore Kriyanesia',
      description: 'Managing project lifecycle, analyzing business flows, and leading the development team.',
  },
  {
      date: '2020 - 2023',
      title: 'Full Stack Developer',
      company: 'PT Digital Amore Kriyanesia',
      description: 'Developed desktop, web, and mobile apps. Designed RESTful APIs and database structures.',
  },
  {
      date: '2019 - 2020',
      title: 'Web Developer',
      company: 'PT Digital Amore Kriyanesia',
      description: 'Created custom management systems with intuitive UIs and efficient backends.',
  },
  {
      date: '2017 - Now',
      title: 'Freelance Software Engineer',
      company: 'Self-Employed',
      description: 'Providing software engineering and web development services to various clients.',
  },
  {
      date: '2018 - 2019',
      title: 'Junior Web Developer',
      company: 'VMT Software',
      description: 'Gained foundational experience in web technologies and contributed to various projects.',
  },
];

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ari-ardiansyah101' },
  { icon: Github, href: 'https://github.com/iAri' },
  { icon: Mail, href: 'mailto:ari.ardiansyah.101@gmail.com' },
];

const GridCard: FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <Card className={cn('p-6 shadow-sm hover:shadow-md transition-shadow', className)}>
    {children}
  </Card>
);

const SectionTitle: FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-sm font-semibold text-muted-foreground mb-4">{children}</h2>
);


export default function CodeFolioPage() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 60 * 1000);
        return () => {
            clearInterval(timer);
        }
    }, []);

  return (
    <div className="bg-background min-h-screen text-foreground font-body">
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Image
              src="https://placehold.co/56x56.png"
              alt="Ari Ardiansyah"
              width={56}
              height={56}
              className="rounded-full"
              data-ai-hint="profile picture"
            />
            <div>
              <h1 className="text-2xl font-bold font-headline">Ari Ardiansyah</h1>
              <p className="text-muted-foreground">Project Lead & Full Stack Developer</p>
            </div>
          </div>
          <a href="mailto:ari.ardiansyah.101@gmail.com">
            <Button variant="outline">
              Contact Me <ArrowUpRight className="ml-2" />
            </Button>
          </a>
        </header>

        {/* Main Grid */}
        <main className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          <GridCard className="md:col-span-2 lg:col-span-2">
            <SectionTitle>About</SectionTitle>
            <p className="text-foreground/90">
                With over 5 years in IT, I am a dedicated and results-driven developer with a solid track record of career progression from a Junior Developer to a Project Lead. I thrive on solving complex problems and building efficient, user-friendly applications using modern technologies like Go, Spring Boot, and Kubernetes.
            </p>
          </GridCard>

          <GridCard className="md:col-span-1 lg:col-span-2">
            <SectionTitle>Projects</SectionTitle>
            <div className="space-y-4">
              {projects.slice(0, 4).map((project, i) => (
                <div key={i} className="flex items-center gap-4">
                  <Image src={project.icon} alt={project.title} width={40} height={40} className="rounded-md bg-secondary p-1" data-ai-hint={project.imageHint}/>
                  <div>
                    <h3 className="font-semibold text-foreground">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </GridCard>
          
          <GridCard className="md:col-span-1 lg:col-span-1">
            <SectionTitle>Time</SectionTitle>
            <div className="flex items-center gap-4">
                <Clock />
                <div>
                  <p className="text-2xl font-semibold">{time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}</p>
                  <p className="text-muted-foreground">in Bandung, ID</p>
                </div>
            </div>
          </GridCard>

          <GridCard className="md:col-span-2 lg:col-span-1">
            <SectionTitle>Mode</SectionTitle>
             <div className="flex flex-col h-full justify-center">
                 <p className="text-foreground">Design × Open Source</p>
                <p className="text-muted-foreground text-sm">Creating solutions for the community. Let's collaborate!</p>
             </div>
          </GridCard>
          
          <GridCard className="row-span-2 md:col-span-2 lg:col-span-2">
            <SectionTitle>Experience & Education</SectionTitle>
            <ScrollArea className="h-[300px] pr-4">
              <div className="relative border-l-2 border-border/50 ml-2">
                {experiences.map((exp, i) => (
                  <div key={i} className="mb-6 pl-8 relative">
                    <div className="absolute -left-[11px] top-1.5 size-5 bg-primary rounded-full border-4 border-card"></div>
                    <p className="text-sm text-muted-foreground">{exp.date}</p>
                    <h3 className="font-semibold text-foreground">{exp.title}</h3>
                    <p className="text-sm text-foreground/80">{exp.company}</p>
                  </div>
                ))}
                 <div className="mb-6 pl-8 relative">
                    <div className="absolute -left-[11px] top-1.5 size-5 bg-primary rounded-full border-4 border-card"></div>
                     <p className="text-sm text-muted-foreground">2018 - 2023</p>
                    <h3 className="font-semibold text-foreground">Universitas Teknologi Bandung</h3>
                    <p className="text-sm text-foreground/80">Bachelor of Engineering - BE, Informatics Engineering</p>
                  </div>
              </div>
            </ScrollArea>
          </GridCard>
          
          <GridCard className="md:col-span-3 lg:col-span-2">
            <SectionTitle>Social Media</SectionTitle>
            <div className="flex items-center justify-around h-full">
              {socialLinks.map((link, i) => (
                <a key={i} href={link.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  <link.icon size={32} />
                </a>
              ))}
            </div>
          </GridCard>

          <GridCard>
             <SectionTitle>Years of Experience</SectionTitle>
             <p className="text-6xl font-bold text-center text-primary">6+</p>
          </GridCard>
          
          <GridCard>
             <SectionTitle>Quote</SectionTitle>
             <blockquote className="text-sm italic text-foreground/90 h-full flex items-center justify-center text-center">
                &quot;The best way to predict the future is to create it.&quot;
             </blockquote>
          </GridCard>

        </main>
        
        <footer className="text-center mt-12 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ari Ardiansyah. Crafted with Passion.</p>
        </footer>
      </div>
    </div>
  );
}
