import React, { useState } from 'react';
import './Header.css'

const Header = ({minute,second,name1,name2}) => {

    const [next, setNext] = useState(true)

    return (
        <header>
            <div>
                <span className='useName1'>{name1}</span>
            </div>

            <div>
                <p className='time'>Time: {minute < 10 ? "0"+minute : minute} : {second < 10 ? "0"+second: second}</p>
            </div>

            <div>
                <span className='useName2'>{name2}</span>
            </div>
        </header>
    );
};

export default Header;