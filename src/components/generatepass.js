// import{  usestate } from "generate-password";
import React,{useState} from "react";

const Strong=()=>{
    
        const [passward,setpassward]=useState("4d66@$*");


        const generatepass=()=>{
            let x=Math.random()*100000000000000;
            setpassward(Math.floor(x));
        }
     return(
        <>
        <div className="styling">
            <p style={{color:"black"}}>
            This form allows you to generate random passwords.
             The randomness comes from atmospheric noise, which for many purposes is better than
             the pseudo-random number algorithms typically used in computer programs.
            </p>
            <h1 style={{color:"white"}}>
                {" "} generate strong passwords:<span>{passward}</span>{" "}
            </h1>



        <hr/>
        <br/>

            

            <button id="btn" className="btn btn-success" onClick={()=>generatepass()}>
                generate
            </button>
            
        </div>

        </>
    )
}
export default Strong;