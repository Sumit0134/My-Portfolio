import React from 'react'
import "./Navbar.css"
import {Link} from "react-scroll"

const Navbar = () => {
    return (
        <div className="n-wrapper" id='Navbar'>
            <div className="n-left">
                <a href="/" style={{ textDecoration: "none", color: "var(--black)"}}><div className="n-name">Sumit</div></a>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <Link spy={true} to='Navbar' smooth={true}><li>Home</li></Link>
                        <Link spy={true} to='Services' smooth={true}><li>Skills</li></Link>
                        <Link spy={true} to='Portfolio' smooth={true}><li>Projects</li></Link>
                        <Link spy={true} to='Works' smooth={true}><li>Experience</li></Link>
                    </ul>
                </div>
                <Link spy={true} to='Contact' smooth={true}><button className="button n-button">Contact me</button></Link>
            </div>
        </div>
    )
}

export default Navbar
