import { useState } from 'react'

type PageDisplayProps = {
  imageUrl: string
  altText: string
}

export const PageDisplay = ({ imageUrl, altText }: PageDisplayProps) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div className="mx-auto mb-2 mt-2 h-60 w-[95%] overflow-hidden rounded-md sm:mb-0 md:h-96">
      <div
        className={`relative min-h-[200%] ${imageLoaded ? 'animate-scroll-whole' : ''} `}
      >
        <a href={imageUrl} target="_blank">
          <img
            src={imageUrl}
            alt={altText}
            className="w-full cursor-zoom-in rounded-md object-cover"
            onLoad={() => setImageLoaded(true)}
          />
        </a>
      </div>
    </div>
  )
}
