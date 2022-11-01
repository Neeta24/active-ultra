import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
const Product = (props) => {
   const{img,name,Timerequired} = props.product;

   
    return (
        <div className='productimage'>
            <img src={img} alt=""/>
           <p className='product-name'>{name}</p>
           <p>Time required: {Timerequired}s</p>

           <button onClick={() => props.handleAddToList(props.product)} className='activity-btn'>
            <p>Add To List</p>
            
           </button>
        </div>
        
    );
};

export default Product;