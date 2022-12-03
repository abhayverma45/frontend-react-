// import userEvent from "@testing-library/user-event";
import React, { useEffect, useState } from "react";

import axios from "axios";




const Abhay =()=>{
    const[user,setuser]=useState([]);

    const fetchuser=async()=>{
        const response=await axios.get("/team2");
        // console.log(response);
        if(response.data.success===true){
            setuser(response.data.data);

        }
        else
        console.log("server issue");

    }

    useEffect(()=>{
        fetchuser();
    },[]);


    return(
        <>
            {
                user.map((candidate)=>{
                    return(
                        <>
                            <h1> name of the person :  {candidate.name}</h1>
                            <p1> age ::{candidate.age}</p1>
                        </>
                    )
                })
            }
        </>
    )
}

export default Abhay;