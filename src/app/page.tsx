'use client';

import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Github, Linkedin, Mail, ArrowUpRight, Code, GraduationCap, CheckCircle, Briefcase, Star } from 'lucide-react';
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
    description: 'Sistem pembayaran perantara untuk keuangan desa.',
    tags: ['Spring Boot', 'Laravel', 'Kubernetes'],
    longDescription: "Mengembangkan sistem pembayaran perantara yang menjembatani sistem keuangan desa (Siskeudes Link) dengan payment gateway bank BPD DIY. Sistem ini mengelola pembayaran kuitansi dan transaksi pajak secara efisien.",
  },
  {
    title: 'Raharjo BPD DIY',
    description: 'Aplikasi distribusi bantuan sosial non-tunai berbasis QR.',
    tags: ['Spring Boot', 'Kotlin'],
    longDescription: "Merancang dan mengimplementasikan sistem distribusi bantuan sosial non-tunai berbasis QR yang terintegrasi dengan sistem virtual account Bank BPD DIY. Solusi ini menyederhanakan penyaluran bantuan sosial kepada penerima manfaat.",
  },
  {
    title: 'Virtual Account System BPD DIY',
    description: 'Sistem manajemen virtual account yang komprehensif.',
    tags: ['Kubernetes', 'Spring Boot', 'Laravel'],
    longDescription: "Memimpin pengembangan sistem manajemen virtual account yang komprehensif untuk Bank BPD DIY yang meliputi: pembuatan dan pengelolaan virtual account, pembuatan child account, kapabilitas pencairan dan cashpooling, integrasi payment gateway, dan integrasi multi-channel (ATM, Teller, EDC, M-Banking, Internet Banking, CMS).",
  },
  {
    title: 'BINUS SCHOOL Entrance Test Platform',
    description: 'Platform tes online untuk penerimaan mahasiswa baru BINUS.',
    tags: ['React.js', 'TypeScript', 'Vite'],
    longDescription: "Berkontribusi dalam pengembangan platform online Tes Potensi Keberhasilan Studi (TPKS) untuk penerimaan mahasiswa baru BINUS UNIVERSITY, memastikan pengalaman tes yang lancar dan ramah pengguna.",
  },
  {
    title: 'Owapi',
    description: 'Sistem manajemen WhatsApp dengan bot dan live agent.',
    tags: ['CodeIgniter', 'Node.js', 'Socket.io'],
    longDescription: "Mengembangkan sistem manajemen WhatsApp yang mengimplementasikan API WhatsApp Business Platform dari ValueFirst, dengan fitur: pengiriman pesan massal, fungsionalitas chatbot, integrasi live agent, dan penanganan pesan OTP.",
  },
  {
    title: 'BPR Academy Perbarindo',
    description: 'Sistem manajemen acara sertifikasi untuk anggota BPR.',
    tags: ['Vue.js', 'Pinia', 'CodeIgniter'],
    longDescription: "Membangun sistem manajemen acara sertifikasi lengkap untuk anggota BPR Perbarindo, menangani segala hal mulai dari materi pembelajaran hingga manajemen fasilitator.",
  },
  {
    title: 'Jeera Back Office',
    description: 'Sistem manajemen back-office lengkap untuk bisnis.',
    tags: ['CodeIgniter', 'jQuery'],
    longDescription: "Menciptakan sistem manajemen back office lengkap yang mencakup: manajemen inventaris, manajemen pemasok, pelacakan penjualan, pendaftaran POS, pelacakan pendapatan dan pengeluaran, serta sistem akuntansi terintegrasi.",
  },
  {
    title: 'Sistem Informasi Perbarindo (SIP)',
    description: 'Sistem manajemen komprehensif untuk Perbarindo.',
    tags: ['CodeIgniter'],
    longDescription: "Mengembangkan sistem manajemen komprehensif yang meliputi: manajemen anggota, sistem pembayaran Bandwidth Sharing dengan E-KTP Reader, manajemen acara (termasuk Rapat Kerja Nasional), manajemen laporan GCG, serta manajemen keanggotaan dan sertifikasi BPR.",
  },
  {
    title: 'Harapan Amal Mulia',
    description: 'Website donasi dengan payment gateway dan integrasi WhatsApp.',
    tags: ['Laravel'],
    longDescription: "Membuat website donasi yang terintegrasi dengan payment gateway dan API WhatsApp untuk yayasan Harapan Amal Mulia.",
  },
  {
    title: 'Digital Web Branch - BPR Nusamba Cepiring',
    description: 'Sistem akuisisi nasabah berbasis web.',
    tags: ['CodeIgniter'],
    longDescription: "Mengembangkan sistem akuisisi nasabah berbasis web yang mengelola seluruh proses dari aplikasi awal hingga pertemuan dengan Account Officer dan pendaftaran nasabah akhir.",
  },
  {
    title: 'Koperasi DIY',
    description: 'Sistem manajemen koperasi dengan modul akuntansi.',
    tags: ['CodeIgniter'],
    longDescription: "Sistem manajemen koperasi yang dilengkapi dengan fitur: manajemen anggota, proses simpan pinjam, manajemen persewaan, manajemen pinjaman dan tabungan, serta modul akuntansi terintegrasi.",
  },
  {
    title: 'School Management and Payment System',
    description: 'Sistem manajemen sekolah dengan fitur akuntansi terintegrasi.',
    tags: ['CodeIgniter'],
    longDescription: "Mengembangkan sistem manajemen sekolah yang komprehensif dengan fitur akuntansi terintegrasi.",
  }
];


