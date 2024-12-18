import React from 'react'

export default function () {
    const Member = (props)=>{
        return(
            <div>
                <h2>Tôi là arrowFunction</h2>
                <h3>Wellcome to, {props.info}</h3>
            </div>
        )
    }
  return (
    <div>
        <Member info ="chúng tôi là những chiến sỹ code thực chiến"/>
    </div>
  )
}