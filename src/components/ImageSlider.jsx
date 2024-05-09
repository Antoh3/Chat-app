import { Pagination } from "swiper/modules"
import {Swiper,SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import '../assets/css/imageslider.css'

export default function imageSlider({images, onClose}) {
  return (
    <div className='image-slider'>
        <div className="image-slider-close" onClick={onClose}>
            <i className='fa-solid fa-xmark'></i> 
        </div>
        <div className="slider-container">
            <Swiper
                loop={true}
                navigation={false}
                pagination={true}
                modules={{Pagination}}
                spaceBetween={0}
                slidesPerView={1}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} alt="" className="image-slide"/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </div>
  )
}
