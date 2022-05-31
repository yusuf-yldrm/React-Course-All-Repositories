import React from 'react'

const Paragraph = (props) => {
    console.log("PARAGRAPH FUNCTION")
    console.log("true")

    if(props.isHidden) {
      console.log("false")
      return(
        <>
          Nothing to see
        </>
      )
    }
    console.log("true")


    return (
      <div>{props.children}</div>
    )
}

export default React.memo(Paragraph)