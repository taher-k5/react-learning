import React from 'react';
import './Navbar.css'

const Navbar = (props) => {
    return <div className="Navbar">
        <p onClick={props.click}>I am Navbar</p>
        <p>{props.name}</p>
        <p>{props.age}</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
    </div>;
};

export default Navbar;