import React, { Component } from 'react';
import { Link } from "react-router-dom";
import chipsImg from "./Chips.png";
import "./Chips.css";
import Message from "./Message";


class Chips extends Component {

    render() {
        return (
            
                <div className='Chips'>
                <img src={chipsImg} alt='chips' />
                <Message>
                <h1>Chips</h1>
    
                <Link to="/">Go Back</Link>
                </Message>
                   
            </div>)
    }

}

export default Chips;