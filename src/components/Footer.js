import React from "react";
import logo from '../images/Logo .svg'

const Footer = () => {
    return (
        <footer>
            <section>
                <div className="company-info">
                    <img src={logo} alt="logo" />
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                </div>

                <div>
                    <h3>Important links</h3>
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Menu</a></li>
                        <li><a>Reservations</a></li>
                        <li><a>Order online</a></li>
                        <li><a>Login</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>City: <br></br>Chicago</li>
                        <li>Tel:  <br></br>555 555 555</li>
                        <li>Mail:  <br></br>little@lemon.com</li>
                    </ul>
                </div>

                <div>
                    <h3>Socials</h3>
                    <ul>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>TikTok</li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}

export default Footer;