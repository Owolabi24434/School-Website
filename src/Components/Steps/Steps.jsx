import React from 'react'
import "./Steps.css";
import { FcReadingEbook } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";
import { IoIosPeople } from "react-icons/io";
import { easeInOut, motion } from "framer-motion"
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";

export const slideUp = (delay) => {
    return {
        hidden: {
            opacity: 0,
            y: 100,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: delay,
                ease: easeInOut
            }
        }
    }
}

const Steps = () => {
  return (
    <div>
    <div className='steps'>
        <div className="step">
            <motion.div
            variants={slideUp(0.2)}
            initial="hidden"
            whileInView= "show"
             className="step_list">
            <FcReadingEbook className='icon'/>
            <div className="content">
                <h3>Interactive Learning</h3>
                <p>Engage with hands-on project and real-world scenarios and learn from highly seasoned professional teachers.</p>
            </div>
            </motion.div>
            <motion.div
            variants={slideUp(0.6)}
            initial="hidden"
            whileInView= "show"
             className="step_list">
            <FcApproval className='icon'/>
            <div className="content">
                <h3>Accredited Subjects</h3>
                <p>Gain knowledge that will make you stand out in the labour market and earn certifications that are recognized by employers worldwide.</p>
            </div>
            </motion.div>
            <motion.div
            variants={slideUp(1.1)}
            initial="hidden"
            whileInView= "show"
             className="step_list">
            <IoIosPeople className='icon'/>
            <div className="content">
                <h3>Support</h3>
                <p>Cultivate a supportive environment that promotes strong relationships among staff, students, and families.</p>
            </div>
            </motion.div>
           
        </div>
    </div>
     <div className="about" id='about'>
     <h1><u>ABOUT <span>SCHOOL</span></u></h1><br/><br/>
     <h2>Our Corporate Philosophy:</h2><br/><br/>
     <h4><u>VISION</u></h4><br/><br/>
     <p>To be among the best in the world in the provision of qualitative education of international standard at all levels. At Kunfad Schools we encourage every child to discover his/her academic strengths.</p><br/><br/>
     <h4><u>CORE VALUES</u></h4><br/><br/>
     <ol>
        <li>1. Leadership</li><br/>
        <li>2. Excellence</li><br/>
        <li>3. Empower Teachers</li><br/>
        <li>4. Passion For Pupils And Their Parents</li><br/>
        <li>5. Professionalism</li><br/>
        <li>6. Innovation</li><br/>
     </ol><br/><br/>
     <h4><u>ORIGIN</u></h4><br/><br/>
     <p>On the 25th day of the month of September in the year 2008 Kunfad Schools began with five pupils and two teachers at the temporary site as a private owned institution which is not profit oriented but building better leaders of tomorrow. The founders of Kunfad Schools are Engr. Olakunle Adegbite(the proprietor) and Mrs Fadekemi Adegbite(the proprietress).<br/><br/>
        In the same year, the institution commenced teaching with well qualified teachers and therefore provided qualitative and affordable education.
        By the special grace of God, we moved to our permanent site on 9th of January 2012 with reasonable number of pupils.</p><br/><br/>
        <h4><u>OUR PROMISE</u></h4><br/><br/>
        <p>That our sons maybe as plants grown in their youths, that our daughters may be as a cornerstone polished within the stipulated palace.</p><br/><br/>

        
 </div>
 <div className="contact" id='contact'>
    <div className="contact-container">        
        <h1><u>Contact Us</u></h1>
        <h2>KUNFAD SCHOOLS</h2>
        <div className='contact-icon'>
            <BsFillTelephoneFill size= "70"/> <p>+2347066282416</p>
        </div>
        <div className="contact-icons">
        <FaAddressBook  size="70"/> <p>3rd Avenue Via Massah Off Odonla Ikorodu Lagos State.</p>
        </div>
        <div className='contact-ico'>
        <FaLocationArrow size="70"/> <p>Nigeria</p>
        </div>
    </div>
 </div>
 </div>
 
  )
}

export default Steps