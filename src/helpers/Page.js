import React from 'react'
import { SamplePageObj } from './SamplePageObj'
import DisplayFunctions from './DisplayFunctions'

const Page = ({pageId}) => {

    const pageContainer = {
        width: '100%',
        maxWidth: "575px",
        minWidth: "49%",
        maxHeight: "100%",
        minHeight: '85vh',
        border: "1px solid black",
        margin: "5px",
        padding: "10px"
    }

  return (
    <div style={pageContainer}>
        <h2 style={{margin: "0"}}>page {pageId}</h2>
        {
            SamplePageObj.map((rect, i) => {
                if (rect.pageId === pageId) {
                    return DisplayFunctions[rect.displayFunctionName](rect, i)
                }
            })
        }
    </div>
  )
}

export default Page