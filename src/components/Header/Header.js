import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import './Header.css'

const Header = () => {
    return (
        <div>
           
            <h1><FontAwesomeIcon className='icon' icon ={faNetworkWired}></FontAwesomeIcon>Keep Healthy</h1>
        </div>
    );
};

export default Header;