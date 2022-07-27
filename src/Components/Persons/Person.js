import React, { Component } from 'react';
// import classes from './Person.module.css'
import Aux from "../../hoc/Auxiliary";

class Navbar extends Component 
{
    // <div className={classes.Navbar}>
    // </div>
    render(){
        return(
        <Aux>         
            <p onClick={this.props.click}>I am Navbar</p>
            <p>{this.props.name}</p>
            <p>{this.props.age}</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed} value={this.props.name} />        
        </Aux>
        );
    }
}

export default Navbar;