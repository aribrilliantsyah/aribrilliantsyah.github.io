'use client';
import { cn } from '@/lib/utils';

export const Clock = ({ className, time }: { className?: string, time: Date }) => {
  const hours = time.getHours();
  const minutes = time.getMinutes();

  const hourDeg = (hours % 12) * 30 + minutes * 0.5;
  const minuteDeg = minutes * 6;

  return (
    <div className={cn("relative size-16 rounded-full bg-secondary border", className)}>
      <div
        className="absolute top-1/2 left-1/2 w-0.5 h-5 bg-primary origin-top"
        style={{ transform: `rotate(${hourDeg}deg) translateY(-50%)` }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-0.5 h-7 bg-foreground origin-top"
        style={{ transform: `rotate(${minuteDeg}deg) translateY(-50%)` }}
      />
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-1.5 rounded-full bg-primary" />
    </div>
  );
};
