import React, { useEffect, useState } from "react";
import axios from "axios";

const Abhay1=()=>{
    const[user,setuser]=useState([]);

    const bringdata=async()=>{
        const response=await axios.get("/team");
        if(response.data.success===true){
            setuser(response.data.data);
        }
        else{
            console.log("server issue")
        };
    }
    useEffect(()=>{
        bringdata();
    },[]);

    return(
        <>
        {
            user.map((candy)=>{
                return(
                    <>
                    <h1>ID of the person : {candy.id}</h1>
                    <h2>passward : {candy.passward}</h2>
                    </>
                )
            })
        }

        </>
    )


}
export default Abhay1;
