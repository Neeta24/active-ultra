import React from 'react';
import './Product.css';
const Product = (props) => {
   const{img,name,Timerequired} = props.product;
    return (
        <div className='productimage'>
            <img src={img} alt=""/>
           <p className='product-name'>{name}</p>
           <p>Time required: {Timerequired}s</p>

           <button className='activity-btn'>
            Add To List
           </button>
        </div>
        
    );
};

export default Product;