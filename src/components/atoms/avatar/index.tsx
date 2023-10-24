import Image from "next/image";
import classNames from "classnames";

type AtomsAvatarProps = {
  src: string, 
  alt: string, 
  styles?: string, 
  width: number,
  height: number
}

const AtomsAvatar = ({ src, alt, styles, width, height }: AtomsAvatarProps) => {
  
  return (
    <Image
      src={src}
      alt={alt}
      className={classNames('rounded-full', styles)}
      width={width}
      height={height}
    />
  )
}

export default AtomsAvatar