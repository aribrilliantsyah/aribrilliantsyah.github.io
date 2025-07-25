"use client"
import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const BentoGrid = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-12 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  className,
  children,
  title,
  background,
  icon: Icon,
  content
}: {
  className?: string;
  children?: React.ReactNode;
  title: string;
  background: React.ReactNode | null;
  icon: React.ElementType;
  content: React.ReactNode;
}) => (
  <div
    className={cn(
      "group relative col-span-12 flex flex-col justify-between overflow-hidden rounded-xl",
      // light styles
      "bg-card shadow-md",
      // dark styles
      "dark:bg-card dark:backdrop-blur-sm",
      "transform-gpu transition-all duration-300 ease-in-out hover:-translate-y-2",
      className,
    )}
  >
    <div className="pointer-events-none absolute -inset-2 z-10 transition-all duration-300 group-hover:bg-primary/10" />
    
    {background}

    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300">
       <div className="flex items-center gap-2 mb-2">
         <Icon className="h-6 w-6 text-primary" />
         <h3 className="text-xl font-semibold text-foreground">{title}</h3>
       </div>
      
    </div>
    
    <div className="p-6 pt-0 z-10">
      {content}
    </div>
  </div>
);

export { BentoCard, BentoGrid };
