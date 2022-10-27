import React from 'react';
import './Product.css';
const Product = (props) => {
   const{img,name} = props.product;
    return (
        <div className='productimage'>
            <img src={img} alt=""/>
           <p>{name}</p>
        </div>
        
    );
};

export default Product;