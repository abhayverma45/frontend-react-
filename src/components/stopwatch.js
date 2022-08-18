import React, {useState } from "react";

const Start=()=>{
    
    const[Num,setNum]=useState(0);
        
     
    const starttimer =()=> setInterval(() => {
          setNum((prevsetNum)=> (prevsetNum+1));}, 1000);

    const stoptimer=()=>{
          clearInterval(starttimer)
        };

    const resettimer=()=>{
        setInterval()
    }    
        
   return(
        <>
        <div className="style_in_stopwatch">
        <h1 id="abc"> Timer : {Num} </h1>

        <center>
        <hr/>
        </center>
      <br/>

        <div className="abcd">
            <div className="col">
                <button style={{color:"white"}} className="btn btn-success" onClick={()=>starttimer()}>start timer</button>
            </div>
        </div>

         <br/>
        <div className="abcd">
        <button className="btn btn-success" onClick={()=>stoptimer()}>
            stop timer
        </button>

        </div>

        <br/>

        <div className="abcd">
        <button className="btn btn-success" onClick={()=>resettimer()}>
            reset timer
        </button>

        </div>
        </div>
        </>
    )
}
export default Start;