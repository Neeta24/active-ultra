const getStoredData =()=>{
    const storedData = localStorage.getItem("time");
    return storedData;

    }
   
    export default getStoredData;