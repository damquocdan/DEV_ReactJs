import React, { useRef ,useState} from 'react'

function DemoUseRef() {
    const[count,setCount]=useState(60);
    // dùng useRef để gán giá trị cho biến timeID
    const timeID = useRef();
    const handleStart=()=>{
        timeID.current=setInterval(()=>{
            setCount(prev=>prev-1)
        },1000);
        console.log("Start----------->",timeID.current)
    }
    const handleStop =()=>{
        clearInterval(timeID.current)
        console.log("Stop--------->",timeID.current)
    }


  return (
    <div>
        <h2>Demo useRef</h2>
        <h3>Current count:{count}</h3>
        <button onClick={handleStart}> Start</button>
        <button onClick={handleStop}> Stop</button>
    </div>
  )
}

export default DemoUseRef