import React, { memo } from 'react'

const Navbar = ({changeme}) => {
    console.log("from Nav")
  return (
    <div>
        <p>here is P</p>
    </div>
  )
}

export default memo(Navbar) 
