import React, { useEffect, useState } from 'react'

 function DemoUseEffect() {
    //useState
    const [count,setCount]=useState(0);
    //callback
    useEffect(()=>{
        console.log("Đây là callback function=> re-render");
    },)
    useEffect(()=>{
        console.log("Đây là callback function và [] => 1 lần");
    },[])
    useEffect(()=>{
        console.log("Đây là callback function và [",count,"] => re-render (count)");
    },[count])
  return (
    <div>
        <h2>DemoUseEffect</h2>
        <button onClick={()=>setCount(prev=>prev+1)}>click add</button>
        <button onClick={()=>setCount(prev=>prev-1)}>click Remove</button>
    </div>
  )
}
export default DemoUseEffect;