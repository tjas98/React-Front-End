import React from "react"
import logo from '../images/Logo .svg'

const Nav = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo"/>
            <ul className="nav-links">
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Menu</a></li>
                <li><a>Reservations</a></li>
                <li><a>Order online</a></li>
                <li><a>Login</a></li>
            </ul>
        </nav>
    )
};

export default Nav;

