import React from 'react';

const Details = (props) => {
     const{details} = props;
      console.log(details);
      let total = 0;
      for(const product of details){
        total = total + product.Timerequired;
      }
    return (
        <div>
             <h1>details about me</h1>
              <h2>Excersize Time : {total}</h2>
              
        </div>
    );
};

export default Details;