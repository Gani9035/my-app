import React, { useState } from 'react'

export const Button = () => {
    const[color,setColor] = useState("Red")
    return (
        <div>
            <h1 style={{color:color}}>Change The Color</h1>
            <button onClick={()=>setColor("Pink")}>
                <h1>Click Here</h1>
            </button>
        </div>
    )
}

export default Button;