const experiences = [
  {
      date: 'Juli 2023 - Sekarang',
      title: 'Project Lead Developer',
      company: 'PT Digital Amore Kriyanesia',
  },
  {
      date: 'Apr 2020 - Des 2023',
      title: 'Full Stack Developer',
      company: 'PT Digital Amore Kriyanesia',
  },
  {
      date: 'Jul 2019 - Des 2020',
      title: 'Web Developer',
      company: 'PT Digital Amore Kriyanesia',
  },
  {
      date: 'Jul 2017 - Sekarang',
      title: 'Freelance Software Engineer',
      company: 'Self-Employed',
  },
  {
      date: 'Jun 2018 - Jul 2019',
      title: 'Junior Web Developer',
      company: 'VMT Software',
  },
];

const education = [
    {
        date: '2018 - 2023',
        institution: 'Universitas Teknologi Bandung',
        degree: 'Sarjana Teknik Informatika'
    },
    {
        date: '2015 - 2018',
        institution: 'SMK Assalaam Bandung',
        degree: 'Rekayasa Perangkat Lunak'
    },
     {
        date: 'Feb - Jul 2022',
        institution: 'Binar Academy',
        degree: 'Backend Javascript Bootcamp'
    }
]

const certifications = [
  { title: 'CSS Dasar', issuer: 'Skilvul' },
  { title: 'Git & Github Dasar', issuer: 'Skilvul' },
  { title: 'HTML Dasar', issuer: 'Skilvul' },
  { title: 'Intro to Coding', issuer: 'Skilvul' },
  { title: 'JavaScript Dasar', issuer: 'Skilvul' },
  { title: 'JavaScript Intermediate', issuer: 'Skilvul' },
  { title: 'React Dasar', issuer: 'Skilvul' },
  { title: 'TypeScript Dasar', issuer: 'Skilvul' },
  { title: 'Unix Command Line Dasar', issuer: 'Skilvul' },
  { title: 'Web 101', issuer: 'Skilvul' },
  { title: 'Golang Backend Development', issuer: 'SanberCode' },
  { title: 'Golang Fudamental', issuer: 'BuildWithAngga' },
  { title: 'Backend Javascript', issuer: 'Binar Academy' },
  { title: 'Project Management Associate', issuer: 'Logical Operations' },
  { title: 'Android Development Associate', issuer: 'Logical Operations' },
  { title: 'Memulai Pemrograman dengan Dart', issuer: 'Dicoding Academy' },
];

const topSkills = ['Spring Boot', 'Kubernetes', 'Go', 'React.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Laravel'];

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ari-ardiansyah101', name: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/iAri', name: 'GitHub' },
  { icon: Mail, href: 'mailto:ari.ardiansyah.101@gmail.com', name: 'Email' },
];

const GridCard: FC<{ children: React.ReactNode; className?: string, title?: string, icon?: React.ElementType }> = ({ children, className, title, icon: Icon }) => (
  <Card className={cn('p-6 shadow-sm flex flex-col', className)}>
    {title && (
        <div className="flex items-center gap-2 mb-4">
            {Icon && <Icon className="text-muted-foreground" size={18} />}
            <h2 className="text-sm font-semibold text-muted-foreground">{title}</h2>
        </div>
    )}
    <div className="flex-grow">
        {children}
    </div>
  </Card>
);


