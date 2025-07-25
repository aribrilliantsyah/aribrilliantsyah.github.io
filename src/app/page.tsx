'use client';

import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Github, Linkedin, Mail, ArrowUpRight, Code, GraduationCap, Briefcase, Heart, Quote, BrainCircuit, Database, Server, Layers, Smartphone, Bot } from 'lucide-react';
import Image from 'next/image';
import { Clock } from '@/components/clock';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';


const projects = [
    {
        title: 'Digdaya BPD DIY',
        description: 'Intermediary payment system for village finances.',
        tags: ['Spring Boot', 'Laravel', 'Kubernetes'],
        longDescription: "Developed an intermediary payment system that bridges village financial systems (Siskeudes Link) with BPD DIY bank's payment gateway. The system manages receipt payments and tax transactions efficiently.",
    },
    {
        title: 'Raharjo BPD DIY',
        description: 'QR-based non-cash social assistance application.',
        tags: ['Spring Boot', 'Kotlin'],
        longDescription: "Designed and implemented a QR-based non-cash social assistance distribution system integrated with BPD DIY Bank's virtual account system. This solution streamlined the distribution of social aid to beneficiaries.",
    },
    {
        title: 'Virtual Account System BPD DIY',
        description: 'Comprehensive virtual account management system.',
        tags: ['Kubernetes', 'Spring Boot', 'Laravel'],
        longDescription: "Led the development of a comprehensive virtual account management system for BPD DIY Bank, featuring virtual account creation, child account generation, disbursement, cash-pooling, and multi-channel payment gateway integration (ATM, Teller, EDC, M-Banking, etc.).",
    },
    {
        title: 'BINUS SCHOOL Entrance Test Platform',
        description: 'Online test platform for BINUS new student admissions.',
        tags: ['React.js', 'TypeScript', 'Vite'],
        longDescription: "Contributed to developing an online Potential Study Success Test (TPKS) platform for BINUS UNIVERSITY student admissions, ensuring a smooth and user-friendly testing experience.",
    },
    {
        title: 'Owapi',
        description: 'WhatsApp management system with bot and live agent.',
        tags: ['CodeIgniter', 'Node.js', 'Socket.io'],
        longDescription: "Developed a WhatsApp management system using the ValueFirst Business Platform API, featuring bulk messaging, chatbot functionality, live agent integration, and OTP message handling.",
    },
    {
      title: 'BPR Academy Perbarindo',
      description: 'Certification event management system for BPR members.',
      tags: ['Vue.js', 'Pinia', 'CodeIgniter'],
      longDescription: 'Built a complete certification event management system for Perbarindo BPR members, handling everything from learning materials to facilitator management.',
    },
    {
      title: 'Jeera Back Office',
      description: 'A complete back-office management system.',
      tags: ['CodeIgniter', 'jQuery'],
      longDescription: 'Created a complete back office management system including inventory management, supplier management, sales tracking, POS registration, income and expense tracking, and an integrated accounting system.',
    },
    {
      title: 'Sistem Informasi Perbarindo (SIP)',
      description: 'A comprehensive management information system.',
      tags: ['CodeIgniter'],
      longDescription: 'Developed a comprehensive management system including member management, a bandwidth sharing payment system with E-KTP Reader, event management, GCG report management, and BPR membership and certification management.',
    },
    {
      title: 'Harapan Amal Mulia',
      description: 'Donation website for a foundation.',
      tags: ['Laravel'],
      longDescription: 'Created a donation website integrated with a payment gateway and WhatsApp API for the Harapan Amal Mulia foundation.',
    },
    {
      title: 'Digital Web Branch - BPR Nusamba Cepiring',
      description: 'Web-based customer acquisition system.',
      tags: ['CodeIgniter'],
      longDescription: 'Developed a web-based customer acquisition system managing the entire process from initial application to Account Officer meetings and final customer registration.',
    },
    {
      title: 'Koperasi DIY',
      description: 'Cooperative management system.',
      tags: ['CodeIgniter'],
      longDescription: 'Developed a cooperative management system featuring member management, deposit and withdrawal processing, rental management, loan and savings management, and an integrated accounting module.',
    },
    {
      title: 'School Management and Payment System',
      description: 'Comprehensive school management system.',
      tags: ['CodeIgniter'],
      longDescription: 'Developed a comprehensive school management system with integrated accounting features.',
    },
];


const experiences = [
  {
      date: 'Jul 2023 - Present',
      title: 'Project Lead Developer',
      company: 'PT Digital Amore Kriyanesia',
  },
  {
      date: 'Apr 2020 - Dec 2023',
      title: 'Full Stack Developer',
      company: 'PT Digital Amore Kriyanesia',
  },
  {
      date: 'Jul 2019 - Dec 2020',
      title: 'Web Developer',
      company: 'PT Digital Amore Kriyanesia',
  },
  {
      date: 'Jun 2018 - Jul 2019',
      title: 'Junior Web Developer',
      company: 'VMT Software',
  },
  {
      date: 'Jul 2017 - Present',
      title: 'Freelance Software Engineer',
      company: 'Self-Employed',
  },
];

