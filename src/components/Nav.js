import './Nav.scss'
import {Link} from 'react-router-dom'
import { useState } from 'react'

export default function Nav(props) {
    const scrollEvent = (idx) => {
        window.scrollTo({top: props.heights[idx], behavior: 'smooth'})
    }
    const [navState, setNavState] = useState(false)
    window.addEventListener("scroll", () => {
        window.scrollY > 0 ? setNavState(true) : setNavState(false)
    })
    return (
        <header>
            <div className={`nav ${navState > 0 ? "sticky" : ""}`}>
            <div className="logo"><span>M</span>y-<span>P</span>ortfolio</div>
                <ul className="navigation">
                    <li><Link to="/" onClick={() => scrollEvent(0)}>Home</Link></li>
                    <li><Link to="/about" onClick={() => scrollEvent(1)}>About</Link></li>
                    <li><Link to="/skills" onClick={() => scrollEvent(2)}>Skill</Link></li>
                    <li><Link to="/project" onClick={() => scrollEvent(3)}>Project</Link></li>
                    <li><Link to="contact" onClick={() => scrollEvent(4)}>Contact</Link></li>
                </ul>
            </div>
        </header>
    )
}