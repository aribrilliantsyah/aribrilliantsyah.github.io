'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

interface InfoCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  imageHint?: string;
  onClick: () => void;
  layout?: 'vertical' | 'horizontal';
}

export function InfoCard({
  title,
  description,
  tags,
  image,
  imageHint,
  onClick,
  layout = 'vertical',
}: InfoCardProps) {
    if (layout === 'horizontal') {
        return (
            <Card
                className="w-full transition-all duration-300 ease-in-out hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1 cursor-pointer group bg-card overflow-hidden"
                onClick={onClick}
            >
                <div className="flex flex-col md:flex-row items-center">
                    {image && (
                         <div className="w-full md:w-1/3 h-48 md:h-full relative overflow-hidden">
                            <Image
                                src={image}
                                alt={title}
                                layout="fill"
                                objectFit="cover"
                                className="group-hover:scale-105 transition-transform duration-300"
                                data-ai-hint={imageHint}
                            />
                        </div>
                    )}
                    <div className="flex-1 p-6">
                        <CardHeader className="p-0">
                            <CardTitle className="font-headline text-xl mb-1">{title}</CardTitle>
                            <CardDescription>{description}</CardDescription>
                        </CardHeader>
                        <CardContent className="p-0 mt-4">
                            <div className="flex flex-wrap gap-2">
                                {tags.map((tag) => (
                                    <Badge key={tag} variant="secondary">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </div>
                </div>
            </Card>
        );
    }
  
    return (
        <Card
            className="w-full transition-all duration-300 ease-in-out hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-2 cursor-pointer group flex flex-col bg-card overflow-hidden"
            onClick={onClick}
        >
            {image && (
                <div className="w-full h-48 relative overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        layout="fill"
                        objectFit="cover"
                        className="group-hover:scale-105 transition-transform duration-300"
                        data-ai-hint={imageHint}
                    />
                </div>
            )}
            <div className="flex flex-col flex-grow p-6">
                <CardHeader className="p-0">
                    <CardTitle className="font-headline text-xl mb-1">{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent className="p-0 mt-4 flex-grow flex items-end">
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="bg-accent/80 text-accent-foreground">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </CardContent>
            </div>
        </Card>
    );
}
