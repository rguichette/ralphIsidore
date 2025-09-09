"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import ContactModal from "../ContactModal"

export default function BoldStatement() {
  const [contactOpen, setContactOpen] = useState(false)
  const [showSummary, setShowSummary] = useState(false)

  return (
    <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24 py-10 md:py-16">
      <div className="w-full rounded-none lg:rounded-3xl bg-white/10 backdrop-blur-sm ring-1 ring-white/20 p-6 sm:p-8 lg:p-12 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.6)]">
        <p className="text-xs uppercase tracking-widest text-white/70">
          Software Engineer · JS & Rust
        </p>
        <h1 className="mt-2 text-3xl md:text-5xl 2xl:text-6xl font-semibold leading-tight">
          FullStack Developer
        </h1>
        <p className="mt-4 text-white/85 md:text-lg">
          I build fast, reliable backends and clean UIs.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          {/* Contact opens modal */}
          <Button
            size="lg"
            className="bg-amber-400 text-slate-900 hover:bg-amber-300"
            onClick={() => setContactOpen(true)}
          >
            Contact
          </Button>

          {/* Projects scrolls down */}
          <Button
            asChild
            size="lg"
            className="bg-indigo-500/80 text-white hover:bg-indigo-400"
          >
            <a href="#projects">View Projects</a>
          </Button>
        </div>

        {/* View Summary toggle */}
        <button
          onClick={() => setShowSummary((prev) => !prev)}
          className="mt-6 text-sm font-medium text-amber-300 hover:text-amber-200 transition-colors"
        >
          {showSummary ? "Hide Summary" : "View Summary"}
        </button>

        {showSummary && (
          <p className="mt-4 text-white/90 text-sm sm:text-base leading-relaxed">
            Self-taught software developer with 3+ years of experience in web application
            development and data modeling. Skilled in JavaScript, React, and Python, with a
            strong ability to solve complex problems and implement scalable solutions.
            Demonstrated adaptability and initiative in professional office environments,
            fostering collaboration and efficient workflows.
          </p>
        )}
      </div>

     
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  )
}
