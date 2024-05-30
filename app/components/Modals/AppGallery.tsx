import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { useState } from 'react'

type AppGalleryProps = {
  images: string[]
  title: string
}

export const AppGallery = ({ images, title }: AppGalleryProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <>
      <div className="relative h-96 w-full overflow-hidden">
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="main-swiper"
        >
          {images.map((image) => (
            <SwiperSlide key={image}>
              <div className="mx-auto h-96 w-full ">
                <a href={`/images/projects/${image}`} target="_blank">
                  <img
                    src={`/images/projects/${image}`}
                    width={624}
                    height={362}
                    alt={`Screenshot of the ${title} project`}
                    className="h-full w-full cursor-zoom-in rounded-md object-cover object-top"
                  />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mx-auto mt-4 h-20 w-full overflow-hidden">
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="thumbnail-swiper"
        >
          {images.map((image) => (
            <SwiperSlide key={image}>
              <div className="max-h-[80px] cursor-pointer overflow-hidden rounded-md shadow-md">
                <img
                  src={`/images/projects/${image}`}
                  width={624}
                  height={400}
                  alt={`Screenshot of the ${title} project`}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}
