import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className=' footer'>
            <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       How react works  
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      React JS is that you can infuse HTML code with JavaScript. You can create a representation of a DOM node by declaring the ‘element’ function in React. Unlike browser DOM elements, React elements are plain objects and can be created affordably. 
      While React was created to be used in the browser, its design makes it advantageous to use in the server with Node.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Difference between props and state
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>Props:
        The Data is passed from one component to another.It is Immutable .Props can be used with state and functional components.	 
        Props are read-only.</p>
      <p>  State:
        The Data is passed within the component only.It is Mutable.State can be used only with the state components/class component.
        State is both read and write.</p>

      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      What does the UseEffect API do other than load?      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Validating an input while it's receiving characters is another great application for useEffect.
       We can use useEffect to filter an array.      </div>
    </div>
  </div>
</div>
            

        </div>
    );
};

export default Footer;