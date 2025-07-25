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
  title,
  background,
  icon: Icon,
  content
}: {
  className?: string;
  title: string;
  background: React.ReactNode | null;
  icon: React.ElementType;
  content: React.ReactNode;
}) => (
  <div
    className={cn(
      "group relative col-span-12 flex flex-col justify-between overflow-hidden rounded-lg",
      "bg-card border-2 neo-shadow transition-transform-shadow hover-lift",
      className,
    )}
  >
    {background}
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300">
       <div className="flex items-center gap-2 mb-2">
         <div className="size-10 rounded-md flex items-center justify-center bg-secondary border-2 neo-shadow-sm">
            <Icon className="h-6 w-6 text-foreground" />
         </div>
         <h3 className="text-xl font-semibold text-foreground">{title}</h3>
       </div>
    </div>
    
    <div className="p-6 pt-0 z-10">
      {content}
    </div>
  </div>
);

export { BentoCard, BentoGrid };
