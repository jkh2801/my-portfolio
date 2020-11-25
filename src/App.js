import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import Nav from './components/Nav.js'
import Home from './components/Home.js'
import About from './components/About.js'
import Skill from './components/Skill.js'
import Project from './components/Project.js'
import Contact from './components/Contact.js'
import { useEffect } from 'react';

export default function App() {
  const heights = []
  useEffect(() => {
    const section = document.querySelectorAll('section')
    section.forEach((item) => heights.push(item.offsetTop))
  }) 
  return  (
    <div className="App">
      <Router>
        <Nav heights={heights}/>
        <Home/>
        <About/>
        <Skill/>
        <Project/>
        <Contact/>
      </Router>
    </div>
  )
}