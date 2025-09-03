// app/components/Hero.tsx
"use client";

import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import BoldStatement from "../BoldStatement";
const FiberWaves = dynamic(() => import("@/components/ui/shadcn-io/fiber-waves"), { ssr: false });

export default function Hero() {
  return (
    <section className="relative w-full min-h-[70svh] overflow-hidden">
      {/* interactive background */}
      <div className="absolute inset-0 pointer-events-auto">
        <FiberWaves
          color={[0.8, 0.4, 1]}
          amplitude={1.2}
          distance={0.3}
          enableMouseInteraction
        />
      </div>
      {/* veil shouldn't block pointer events */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />

      {/* content wrapper: roomy side padding on big screens */}
    <BoldStatement/>
    </section>
  );
}
