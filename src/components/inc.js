import React, { useState } from "react";

const Home=()=>{
    const[counter,setcounter]=useState(0);
    const start =()=>{
        if(counter ===9){
            alert("congratulations:achived your target");
        }
        if(counter ===10){
           return alert("target already achieved");
        }
        setcounter(counter+1);
    };
    const stop=()=>{
        setcounter(counter-1)
    }



    return(
        <>
        <div className="style_in_inc">
        <h1 >target : <span style={{color:"white"}}>10</span></h1>
        <hr/>
        <h1>current counter : <span style={{color:"white"}}>{counter}</span></h1>
        <hr/>
        <br/>
        <br/>

        <div className="row">
            <div className="col">
                <button className="btn btn-success" onClick={()=>start()}>count ++</button>
            </div>
        </div>

        <br/>
        <br/>



        <div className="col">
        <button className="btn btn-success" onClick={()=>stop()}>
            count --
        </button>

        </div>
        </div>


        </>
    )
}
export default Home;