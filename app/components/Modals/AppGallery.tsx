import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react'
import { FreeMode, Navigation, Thumbs, Pagination } from 'swiper/modules'
import { useState } from 'react'

type AppGalleryProps = {
  images: string[]
  title: string
}

export const AppGallery = ({ images, title }: AppGalleryProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null)

  return (
    <>
      <div className="relative w-full overflow-hidden">
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          pagination={{
            clickable: true
          }}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs, Pagination]}
          className="main-swiper h-[220px] md:h-[280px] lg:h-[375px]"
        >
          {images.map((image) => (
            <SwiperSlide key={image}>
              <div className="mx-auto h-[170px] w-[350px] shadow-md md:h-[250px] md:w-[500px] lg:h-[350px] lg:w-[87%]">
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

      <div className="mx-auto w-[95%] overflow-hidden lg:mt-2 lg:h-20">
        <Swiper
          onSwiper={(swiper) => setThumbsSwiper(swiper as SwiperClass)}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="thumbnail-swiper"
        >
          {images.map((image) => (
            <SwiperSlide key={image} className="opacity-40 shadow-md">
              <div className="h-[60px] cursor-pointer overflow-hidden rounded-md active:opacity-100 lg:h-[80px]">
                <img
                  src={`/images/projects/${image}`}
                  width={624}
                  height={400}
                  alt={`Screenshot of the ${title} project`}
                  className="h-full w-full object-cover object-center "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}
