import React from 'react'
import "./Footer.css"
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { slideUp } from "../Steps/Steps"
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <div>
        <div className="footer">
            <div className="container">
                <motion.div
                 variants={slideUp(0.7)}
                 initial="hidden"
                 whileInView= "show"
                 className="footer_details">
                    <h1>Academic Skills</h1>
                    <p>Academic skills are set of competencies and techniques related to studying, researching, critical thinking and communication that facilitate effective learning and knowledge acquistion.</p>
                    {/* <motion.div
                     variants={slideUp(1.0)}
                     initial="hidden"
                     whileInView= "show"
                     className="footer_links">
                        <h2>LINKS</h2>
                        <ul>
                            <li>Home</li>
                            <a href="#about"><li>About</li></a>
                            <li>Contact</li>
                        </ul>
                        
                    </motion.div> */}
                    <motion.div
                     variants={slideUp(1.3)}
                     initial="hidden"
                     whileInView= "show"
                     className="footer_socials">
                        <h2>Follow Us On</h2>
                        <div className="icons">
                        <FaFacebook className='footer_icon'/>
                        <BsInstagram className='footer_icon'/>
                        <BsTwitterX className='footer_icon'/>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Footer