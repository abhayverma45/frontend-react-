import React, { useState } from "react";

const 
Form=()=>{
    const[name,setname]=useState("");
    const[mail,setmail]=useState("");
    const[password,setpassword]=useState("");
    console.log(name,mail,password);
    return(
        <>
        <div className="form">
        <div>
            <h1>enter your full name : </h1>
            <br/>
            <input
            value={name}
            onChange={(e)=>setname(e.target.value)}
             placeholder="enter your name " type="text"/>
        </div>

        <hr/>

        <div>
            <h1>enter your gmail : </h1>
            <br/>
            <input
            value={mail}
            onChange={(e)=>setmail(e.target.value)}
             placeholder="enter your email " type="text"/>
        </div>

        <hr/>

        <div>
            <h1>enter your password : </h1>
            <br/>
            <input
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
             placeholder="enter your password " type="text"/>
        </div>

        <br/>
        <hr/>
        <br/>

        <p>name : {name}</p>
        <p>email : {mail}</p>
        <p>password : {password}</p>
        
        </div>
        </>
    )
}
export default Form;