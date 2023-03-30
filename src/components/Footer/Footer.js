import React from 'react';
import './Footer.css'

const Footer = () => {
    return (

     <>
      <div>
    <h2>How React Works</h2>
    <p> React JS is that you can infuse HTML code with JavaScript. You can create a representation of a DOM node by declaring the ‘element’ function in React. Unlike browser DOM elements, React elements are plain objects and can be created affordably. 
      While React was created to be used in the browser, its design makes it advantageous to use in the server with Node.</p>
 </div>
 <div>
    <h2>Difference between props and state
</h2>
<p>Props:
        The Data is passed from one component to another.It is Immutable .Props can be used with state and functional components.	 
        Props are read-only.</p>
      <p>  State:
        The Data is passed within the component only.It is Mutable.State can be used only with the state components/class component.
        State is both read and write.</p>
 </div>
 <div>
    <h2>What does the UseEffect API do other than load?</h2>
    <p> Validating an input while it's receiving characters is another great application for useEffect.
We can use useEffect to filter an array.</p>
 </div>
 
     
     
     </>

   
            

    );
};

export default Footer;