import React, { useEffect, useState } from 'react';
import './Activity.css';
const Activity = () => {
    const[products,setProducts] =useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res =>res.json())
        .then(data => setProducts(data));
    },[])
    return (
        <div className='activity-container'>
            <div className="excersize-container">
                 <h1>this is for details</h1>
            </div>
            <div className="details-container">
              <h1>details about me</h1>
            </div>
        </div>
        
    );
};

export default Activity;