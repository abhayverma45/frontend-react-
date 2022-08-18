import React, { useState } from "react";

const Watch=()=>{
    const [time,settime]=useState(new Date().toLocaleTimeString());

    const [day,setday]=useState(new Date().toLocaleDateString());

    const gettime=()=>{
        settime(new Date().toLocaleTimeString())
    };


  setInterval(() => {
    gettime();
  }, 1000);


    return(
        <>
        <div className="design">
            
                <h1 style={{color:"white"}}>current time:<span style={{color:"black"}}>{time}</span></h1>
                
                <h1 style={{color:"white"}}>current day:<span style={{color:"black"}}>{day}</span></h1>
           
        </div> 
        </>
    )

};

export default Watch;