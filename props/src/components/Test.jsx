import React, { useState } from 'react'
import Children from './children';
const Test = () => {
    const [counter,setcounter] = useState(1);
    const [counter2,setcounter2] = useState(20)

    let count = 1
    console.log("object")
    function name(){
        console.log(count)
        setcounter(counter+1)
    }


    function name2(){
        console.log(count)
        setcounter2(counter2+1)
    }

  return (
    <div>
        <h1>hello world from test{count}</h1>
        <button onClick={()=>{name()}}>click</button>
        <button onClick={()=>{name2()}}>click2</button>
        <Children count={counter2}/>
    </div>
  )
}

export default Test
