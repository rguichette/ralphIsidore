"use client"

import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import Modal from "../Modal"

interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string
  title: string
  description?: string
  link?: string
}

export default function ProjectCard({
  className,
  image,
  title,
  description,
  link,
  ...props
}: ProjectCardProps) {
  const [open, setOpen] = React.useState(false)

  const content = (
    <div
      {...props}
      onClick={() => setOpen(true)} 
      className={cn(
        "cursor-pointer",
        "w-32 h-40 sm:w-44 sm:h-52 md:w-52 md:h-56 lg:w-60 lg:h-64 xl:w-72 xl:h-80 lg:m-4",
        "bg-slate-900/40 border border-slate-600/40 rounded-xl shadow-lg backdrop-blur-md",
        "p-3 sm:p-4 m-2 flex flex-col justify-between transition-transform hover:scale-105 hover:shadow-xl",
        className
      )}
    >
      <div className="flex-1 flex items-center justify-center overflow-hidden rounded-md bg-slate-800/40">
        <Image
          src={image}
          alt={title}
          width={480}
          height={360}
          className="object-contain max-h-16 sm:max-h-20 md:max-h-24 lg:max-h-32"
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 25vw"
        />
      </div>

      <div className="mt-3 text-center">
        <h3 className="text-sm sm:text-base md:text-lg font-semibold">{title}</h3>
        {description && (
          <p className="text-xs sm:text-sm text-slate-300 mt-1 line-clamp-2">
            {description}
          </p>
        )}
      </div>
    </div>
  )

  return (
    <>
      {content}
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        description={description}
        link={link}
      />
    </>
  )
}
