import React, { useEffect, useState } from 'react';

function Fetch() {
    const [apiData,setApiData]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3001/employees_data").then((resp)=>{
            // console.log(resp);
            return (resp.json());
        }).then((data)=>{
            console.log(data);
            setApiData(data);
        })
    },[])
    
    console.log(apiData)
    return (
    <div>{apiData.map((ele)=>{return ele.address})}</div>
  )
}

export default Fetch