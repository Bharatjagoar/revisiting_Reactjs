import React, { memo } from 'react'

const Children = (props) => {
    console.log("hello from children")
    return (
        <div>
            <h1>{props.this}</h1> 
        </div>
    )
}

export default memo(Children) 
