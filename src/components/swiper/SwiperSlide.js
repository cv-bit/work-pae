import React from 'react'
import './swiper.css'

const SwiperSlide = ({id, changePage, color, bgColor}) => {

    console.log(id, changePage)
    let width = 583

    // display: "flex", justifyContent: "center", alignItems: "center",

  return (
    <div className="swiperslide-container">
        <div style={{width: 583, height: "75px", backgroundColor: color, margin: "0", transition: "0.4s ease-in-out", position: "absolute", top: "10px", left: id === 1 ? 5 : ((width * (id-1)) + (7 * id-1)) - (width * 3 + 7) + "px"}}>
            <p>{id}</p>
        </div>
    </div>
  )
}

export default SwiperSlide