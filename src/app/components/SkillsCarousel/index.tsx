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
import SkillItem from "../SkillItem"

type SkillsCarouselProps = React.HTMLAttributes<HTMLDivElement>

export default function SkillsCarousel({ className = "", ...props }: SkillsCarouselProps) {
  const plugin = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: true }))

  return (
    <div className={`w-full overflow-x-hidden p-8`} {...props}>
      <Carousel plugins={[plugin.current]} className="w-full overflow-hidden touch-pan-y">
        <CarouselContent className="-ml-4">
          <CarouselItem className="basis-1/3 pl-4">
           <SkillItem src="./html.svg" alt="Html Logo" label="Html"/>
          </CarouselItem>

          <CarouselItem className="basis-1/3 pl-4">
           
           <SkillItem  src="/python.svg" alt="Python logo" label="Python"/>
          </CarouselItem>

          <CarouselItem className="basis-1/3 pl-4">
           
           <SkillItem   src="/js.svg" alt="Node.js logo"  label="JavaScript"/>
          </CarouselItem>

          <CarouselItem className="basis-1/3 pl-4">
           <SkillItem    src="/react.svg"alt="React logo"  label="React"/>
            
          </CarouselItem>

          <CarouselItem className="basis-1/3 pl-4">
           <SkillItem    src="./rust.svg" alt="Rust logo"  label="Rust"/>
     
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
