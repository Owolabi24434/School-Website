import React, { useState } from 'react'
import "./Navbar.css"
import { TiTimes } from "react-icons/ti";
import { CgMenuMotion } from "react-icons/cg";
import { motion } from "framer-motion";

const Navbar = () => {
    const [Mobile, setMobile] = useState(false);
  return (
    <div>
        <div
        // initial= {{opacity: 0}}
        // animate= {{opacity: 1}}
        // transition={{duration: 1, delay: 0.5}}
         className="navbar">
            <div className="nav-logo">
                <h2>Educational</h2>
            </div>
            <div className={Mobile ? "nav-links": "links"} onClick={ () => setMobile(false)}>
                <ul>
                    {/* <a href="#home"><li>Home</li></a>
                    <a href="#about"><li>About School</li></a>
                    <a href="#contact"><li>Contact</li></a> */}
                    <a href="#"><li>Home</li></a>
                    <a href="#about"><li>About</li></a>
                    <a href="#contact"><li>Contact</li></a>

                </ul>
            </div>
            {/* <div className="nav_btn">
                <button>Enroll Now</button>
            </div> */}
            <button className="toggle" onClick={()=> setMobile(!Mobile)}>
            {Mobile ? <TiTimes className='close_icon'/> : <CgMenuMotion className='open_icon'/>}           
            </button>
        </div>
    </div>
  )
}

export default Navbar