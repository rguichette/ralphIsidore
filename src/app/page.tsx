// import HeaderIntro from "./components/headerIntro";

export default function Page() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden
                     bg-gradient-to-br from-[#120019] via-[#1b0031] to-[#2a0055]">
      {/* soft neon purple glow */}
      <div className="pointer-events-none absolute inset-0
        bg-[radial-gradient(45%_35%_at_20%_10%,rgba(168,85,247,0.14),transparent_60%)]" />
      {/* hint of blue in the corner */}
      <div className="pointer-events-none absolute inset-0
        bg-[radial-gradient(50%_40%_at_85%_20%,rgba(56,189,248,0.12),transparent_60%)]" />
      {/* gentle vignette to deepen edges */}
      <div className="pointer-events-none absolute inset-0
        [box-shadow:inset_0_0_140px_80px_rgba(0,0,0,0.45)]" />

   <div
  className="
    mx-auto
    w-full
    max-w-none           /* remove the 5xl cap */
    lg:max-w-[90vw]      /* desktop: cap at 90% of viewport width */
    px-4 lg:px-0         /* avoid 90vw + extra padding causing overflow */
    py-12
    text-white
  "
>
  {/* <HeaderIntro /> */}
</div>

    </main>
  );
}
