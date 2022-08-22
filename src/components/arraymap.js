import React ,{ useState } from "react";

const Arraymap = ()=>{
    const array=["abhay","aditya","ashish","shivam","shivang","bhavya"]





    return(
        <>
       {
           array.map((test)=>{
               return(
                   <>
                   <h1>{test}</h1>
                   </>

               )
           })
       }
        </>
    )
}

export default Arraymap;