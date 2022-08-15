import React from "react";
 

const main =()=>{
    let name;
    let college;
    let state;
    let countary;
    
    // api calling;
    name="abhay kumar verma";
    college="mmm";
    state="uttar pradesh";
    countary="india";

    

    const Container=()=>{
        console.log("your data");
    }
    
    return(
     <>
     <h1>hello from the main</h1>
     <p>Name={name}</p>
     <p>college name={college}</p>
     <p>state={state}</p>

     <p>countary={countary}</p>
     <button onClick={()=>{
        Container();

     }} className="btn btn-success">more info</button>



     </>

    )
}


export default main;