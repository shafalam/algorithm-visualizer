import { lchown } from "fs"
import React from "react"

interface DisplayArrayProps{
    arr: number[],
    low: number,
    high: number
}

const DisplayArray = ({arr, low, high}: DisplayArrayProps) => {
    const array = arr.map((val, index) => {
        return (<div style={{ height: "20px", border: "1px solid black", backgroundColor: index === low ? "yellow" : index === high ? "red" : "blue"}}>{val}</div>)
    })
    
    return  <div style={{width: "500px", display: "flex", flexWrap: "wrap"}}>{array}</div> 
}

export default DisplayArray