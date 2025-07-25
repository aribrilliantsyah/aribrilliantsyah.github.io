'use client';

import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Github, Linkedin, Mail, ArrowUpRight, Code, GraduationCap, CheckCircle, Briefcase, Star, Building, User } from 'lucide-react';
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
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ari-ardiansyah101' },
  { icon: Github, href: 'https://github.com/iAri' },
  { icon: Mail, href: 'mailto:ari.ardiansyah.101@gmail.com' },
];

const GridCard: FC<{ children: React.ReactNode; className?: string, title?: string }> = ({ children, className, title }) => (
    <Card className={cn("p-4 md:p-6 border border-border/50 rounded-lg flex flex-col", className)}>
      {title && (
          <h2 className="text-sm font-normal text-muted-foreground mb-4">{title}</h2>
      )}
      <div className="flex-grow">
          {children}
      </div>
    </Card>
);

const SectionTitle: FC<{title: string}> = ({title}) => (
    <h2 className="text-sm font-normal text-muted-foreground mb-4">{title}</h2>
)


export default function CodeFolioPage() {
    const [time, setTime] = useState<Date | null>(null);

    useEffect(() => {
        const update = () => setTime(new Date());
        update();
        const timer = setInterval(update, 1000 * 60); // Update every minute
        return () => clearInterval(timer);
    }, []);

  return (
    <div className="bg-background min-h-screen">
      <div className="max-w-screen-xl mx-auto p-4 md:p-8">
        
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
            <GridCard className="lg:col-span-2">
                <div className="flex items-center gap-4">
                    <div className="relative size-12">
                        <Image
                        src="https://placehold.co/80x80.png"
                        alt="Ari Ardiansyah"
                        width={48}
                        height={48}
                        className="rounded-full"
                        data-ai-hint="profile picture"
                        />
                    </div>
                    <h1 className="text-lg font-medium text-foreground">Ari Ardiansyah</h1>
                </div>
            </GridCard>

            <GridCard className="col-span-1 lg:col-span-2">
                <SectionTitle title="About"/>
                 <p className="text-sm text-foreground/90">
                    Dengan pengalaman lebih dari 5 tahun di bidang IT, saya adalah seorang developer yang berdedikasi dan berorientasi pada hasil dengan rekam jejak karir yang solid, mulai dari Junior Developer hingga menjadi Project Lead.
                </p>
            </GridCard>
            
            <GridCard className="col-span-1 lg:col-span-2 row-span-2">
                <SectionTitle title="Projects"/>
                 <ScrollArea className="h-[260px] pr-3 -mr-3">
                    <div className="space-y-3">
                        {projects.map((project, i) => (
                             <Dialog key={i}>
                                <DialogTrigger asChild>
                                    <div className="flex items-center gap-4 cursor-pointer group">
                                        <div className="size-10 rounded-md bg-secondary flex items-center justify-center text-muted-foreground group-hover:bg-primary/10 transition-colors">
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
                        src="https://placehold.co/600x800.png"
                        alt="Portfolio image"
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint="sunset landscape"
                    />
                 </div>
            </GridCard>

            <GridCard className="col-span-1 lg:col-span-1">
                 <SectionTitle title="Time"/>
                 <div className="flex items-center gap-3">
                    {time ? (
                        <>
                            <Clock time={time} className="size-12" />
                            <div>
                                <p className="text-xl font-semibold">{time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}</p>
                                <p className="text-xs text-muted-foreground">Bandung, ID</p>
                            </div>
                        </>
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

            <GridCard className="col-span-1 lg:col-span-1">
                <SectionTitle title="Contact"/>
                 <a href="mailto:ari.ardiansyah.101@gmail.com">
                    <Button variant="outline" className="w-full">
                        Let's Talk <ArrowUpRight className="ml-2" />
                    </Button>
                </a>
            </GridCard>
            
            <GridCard className="col-span-1 lg:col-span-2 row-span-2">
                <SectionTitle title="Experience & Education"/>
                <ScrollArea className="h-[260px] pr-3 -mr-3">
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-medium text-sm mb-3 flex items-center gap-2"><Briefcase size={14}/> Experience</h3>
                            <div className="space-y-4">
                                {experiences.map((exp, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between items-center">
                                            <p className="text-sm font-medium">{exp.title}</p>
                                            <p className="text-xs text-muted-foreground">{exp.date}</p>
                                        </div>
                                        <p className="text-xs text-muted-foreground">{exp.company}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                         <div>
                            <h3 className="font-medium text-sm mb-3 flex items-center gap-2"><GraduationCap size={14}/> Education</h3>
                            <div className="space-y-4">
                                {education.map((edu, i) => (
                                     <div key={i}>
                                        <div className="flex justify-between items-center">
                                            <p className="text-sm font-medium">{edu.institution}</p>
                                            <p className="text-xs text-muted-foreground">{edu.date}</p>
                                        </div>
                                        <p className="text-xs text-muted-foreground">{edu.degree}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </ScrollArea>
            </GridCard>

            <GridCard className="col-span-1 lg:col-span-2">
                 <SectionTitle title="Social Media"/>
                 <div className="flex items-center gap-2">
                    {socialLinks.map((link, i) => (
                        <a key={i} href={link.href} target="_blank" rel="noopener noreferrer" className="flex-1">
                            <Button variant="outline" className="w-full">
                                <link.icon size={16}/>
                            </Button>
                        </a>
                    ))}
                 </div>
            </GridCard>

            <GridCard className="col-span-1 lg:col-span-2">
                 <SectionTitle title="Top Skills"/>
                 <div className="flex flex-wrap gap-2">
                    {topSkills.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                </div>
            </GridCard>

             <GridCard className="col-span-1 lg:col-span-4">
                 <SectionTitle title="Certifications"/>
                 <ScrollArea className="h-[120px] pr-3 -mr-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2">
                        {certifications.map((cert, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <CheckCircle className="text-muted-foreground flex-shrink-0" size={14} />
                                <div>
                                    <p className="font-medium text-xs text-foreground">{cert.title}</p>
                                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                 </ScrollArea>
            </GridCard>

        </main>
        
        <footer className="text-center mt-8 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ari Ardiansyah. Crafted with Next.js</p>
        </footer>
      </div>
    </div>
  );
}
