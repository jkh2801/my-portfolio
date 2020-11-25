import './Nav.scss'
import {Link} from 'react-router-dom'
import { useState } from 'react'

export default function Nav() {
    console.log("nav")
    const [navState, setNavState] = useState(false)
    window.addEventListener("scroll", () => window.scrollY > 0 ? setNavState(true) : setNavState(false))
    return (
        <header>
            <div className={`nav ${navState > 0 ? "sticky" : ""}`}>
                <div className="logo"><span>M</span>y <span>P</span>ortfolio</div>
                <ul className="navigation">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/skills">Skill</Link></li>
                    <li><Link to="/project">Project</Link></li>
                    <li><Link to="contact">Contact</Link></li>
                </ul>
            </div>
        </header>
    )
}