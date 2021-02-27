import React from "react";

interface BSTHooks{
    arr: number[],
    low: number,
    high: number
}

const useBst = (): BSTHooks =>  {
    
    
    const arr: number[] = [];
    for (let i = 0; i < 50; i++) {
        arr.push(i);
    }
    const [pointer, setPointer] = React.useState<{low: number, high: number}>({low: 0, high: arr.length - 1})

    const target = 34

    // let low = 0;
    // let high = arr.length - 1;


    setInterval(()=>{
        if(pointer.low < pointer.high){
            let mid = Math.floor( (pointer.low + pointer.high) / 2)
            if(arr[mid] === target) {
                setPointer(()=>{
                    return {low: mid, high: mid}
                })
            }
            if(arr[mid] < target){
                setPointer((org)=>{
                    return {low: mid + 1, high: org.high}
                })
                // pointer.low = mid + 1
            }else{
                setPointer((org)=>{
                    return {low: org.low, high: mid - 1}
                })
                // pointer.high = mid - 1
            }
        }
        console.log("it's executing", pointer.low , pointer.high)
    },1000)


    return {
        arr, low : pointer.low, high: pointer.high
    };


}


export default useBst 