import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import Product from '../Product/Product';
import './Activity.css';
const Activity = () => {
    const[products,setProducts] =useState([]);
    
    const[details,setDetails] = useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res =>res.json())
        .then(data => setProducts(data));
    },[])

    const handleAddToList = (product) =>{
        // console.log(product);
        const newDetail = [...details,product]
        setDetails(newDetail);
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
             <Details details = {details}></Details>
            </div>
        </div>
        
    );
};

export default Activity;