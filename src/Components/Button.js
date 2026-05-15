import React, { useState } from 'react'
import Navbar from './Navbar';

export const Button = () => {
    const[color,setColor] = useState("Red")
    return (
        <div>
            <h1 style={{color:color}}>Change The Color</h1>
            <button onClick={()=>setColor("Pink")}>
                <Navbar/>
            </button>
            <h1 style={{color:color}}>Change The Color</h1>
            <button onClick={()=>setColor("Pink")}>
                Submit
            </button>
            <h1 style={{color:color}}>Change The Color</h1>
            <button onClick={()=>setColor("Pink")}>
                Submit
            </button>
        </div>
    )
}

export default Button;
