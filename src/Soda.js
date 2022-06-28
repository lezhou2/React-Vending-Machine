import React, { Component } from 'react'
import { Link } from "react-router-dom";
import sodaImg from "./Soda.png";
import "./Soda.css";
import Message from "./Message";


class Soda extends Component {

    render() {
        return (
            <div className='Soda'>
                <img src={sodaImg} alt='coca cola' />
                <Message>
                <h1>Soda</h1>

<Link to="/">Go Back</Link>
                </Message>
               
        </div>)
    }

}

export default Soda;