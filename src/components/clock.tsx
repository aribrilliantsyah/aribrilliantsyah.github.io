'use client';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export const Clock = ({ className }: { className?: string }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourDeg = (hours % 12) * 30 + minutes * 0.5;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const secondDeg = seconds * 6;

  return (
    <div className={cn("relative size-16 rounded-full bg-secondary/50 border-2 border-border", className)}>
      <div
        className="absolute top-1/2 left-1/2 w-0.5 h-6 bg-primary origin-top transition-transform"
        style={{ transform: `rotate(${hourDeg}deg) translateY(-50%)` }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-0.5 h-8 bg-foreground origin-top transition-transform"
        style={{ transform: `rotate(${minuteDeg}deg) translateY(-50%)` }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-px h-8 bg-destructive origin-top transition-transform"
        style={{ transform: `rotate(${secondDeg}deg) translateY(-50%)` }}
      />
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-2 rounded-full bg-primary" />
    </div>
  );
};