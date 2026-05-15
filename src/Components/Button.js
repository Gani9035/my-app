import React, { useState } from 'react'

export const Button = () => {
    const[color,setColor] = useState("Red")
    return (
        <div>
            <h1 style={{color:color}}>Change The Color</h1>
            <button onClick={()=>setColor("Pink")}>
                Click Here To Change The Text Color
            </button>
        </div>
    )
}

export default Button;
