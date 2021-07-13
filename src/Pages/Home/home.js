import React from 'react'
import './home.css'
import { Link } from 'react-router-dom';

function home() {
    return (
        <div className = "main">
        <div>
            <img className="img11" src='img/bg.jpg' ></img>
        </div>
        <div className = " main2">
        <div className = "content">
                <Link to = "/register"><button>Register</button></Link>
                 <Link to = "/login"><button>Login</button></Link>
        </div>
        </div>
        </div>
    )
}

export default home
