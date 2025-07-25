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
        title: 'Digdaya BPD DIY',
        description: 'Intermediary payment system for village finances.',
        tags: ['Spring Boot', 'Laravel', 'Kubernetes'],
        longDescription: 'Developed an intermediary payment system that bridges village financial systems (Siskeudes Link) with BPD DIY bank\'s payment gateway. The system manages receipt payments and tax transactions efficiently.',
        image: 'https://placehold.co/600x400.png',
        imageHint: 'financial system',
    },
    {
        title: 'Raharjo BPD DIY (Aplikasi Bansos Non-Tunai)',
        description: 'QR-based social assistance distribution system.',
        tags: ['Spring Boot', 'Kotlin'],
        longDescription: 'Designed and implemented a QR-based non-cash social assistance distribution system integrated with BPD DIY Bank\'s virtual account system. This solution streamlined the distribution of social aid to beneficiaries.',
        image: 'https://placehold.co/600x400.png',
        imageHint: 'mobile banking',
    },
    {
        title: 'Virtual Account System BPD DIY',
        description: 'Comprehensive virtual account management system.',
        tags: ['Kubernetes', 'Spring Boot', 'Laravel'],
        longDescription: 'Led the development of a comprehensive virtual account management system for BPD DIY Bank featuring: Virtual account creation and management, child account generation, disbursement and cashpooling capabilities, payment gateway integration, and multi-channel integration (ATM, Teller, EDC, M-Banking, Internet Banking, CMS).',
        image: 'https://placehold.co/600x400.png',
        imageHint: 'digital account',
    },
    {
        title: 'BINUS SCHOOL Entrance Test Platform',
        description: 'Online Potential Study Success Test (TPKS) platform.',
        tags: ['React.js', 'TypeScript', 'Vite'],
        longDescription: 'Contributed to developing an online Potential Study Success Test (TPKS) platform for BINUS UNIVERSITY student admissions, ensuring a smooth and user-friendly testing experience.',
        image: 'https://placehold.co/600x400.png',
        imageHint: 'online education',
    },
    {
        title: 'Owapi',
        description: 'WhatsApp management system with bots and live agents.',
        tags: ['CodeIgniter', 'Node.js', 'Socket.io'],
        longDescription: 'Developed a WhatsApp management system implementing ValueFirst\'s WhatsApp Business Platform API, featuring: Bulk messaging, chatbot functionality, live agent integration, and OTP message handling.',
        image: 'https://placehold.co/600x400.png',
        imageHint: 'chat application',
    },
    {
        title: 'BPR Academy Perbarindo',
        description: 'Certification event management for Perbarindo BPR.',
        tags: ['Vue.js', 'Pinia', 'CodeIgniter'],
        longDescription: 'Built a complete certification event management system for Perbarindo BPR members, handling everything from learning materials to facilitator management.',
        image: 'https://placehold.co/600x400.png',
        imageHint: 'online learning',
    },
    {
        title: 'Jeera Back Office',
        description: 'Complete back-office management system.',
        tags: ['CodeIgniter', 'jQuery'],
        longDescription: 'Created a complete back office management system including: Inventory management, supplier management, sales tracking, POS registration, income and expense tracking, and an integrated accounting system.',
        image: 'https://placehold.co/600x400.png',
        imageHint: 'business dashboard',
    },
    {
        title: 'Sistem Informasi Perbarindo (SIP)',
        description: 'Comprehensive management system for Perbarindo.',
        tags: ['CodeIgniter'],
        longDescription: 'Developed a comprehensive management system including: Member management, Bandwidth Sharing payment system with E-KTP Reader, event management (including National Working Meeting), GCG report management, and BPR membership and certification management.',
        image: 'https://placehold.co/600x400.png',
        imageHint: 'management system',
    },
    {
        title: 'Harapan Amal Mulia',
        description: 'Donation website with payment gateway integration.',
        tags: ['Laravel'],
        longDescription: 'Created a donation website integrated with payment gateway and WhatsApp API for Harapan Amal Mulia foundation.',
        image: 'https://placehold.co/600x400.png',
        imageHint: 'charity donation',
    },
    {
        title: 'Digital Web Branch - BPR Nusamba Cepiring',
        description: 'Web-based customer acquisition system.',
        tags: ['CodeIgniter'],
        longDescription: 'Developed a web-based customer acquisition system managing the entire process from initial application to Account Officer meetings and final customer registration.',
        image: 'https://placehold.co/600x400.png',
        imageHint: 'customer acquisition',
    },
    {
        title: 'Koperasi DIY',
        description: 'Cooperative management system.',
        tags: ['CodeIgniter'],
        longDescription: 'Sistem koperasi management system featuring: Member management, deposit and withdrawal processing, rental management, loan and savings management, and an integrated accounting module.',
        image: 'https://placehold.co/600x400.png',
        imageHint: 'cooperative system',
    },
    {
        title: 'School Management and Payment System',
        description: 'School management system with accounting.',
        tags: ['CodeIgniter'],
        longDescription: 'Developed a comprehensive school management system with integrated accounting features.',
        image: 'https://placehold.co/600x400.png',
        imageHint: 'school system',
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
        longDescription: 'Provided freelance software engineering and web development services to various clients, including a Web Developer role at Akeno Multimedia Solution (Oct 2020 - Feb 2023). Successfully delivered projects ranging from custom web applications to system integrations, demonstrating versatility and a commitment to quality.',
        image: 'https://placehold.co/600x400.png',
        imageHint: 'home office',
    },
    {
        title: 'Junior Web Developer',
        description: 'VMT Software | Jun 2018 - Jul 2019',
        tags: ['Web Development', 'Junior Developer'],
        longDescription: 'Started my professional journey as a Junior Web Developer, gaining foundational experience in web technologies and contributing to various projects.',
        image: 'https://placehold.co/600x400.png',
        imageHint: 'learning code',
    },
];

const certifications = [
    { name: 'CSS Dasar' },
    { name: 'Git & Github Dasar' },
    { name: 'HTML Dasar' },
    { name: 'Intro to Coding' },
    { name: 'JavaScript Dasar' },
    { name: 'JavaScript Intermediate' },
    { name: 'React Dasar' },
    { name: 'TypeScript Dasar' },
    { name: 'Unix Command Line Dasar' },
    { name: 'Web 101' },
    { name: 'Golang Backend Development' },
    { name: 'Golang Fudamental' },
    { name: 'Backend Javascript' },
    { name: 'Project Management Associate' },
    { name: 'Android Development Associate' },
    { name: 'Memulai Pemrograman dengan Dart' },
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
    <div className="bg-background min-h-screen text-foreground">
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
