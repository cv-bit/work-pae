import React, {useState} from 'react'
import Page from '../../helpers/Page'
import ReaderControls from '../../components/navigation/ReaderControls'
import Swiper from '../../components/swiper/Swiper'
import SwiperSlide from '../../components/swiper/SwiperSlide'

import './samplereader.css'

const Books = ({fontColor, color, setFontColor, setColor, bgColor}) => {

  const [changePage, setChangePage] = useState(0)

  const numPages = [1,2,3,4,5,6,7]

  return (
    <div className="sample-reader-container">
        <div className="page-container">
            {/* {
              numPages.map((page, i) => {
                return <div key={i} style={{position: "relative"}}>
                          <Page key={i} pageId={page}/>
                      </div>
              })
            } */}
            <Swiper>
              {
                numPages.map((page, i) => {
                  return <SwiperSlide key={i} changePage={changePage} id={page} color={color} bgColor={bgColor}>
                          <Page pageId={page}/>
                        </SwiperSlide>
                })
              }
            </Swiper>
        </div>
        <ReaderControls numPages={numPages} changePage={changePage} setChangePage={setChangePage} fontColor={fontColor} color={color} setFontColor={setFontColor} setColor={setColor} bgColor={bgColor} />
    </div>
  )
}

export default Books