const education = [
    {
        date: '2018 - 2023',
        institution: 'Universitas Teknologi Bandung',
        degree: 'Bachelor of Informatics Engineering'
    },
    {
        date: '2015 - 2018',
        institution: 'SMK Assalaam Bandung',
        degree: 'Software Engineering'
    },
     {
        date: 'Feb - Jul 2022',
        institution: 'Binar Academy',
        degree: 'Backend Javascript Bootcamp'
    }
]

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ari-ardiansyah101' },
  { icon: Github, href: 'https://github.com/iAri' },
  { icon: Mail, href: 'mailto:ari.ardiansyah.101@gmail.com' },
];

const topSkills = [
    { icon: BrainCircuit, title: 'Backend', description: 'Spring Boot, Go, Node.js' },
    { icon: Code, title: 'Frontend', description: 'React, Next.js, Vue' },
    { icon: Database, title: 'Databases', description: 'MySQL, PostgreSQL, Redis' },
    { icon: Server, title: 'DevOps', description: 'Kubernetes, Docker, CI/CD' },
    { icon: Layers, title: 'Full Stack', description: 'End-to-end development' },
    { icon: Smartphone, title: 'Mobile', description: 'Java Android, Flutter' },
];

const GridCard: FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <Card className={cn("p-4 md:p-6 border border-border/50 rounded-lg flex flex-col shadow-sm", className)}>
        {children}
    </Card>
);

const SectionTitle: FC<{title: string}> = ({title}) => (
    <h2 className="text-sm font-normal text-muted-foreground mb-4">{title}</h2>
)


