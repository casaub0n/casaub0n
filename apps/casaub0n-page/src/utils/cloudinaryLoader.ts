import type { ImageLoader, ImageLoaderProps } from "next/image"

type CloudinaryLoaderProps = (imageNum: string) => ImageLoader;

/**
 * @param imageNum asset number. Check it on cloudinary
 * @example
 * import cloudinaryLoader from 'utils'
 * import Image from "next/image";
 * 
 * const Component = () => {
 *   return <Image loader={cloudinaryLoader('v1665804278')} .../>
 * }
 */
export const cloudinaryLoader: CloudinaryLoaderProps = ( imageNum ) => {
  return (({ src, width, quality }: ImageLoaderProps) => `https://res.cloudinary.com/dycpos4uc/image/upload/${imageNum}/${src}?w=${width}&q=${quality || 75}`);
}