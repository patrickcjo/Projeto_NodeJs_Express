// export function ImgError({ src, alt, className }: ImagemProps)

type ImagemProps = { src: string; alt: string; className: string; }

export function ImgError({ src, alt, className }: ImagemProps) {
  return (
    <>
      <img src={src} alt={alt} className={className} />
    </>
  );
  
}

