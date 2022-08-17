import React, { useState } from "react";

const Home=()=>{
    const[counter,setcounter]=useState(0);
    const tip =()=>{
        if(counter ===9){
            alert("congratulations:achived your target");
        }
        if(counter ===10){
           return alert("target already achieved");
        }
        setcounter(counter+1);
    };
    const tok=()=>{
        setcounter(counter-1)
    }



    return(
        <>
        <h1>target:<span>10</span></h1>
        <h1>current counter <span>{counter}</span></h1>

        <div className="row">
            <div className="col">
                <button className="btn btn-success" onClick={()=>tip()}>start timer</button>
            </div>
        </div>

        <br/>
        <br/>



        <div className="col">
        <button className="btn btn-success" onClick={()=>tok()}>
            stop timer
        </button>

        </div>


        </>
    )
}
export default Home;