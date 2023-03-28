import React from 'react';
import { useState } from 'react';

const Breaktime = () => {
     const [time,setTime] = useState(0);
     
    const handleButton =(x)=>{
        const breakTime = x.target.value;
        setTime(breakTime);
        localStorage.setItem("time",breakTime)
    }
    const btn =[10,20,30,40,50];
    return (
        <div>
            <div>
            {
                btn.map((b,index)=><button  value={b} key={index}>{b}</button>)
             
                
            }
            
            </div>
           
        </div>
    );
};

export default Breaktime;