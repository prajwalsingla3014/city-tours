import React from 'react'
import './Navbar.css'
import logo from "../../logo.png"
export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="City Tours logo" />
            <ul className="list"> 
                <li className="liststyle"><a href="/" className="link">Home</a></li>
                <li className="liststyle"><a href="/" className="link">About</a></li>
                <li className="liststyle"><a href="/" className="link active">Contact</a></li>
            </ul>
        </nav>
    )
}
