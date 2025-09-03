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

type SkillsCarouselProps = React.HTMLAttributes<HTMLDivElement>

export default function SkillsCarousel({ className = "", ...props }: SkillsCarouselProps) {
  const plugin = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: true }))

  return (
    <div className={`w-full overflow-x-hidden p-8`} {...props}>
      <Carousel plugins={[plugin.current]} className="w-full overflow-hidden touch-pan-y">
        <CarouselContent className="-ml-4">
          <CarouselItem className="basis-1/3 pl-4">
            <div className="flex w-40 h-32 bg-amber-400 justify-center items-center rounded-md overflow-hidden">
              <Image
                src="/js.png"
                alt="JavaScript logo"
                width={160}
                height={160}
                className="object-contain bg-transparent"
                sizes="160px"
                priority
              />
            </div>
          </CarouselItem>

          <CarouselItem className="basis-1/3 pl-4">
            <div className="flex w-40 h-32 bg-amber-400 justify-center items-center rounded-md overflow-hidden">
              <Image
                src="/python.png"
                alt="Python logo"
                width={160}
                height={160}
                className="object-contain"
                sizes="160px"
              />
            </div>
          </CarouselItem>

          <CarouselItem className="basis-1/3 pl-4">
            <div className="flex w-40 h-32 bg-amber-400 justify-center items-center rounded-md overflow-hidden">
              <Image
                src="/nodejs.jpg"
                alt="Node.js logo"
                width={160}
                height={160}
                className="object-contain"
                sizes="160px"
              />
            </div>
          </CarouselItem>

          <CarouselItem className="basis-1/3 pl-4">
            <div className="flex w-40 h-32 bg-amber-400 justify-center items-center rounded-md overflow-hidden">
              <Image
                src="/react.png"
                alt="React logo"
                width={160}
                height={160}
                className="object-contain bg-transparent"
                sizes="160px"
              />
            </div>
          </CarouselItem>

          <CarouselItem className="basis-1/3 pl-4">
            <div className="flex w-40 h-32 bg-amber-400 justify-center items-center rounded-md overflow-hidden">
              <Image
                src="/rust.png"
                alt="Rust logo"
                width={160}
                height={160}
                className="object-contain bg-white"
                sizes="160px"
              />
            </div>
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
