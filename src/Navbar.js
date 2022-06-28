import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component{

    render() {
        return (
            <div className="Navbar">
                     <NavLink activeClassName="Navbar-active" to="/">Home</NavLink>
                
                    <NavLink activeClassName="Navbar-active" to="soda">Soda</NavLink>
                    <NavLink activeClassName="Navbar-active" to= "chips">Chips</NavLink>
                    <NavLink activeClassName="Navbar-active" to= "sardines">Sardines</NavLink>
            </div>
        )
    }
}


export default Navbar;