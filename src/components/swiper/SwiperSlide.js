import React from 'react'
import './swiper.css'

const SwiperSlide = ({id, changePage, color, bgColor}) => {

    let width = 583

    // display: "flex", justifyContent: "center", alignItems: "center",

  return (
    <div className="swiperslide-container">
        <div style={{width: 583, height: "75px", backgroundColor: color, margin: "0", transition: "0.4s ease-in-out", position: "absolute", top: "10px", left: id === 1 ? 5 : ((width * (id-1)) + (10 * id-1)) - (width * changePage + 7) + "px"}}>
            <p>{id}</p>
        </div>
    </div>
  )
}

export default SwiperSlide