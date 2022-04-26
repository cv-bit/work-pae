import React from 'react'
import { SamplePageObj } from './SamplePageObj'
import DisplayFunctions from './DisplayFunctions'

const Page = ({pageId}) => {

    const pageContainer = {
        width: '100%',
        maxWidth: "575px",
        minWidth: "300px",
        maxHeight: "100%",
        minHeight: '80vh',
        position: "realtive",
        border: "1px solid black"
    }

  return (
    <div style={pageContainer}>
        <h2>page {pageId}</h2>
        {
            SamplePageObj.map((rect, index) => {
                console.log(rect)
                if (rect.pageId == pageId) {
                    return DisplayFunctions[rect.displayFunctionName](rect)
                }
            })
        }
    </div>
  )
}

export default Page