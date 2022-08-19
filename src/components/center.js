import React, { useEffect } from "react";

const Center = ({abhay}) =>{
  
  
useEffect(()=>{
  alert("hey");

},[])
   
  
    return(
        <>
        <h1>hello</h1>

        <button className=" btn btn-success" onClick={()=>abhay()}>click</button>
       
      

        
        </>
    )
};

export default Center;