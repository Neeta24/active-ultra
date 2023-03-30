import React, { useEffect, useState } from 'react';
import './Details.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

      const diffToast =()=>{
        toast.success("Succesfully Done!",{
          position:"top-center"
        })
      }
    return (
        <div>
         
             <h1>Exersize Details</h1>
              
              {
                btn.map((b,index)=><button className='time-button' onClick={(x)=>handleButton(x)}  value={b} key={index}>{b}</button>)
                
                
            }
            <h2 className='exercize'>Excersize Time : {total}s</h2>
           <h2 className='break'>Break Time : {time}</h2>
              <button className='activity' onClick={diffToast}>Activity Completed</button>
          
           <ToastContainer></ToastContainer>
              
        </div>
      
    );
};

export default Details;