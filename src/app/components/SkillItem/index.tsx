import Image from "next/image"

interface SkillItemProps {
  src: string
  alt: string
  label: string
}

const SkillItem: React.FC<SkillItemProps> = ({ src, alt, label }) => {
  return (
    <div className="flex flex-col w-full h-full p-4  bg-gray-800 justify-center items-center rounded-md overflow-hidden">
      <Image
        src={src}
        alt={alt}
        width={120}
        height={120}
        className="object-contain drop-shadow-[0_0_6px_rgba(255,255,255,0.8)] invert brightness-85 contrast-80"
        sizes="100px"
        priority
      />
      <p className="label_name mt-4 text-sm sm:text-base">{label}</p>
    </div>
  )
}

export default SkillItem
