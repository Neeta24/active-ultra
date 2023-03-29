import React, { useEffect, useState } from 'react';

import getStoredData from '../Utilities/fakedb';


const Details = (props) => {
     const{details} = props;
      
      let total = 0;
      for(const product of details){
        total =  total + product.Timerequired;
      }

      const [time,setTime] = useState([]);
      // console.log(time)
     
      const handleButton =(x)=>{
          const breakTime = x.target.value;
          setTime(breakTime);
          localStorage.setItem("time",breakTime)
      }

     useEffect(()=>{
      const getData = getStoredData();
      // console.log(getData);
      setTime(getData);
      
    },[])


      const btn =[10,20,30,40,50,90,60];
    return (
        <div>
         
             <h1>Exersize Details</h1>
              <h2>Excersize Time : {total}s</h2>
              {
                btn.map((b,index)=><button onClick={(x)=>handleButton(x)}  value={b} key={index}>{b}</button>)
                
                
            }
           <h2>Break Time : {time}</h2>
              
          
           
              
        </div>
      
    );
};

export default Details;