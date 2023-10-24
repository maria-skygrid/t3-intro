import Image from "next/image";

type AtomsAvatarProps = {
  src: string, 
  alt: string, 
  styles?: string, 
  width: number,
  height: number
}

const AtomsAvatar = ({ src, alt, styles, width, height }: AtomsAvatarProps) => {
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

export default AtomsAvatar