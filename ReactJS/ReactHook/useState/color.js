import React from 'react'
import { useState} from "react";
    function color(){
        const [color, setColor] = useState("red");
    }
  return (
    <div>
        <h1>My favorite color is {color}</h1>
        <botton type ="botton"
        onClick={()=> setColor("blue")}>
            Blue 
        </botton>
    </div>
  )

