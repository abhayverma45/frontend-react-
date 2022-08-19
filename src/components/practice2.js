import { useEffect, useState } from "react";

const Counter=()=>{
    const[counter,setcounter]=useState(0);

    useEffect(()=>{
        alert("hello abhay")
    },[counter]);
    return(
        <>
        <h1>counter:{counter}</h1>

        <button onClick={()=>setcounter(counter+1)}> inreament</button>



        </>
    )
}

export default Counter;