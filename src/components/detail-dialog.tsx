'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';

interface Detail {
  title: string;
  description: string;
  tags: string[];
  longDescription: string;
  image?: string;
  imageHint?: string;
  link?: string;
}

interface DetailDialogProps {
  content: Detail | null;
  onOpenChange: (isOpen: boolean) => void;
}

export function DetailDialog({ content, onOpenChange }: DetailDialogProps) {
  const isOpen = content !== null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[650px] bg-card/80 backdrop-blur-sm">
        {content && (
          <>
            <DialogHeader>
              <DialogTitle className="font-headline text-2xl text-foreground">{content.title}</DialogTitle>
              <DialogDescription className="text-base text-muted-foreground">{content.description}</DialogDescription>
            </DialogHeader>
            <div className="grid gap-6 py-4">
              {content.image && (
                <div className="relative w-full h-56 rounded-lg overflow-hidden border">
                    <Image 
                        src={content.image} 
                        alt={content.title}
                        fill
                        objectFit="cover"
                        data-ai-hint={content.imageHint}
                    />
                </div>
              )}
              <div className="flex flex-wrap gap-2">
                {content.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <p className="text-base leading-relaxed text-muted-foreground">{content.longDescription}</p>
              {content.link && (
                 <div className="pt-2">
                    <a href={content.link} target="_blank" rel="noopener noreferrer">
                        <Button>
                            View Project
                            <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                    </a>
                 </div>
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}