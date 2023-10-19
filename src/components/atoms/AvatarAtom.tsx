import Image from "next/image";

type AvatarProps = {
  src: string, 
  alt: string, 
  styles?: string, 
  width: number,
  height: number
}

const AvatarAtom = ({ src, alt, styles, width, height }: AvatarProps) => {
  const imageStyles = `rounded-full ${styles}`
  
  return (
    <Image
      src={src}
      alt={alt}
      className={imageStyles}
      width={width}
      height={height}
    />
  )
}

export default AvatarAtom;