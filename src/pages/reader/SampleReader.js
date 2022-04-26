import React from 'react'
import Page from '../../helpers/Page'

import './samplereader.css'

const Books = ({fontColor, color, setFontColor, setColor}) => {

  const numPages = [1,2,3,4,5]

  return (
    <div className="sample-reader-container">
        <h1 style={{width: "100%", height: "fit-content",textAlign: "center", backgroundColor: color, color: fontColor, margin: "0", padding: "15px 5px"}}>Demo Reader</h1>
        <div className="page-container">
            {
              numPages.map((page, i) => {
                return <div key={i} style={{position: "relative"}}>
                          <Page key={i} pageId={page}/>
                      </div>
              })
            }
        </div>
    </div>
  )
}

export default Books