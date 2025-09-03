"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

type ProjectCardProps = React.HTMLAttributes<HTMLDivElement>

export default function ProjectCard({
  className,
  children,
  ...props
}: ProjectCardProps) {

  return (
     <div
      {...props}
      className={[" w-44 h-40 bg-amber-400 m-8",className].filter(Boolean).join(" ")}
    >
      {children ?? "Project Card"}
    </div>
  )
}
