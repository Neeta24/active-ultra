import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Activity.css';
const Activity = () => {
    const[products,setProducts] =useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res =>res.json())
        .then(data => setProducts(data));
    },[])

    const handleAddToList = () =>{
        console.log('clicked');
       }

    return (
        <div className='activity-container'>
            <div className="excersize-container">
                 {
                    products.map(product=><Product key ={product.id}
                    product ={product}
                    handleAddToList = {handleAddToList}>
                    </Product>)
                 }
            </div>
            <div className="details-container">
              <h1>details about me</h1>
            </div>
        </div>
        
    );
};

export default Activity;