import { Component, useState } from "react"



function counter(){
    let [count,setCount]=useState(0)
    function Increment(){
        setCount(count+1)
    }
    function Decrement(){
       setCount(count>0 ? count-1 :count)
    }

   return (
    <div>
        <p>{count}</p> 
        <button onClick={Decrement}>-</button>
        <button onClick={Increment}>+</button>
    </div>
     

     
   )
}


export default counter