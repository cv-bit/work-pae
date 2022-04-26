import React from 'react'
import Page from '../../helpers/Page'

import './samplereader.css'

const Books = ({fontColor, color, setFontColor, setColor}) => {


  return (
    <div className="sample-reader-container">
        <h1 style={{width: "100%", height: "fit-content",textAlign: "center", backgroundColor: color, color: fontColor, margin: "0", padding: "15px 5px"}}>Demo Reader</h1>
        <div className="page-container">
            <Page pageId={1}/>
            <Page pageId={2}/>
            <Page pageId={3}/>
            <Page pageId={4}/>
        </div>
    </div>
  )
}

export default Books