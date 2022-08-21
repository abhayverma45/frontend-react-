import React from "react";
import Center2 from "./component2/center2";

const Center = ({name ,setname}) =>{
  
  
    return(
        <>
        <h1>my name is {name}</h1>

        <button className=" btn btn-success" onClick={()=>setname('atul')}>click</button>
       <Center2 name1={name} setname2={setname}/>;
      

        
        </>
    )
};

export default Center;