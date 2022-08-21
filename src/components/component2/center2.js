import React from "react";





const Center2 = ({name1 ,setname2}) =>{
  
  
    return(
        <>
        <h1>second name is {name1}</h1>

        <button className=" btn btn-success" onClick={()=>setname2('ashish')}>click</button>
       
      

        
        </>
    )
};

export default Center2;