import React from 'react'

const DemoOutput = (props) => {

    console.log("demo output")
    return (
        <div>
            {props.show ? 'This is New' : ''}
        </div>
    )
}

export default DemoOutput