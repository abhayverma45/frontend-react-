import React, {useState } from "react";

const Start=()=>{
    
    const[Num,setNum]=useState(0);

    
    
        const starttimer =()=> setInterval(() => {
          setNum((prevsetNum)=> (prevsetNum+1));
        }, 1000);

    

        const stoptimer=()=>{
            clearInterval(starttimer)
        };
        
   return(
        <>
        <h1 id="abc"> timer {Num} </h1>

        <div className="abcd">
            <div className="col">
                <button className="btn btn-success" onClick={()=>starttimer()}>start timer</button>
            </div>
        </div>


        <br/>



        <div className="abcd">
        <button className="btn btn-success" onClick={()=>stoptimer()}>
            stop timer
        </button>

        </div>


        </>
    )
}
export default Start;