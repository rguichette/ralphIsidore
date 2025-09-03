import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Autoplay from "embla-carousel-autoplay"
import SkillsCarousel from './components/SkillsCarousel'
import ProjectCard from './components/ProjectCard'



export default function Page() {
  return (
    <div className="h-screen bg-slate-900 w-screen flex">
      <div className="bg-slate--800 w-screen h-2/5 flex-col justify-center items-center text-white">
        <div className=" bg-slate-700 w-full h-full flex">
          <div className="bg--black w-1/2 h-full justify-center flex items-center">
          <h1>Full Stack Developer</h1>
          

          </div>
          
          {/* Blue area */}
          <div className="bg-blue--800 w-1/2 h-full relative">
            <Image
              src="/red_network_globe.gif"
              alt=""
              fill
              style={{
                objectFit: 'cover', // fill the blue div fully
                // border: '1px solid #fff',
              }}
            />
          </div>


<h3>Hello world</h3>
        </div>

        <div className="bg--black w-screen h-10">
  <div className="relative h-full">
    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 px-2">
     
              <button className=' bg-amber-400 p-2 w-26 rounded-md'>Contact</button>
    </div>
  </div>
</div>
      <div className=' bg-red--500 h-full text-white text-center m-auto flex-col justify-center max-w-4xl'>
        <h1 className='p-4 flex-1'>Summary</h1>
        <div>

              <p className='p-4'>Self-taught software developer with 3+ years of experience in web application development and data modeling. Skilled in JavaScript, React, Python, and Rust, with a strong ability to solve complex problems and implement scalable solutions. Demonstrated adaptability and initiative in professional office environments, fostering collaboration and efficient workflows.</p>
        </div>

        <h2 className='skills font-semibold'>
            Skills
      <SkillsCarousel className=' mt-8'/>

      
            
            </h2>      
      <h3 className='mt-4 font-semibold'>Projects</h3>
  
        
   
       
        
        </div>

      
      </div>


    </div>
  )
}
