import React, { useEffect, useState } from 'react';

// Created a custom hook to load fake data 

const UseServices = () => {
    const [services,setServices]=useState([]);

    useEffect(()=>{
        fetch('./services.JSON')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])

    return [services];
};

export default UseServices;