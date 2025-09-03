import FiberWaves from "@/components/ui/shadcn-io/fiber-waves"
export default function WaveBg() {
  return (
    <div className="relative w-full h-full bg-black rounded-lg overflow-hidden">
      <FiberWaves 
        color={[0.8, 0.4, 1]}
        amplitude={1.2}
        distance={0.3}
        enableMouseInteraction={true}
      />
    </div>
  )
}