export default function CodeFolioPage() {
    const [time, setTime] = useState<Date | null>(null);
    const [yearsOfExperience, setYearsOfExperience] = useState<string>('0');

    useEffect(() => {
        const timerId = setInterval(() => setTime(new Date()), 1000);

        const startDate = new Date(2017, 6, 1); // July 2017
        const currentDate = new Date();
        const diff = (currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
        setYearsOfExperience(Math.floor(diff).toString());
        
        return () => clearInterval(timerId);
    }, []);

  return (
    <div className="bg-background min-h-screen text-foreground">
      <div className="max-w-screen-xl mx-auto p-4 md:p-8">
        <header className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
                <Image src="https://placehold.co/40x40.png" alt="Ari Ardiansyah" width={40} height={40} className="rounded-full" data-ai-hint="profile picture" />
                <h1 className="text-xl font-bold font-headline">Ari Ardiansyah</h1>
            </div>
            <a href="mailto:ari.ardiansyah.101@gmail.com">
                <Button variant="outline">
                    Let's Talk <ArrowUpRight className="ml-2" />
                </Button>
            </a>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <GridCard className="lg:col-span-2">
                <SectionTitle title="About"/>
                 <p className="text-sm text-foreground/90">
                    With over 7 years of dedicated experience in the IT industry, I am a results-oriented developer with a proven career track record, advancing from a Junior Developer to a Project Lead. I specialize in building robust and scalable applications, leveraging modern technologies like Spring Boot, Kubernetes, and Go. My journey reflects a commitment to continuous learning, collaboration, and delivering high-quality digital solutions.
                </p>
            </GridCard>
            
            <GridCard className="lg:col-span-2 row-span-2">
                <SectionTitle title="Projects"/>
                 <ScrollArea className="h-[260px] pr-3 -mr-3">
                    <div className="space-y-3">
                        {projects.map((project, i) => (
                             <Dialog key={i}>
                                <DialogTrigger asChild>
                                    <div className="flex items-center gap-4 cursor-pointer group p-2 rounded-md hover:bg-secondary transition-colors">
                                        <div className="size-10 rounded-md bg-muted flex items-center justify-center text-muted-foreground">
                                            <Code size={18}/>
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="font-medium text-sm text-foreground">{project.title}</h3>
                                            <p className="text-xs text-muted-foreground">{project.description}</p>
                                        </div>
                                    </div>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-lg">
                                    <DialogHeader>
                                        <DialogTitle>{project.title}</DialogTitle>
                                        <DialogDescription>{project.description}</DialogDescription>
                                    </DialogHeader>
                                    <p className="text-sm text-muted-foreground py-4">{project.longDescription}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                                    </div>
                                </DialogContent>
                            </Dialog>
                        ))}
                    </div>
                 </ScrollArea>
            </GridCard>

             <GridCard className="col-span-1 lg:col-span-2 row-span-3">
                 <div className="relative w-full h-full rounded-md overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1611638281871-1063d3e76e1f?q=80&w=1964"
                        alt="Portfolio image"
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint="city night"
                    />
                 </div>
            </GridCard>
            
            <GridCard>
                 <SectionTitle title="Time"/>
                 <div className="flex items-center justify-center h-full">
                    {time ? (
                        <div className="flex items-center gap-3">
                            <Clock time={time} className="size-12" />
                            <div>
                                <p className="text-xl font-semibold">{time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}</p>
                                <p className="text-xs text-muted-foreground">Bandung, ID</p>
                            </div>
                        </div>
                    ) : (
                         <div className="flex items-center gap-3">
                            <div className="size-12 rounded-full bg-secondary animate-pulse" />
                            <div>
                                <div className="h-6 w-16 bg-secondary rounded-md animate-pulse" />
                                <div className="h-4 w-20 bg-secondary rounded-md mt-1 animate-pulse" />
                            </div>
                        </div>
                    )}
                </div>
            </GridCard>

            <GridCard>
                 <SectionTitle title="Social Media"/>
                 <div className="flex items-center justify-center h-full gap-2">
                    {socialLinks.map((link, i) => (
                        <a key={i} href={link.href} target="_blank" rel="noopener noreferrer" className="flex-1">
                            <Button variant="outline" size="icon" className="w-full h-12 rounded-full">
                                <link.icon size={16}/>
                            </Button>
                        </a>
                    ))}
                 </div>
            </GridCard>

            <GridCard className="col-span-1 lg:col-span-2 row-span-2">
                <SectionTitle title="Experience"/>
                <ScrollArea className="h-[260px] pr-3 -mr-3">
                    <div className="space-y-6">
                        <div className="relative space-y-6 before:absolute before:inset-y-0 before:w-0.5 before:bg-border before:left-5">
                            {experiences.map((exp, i) => (
                                <div key={i} className="flex items-start gap-6 pl-12 relative">
                                    <div className="absolute left-0 top-0.5 mt-px size-10 rounded-full bg-secondary flex items-center justify-center border">
                                       <Briefcase size={18} className="text-muted-foreground"/>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-xs text-muted-foreground">{exp.date}</p>
                                        <p className="text-sm font-medium">{exp.title}</p>
                                        <p className="text-xs text-muted-foreground">{exp.company}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollArea>
            </GridCard>
            
            <GridCard>
                 <div className="flex flex-col items-center justify-center h-full text-center">
                    <p className="text-6xl font-bold text-foreground">{yearsOfExperience}+</p>
                    <p className="text-xs text-muted-foreground mt-1">Years of professional experience</p>
                 </div>
            </GridCard>
            
            <GridCard>
                 <div className="flex flex-col items-center justify-center h-full text-center">
                    <Quote className="size-8 text-muted-foreground mb-2" />
                    <p className="text-sm italic text-foreground/80">"Stay hungry, stay foolish."</p>
                    <p className="text-xs text-muted-foreground mt-2">- Steve Jobs</p>
                 </div>
            </GridCard>

             <GridCard className="lg:col-span-2">
                 <SectionTitle title="Top Skills"/>
                 <div className="grid grid-cols-3 gap-4 h-full content-center">
                    {topSkills.map((skill, i) => (
                        <div key={i} className="flex flex-col items-center justify-center text-center gap-2 p-2 rounded-md bg-secondary/50">
                            <div className="size-10 rounded-md bg-muted flex items-center justify-center text-muted-foreground flex-shrink-0">
                                <skill.icon size={20}/>
                            </div>
                            <div className="flex flex-col items-center">
                                <h3 className="font-medium text-sm text-foreground">{skill.title}</h3>
                                <p className="text-xs text-muted-foreground">{skill.description}</p>
                            </div>
                        </div>
                    ))}
                 </div>
            </GridCard>

             <GridCard className="lg:col-span-2">
                <SectionTitle title="Education"/>
                 <ScrollArea className="h-full pr-3 -mr-3">
                    <div className="space-y-4">
                        {education.map((edu, i) => (
                             <div key={i} className="flex items-start gap-4">
                                <div className="size-10 rounded-full bg-secondary flex items-center justify-center border flex-shrink-0">
                                     <GraduationCap size={18} className="text-muted-foreground"/>
                                </div>
                                <div>
                                    <p className="text-sm font-medium">{edu.institution}</p>
                                    <p className="text-xs text-muted-foreground">{edu.degree}</p>
                                    <p className="text-xs text-muted-foreground">{edu.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </GridCard>
        </main>
        
        <footer className="flex justify-between items-center mt-8 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ari Ardiansyah.</p>
          <div className="flex items-center gap-1">
            <p>Crafted with</p>
            <Heart size={14} className="text-red-500" />
          </div>
        </footer>
      </div>
    </div>
  );
}

    