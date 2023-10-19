import Image from "next/image";

type AvatarProps = {
  src: string, 
  alt: string, 
  styles: string, 
  width: number, 
  height: number
}

const Avatar = ({ src, alt, styles, width, height }: AvatarProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      className={styles}
      width={width}
      height={height}
    />
  )
}

export default Avatar;