export default function CodeFolioPage() {
    const [time, setTime] = useState<Date | null>(null);

    useEffect(() => {
        const update = () => setTime(new Date());
        update();
        const timer = setInterval(update, 1000); // Update every second for the clock
        return () => clearInterval(timer);
    }, []);

  return (
    <div className="bg-background min-h-screen text-foreground font-body">
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          
          <GridCard className="lg:col-span-4 md:col-span-2">
            <div className="flex items-center gap-4">
                <Image
                src="https://placehold.co/80x80.png"
                alt="Ari Ardiansyah"
                width={80}
                height={80}
                className="rounded-full border-2 border-primary"
                data-ai-hint="profile picture"
                />
                <div>
                <h1 className="text-2xl md:text-3xl font-bold font-headline">Ari Ardiansyah</h1>
                <p className="text-muted-foreground">Project Lead & Full Stack Developer</p>
                </div>
            </div>
             <p className="text-foreground/90 mt-4">
                Dengan pengalaman lebih dari 5 tahun di bidang IT, saya adalah seorang developer yang berdedikasi dan berorientasi pada hasil dengan rekam jejak karir yang solid, mulai dari Junior Developer hingga menjadi Project Lead. Saya berkembang dengan memecahkan masalah kompleks dan membangun aplikasi yang efisien dan ramah pengguna.
            </p>
             <a href="mailto:ari.ardiansyah.101@gmail.com" className="mt-4">
                <Button>
                    Contact Me <ArrowUpRight className="ml-2" />
                </Button>
            </a>
          </GridCard>

          <GridCard className="lg:col-span-2 md:col-span-1" title="Socials">
             <div className="flex flex-col justify-center h-full gap-3">
              {socialLinks.map((link, i) => (
                <a key={i} href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                  <link.icon size={20} />
                  <span className="font-medium">{link.name}</span>
                   <ArrowUpRight size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </GridCard>
          
          <GridCard className="lg:col-span-3 md:col-span-2 row-span-2" title="Projects" icon={Briefcase}>
            <ScrollArea className="h-[430px] pr-4 -mr-4">
                <div className="space-y-4">
                {projects.map((project, i) => (
                    <Dialog key={i}>
                        <DialogTrigger asChild>
                            <div className="flex items-start gap-4 cursor-pointer group p-2 rounded-md hover:bg-secondary/50">
                                <div className="mt-1">
                                    <div className="size-8 rounded-md bg-secondary flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                        <Code size={16}/>
                                    </div>
                                </div>
                                <div className="flex-grow">
                                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                                    <p className="text-sm text-muted-foreground">{project.description}</p>
                                    <div className="flex flex-wrap gap-1 mt-2">
                                        {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                                    </div>
                                </div>
                            </div>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-xl">
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
          
          <GridCard className="lg:col-span-3 md:col-span-2 row-span-2" title="Experience" icon={Briefcase}>
            <ScrollArea className="h-[430px] pr-4 -mr-4">
              <div className="relative border-l-2 border-border/50 ml-2">
                  {experiences.map((exp, i) => (
                    <div key={i} className="mb-6 pl-8 relative">
                      <div className="absolute -left-[11px] top-1.5 size-5 bg-primary rounded-full border-4 border-background"></div>
                      <p className="text-sm text-muted-foreground">{exp.date}</p>
                      <h3 className="font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-sm text-foreground/80">{exp.company}</p>
                    </div>
                  ))}
                </div>
            </ScrollArea>
          </GridCard>

          <GridCard className="lg:col-span-2 md:col-span-1" title="Top Skills" icon={Star}>
            <div className="flex flex-wrap gap-2">
                {topSkills.map(skill => <Badge key={skill}>{skill}</Badge>)}
            </div>
          </GridCard>
          
          <GridCard className="lg:col-span-2 md:col-span-1" title="Time">
            <div className="flex items-center gap-4 h-full justify-center">
                {time ? (
                    <>
                        <Clock time={time} className="size-20" />
                        <div>
                        <p className="text-3xl font-semibold">{time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}</p>
                        <p className="text-muted-foreground">in Bandung, ID</p>
                        </div>
                    </>
                ) : (
                    <div className="flex items-center gap-4">
                        <div className="size-20 rounded-full bg-secondary/50 border-2 border-border animate-pulse" />
                        <div>
                            <div className="h-10 w-24 bg-secondary/50 rounded-md animate-pulse" />
                            <div className="h-4 w-24 bg-secondary/50 rounded-md mt-2 animate-pulse" />
                        </div>
                    </div>
                )}
            </div>
          </GridCard>
          
          <GridCard className="lg:col-span-2 md:col-span-1" title="Education" icon={GraduationCap}>
             <div className="space-y-4">
                {education.map((edu, i) => (
                    <div key={i}>
                         <p className="text-sm text-muted-foreground">{edu.date}</p>
                         <h3 className="font-semibold text-foreground">{edu.institution}</h3>
                         <p className="text-sm text-foreground/80">{edu.degree}</p>
                    </div>
                ))}
            </div>
          </GridCard>
          
          <GridCard className="lg:col-span-6 md:col-span-2" title="Certifications" icon={CheckCircle}>
             <ScrollArea className="h-[200px] pr-4 -mr-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
                    {certifications.map((cert, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <CheckCircle className="text-primary flex-shrink-0" size={16} />
                            <div>
                                <p className="font-semibold text-sm text-foreground">{cert.title}</p>
                                <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </ScrollArea>
          </GridCard>

        </main>
        
        <footer className="text-center mt-12 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ari Ardiansyah. Crafted with <span className="text-red-500">❤️</span> and Next.js</p>
        </footer>
      </div>
    </div>
  );
}
