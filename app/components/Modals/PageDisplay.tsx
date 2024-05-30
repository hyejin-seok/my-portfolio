type PageDisplayProps = {
  imageUrl: string
  altText: string
}

export const PageDisplay = ({ imageUrl, altText }: PageDisplayProps) => {
  return (
    <div className="h-96 w-full overflow-hidden rounded-md">
      <div className="relative min-h-[200%] w-full animate-scroll-whole ">
        <a href={imageUrl} target="_blank">
          <img
            src={imageUrl}
            alt={altText}
            className="w-full cursor-zoom-in rounded-md object-cover"
          />
        </a>
      </div>
    </div>
  )
}
