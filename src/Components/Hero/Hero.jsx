import React from 'react'
import "./Hero.css";
// import { GiRapidshareArrow } from "react-icons/gi";
// import student1 from "../../assets/s1.jpg"
// import student2 from "../../assets/s2.jpg"
// import student3 from "../../assets/s3.jpg"
// import student4 from "../../assets/s4.jpg"
import firstPic from "../../assets/first_pic.jpg"
import secondPic from "../../assets/second_pic.jpg"
import thirdPic from "../../assets/third_pic.jpg"
import fourthPic from "../../assets/fourth_pic.jpg"
// import { IoBookOutline } from "react-icons/io5";
// import { FaRegCheckCircle } from "react-icons/fa";
// import { FaUserFriends } from "react-icons/fa";
import { easeInOut, motion } from "framer-motion";

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero_content">
          <motion.h1
          initial={{opacity: 0, x: -100}}
          animate={{opacity: 1, x:0 }}
          transition={{duration: 0.4, delay: 0.2, ease: easeInOut}}
          exit={{
            opacity: 0, x: -100, transition: { duration: 0.2}
          }}
          ><span>Enroll </span> Your Kids In Kunfad Schools <span>Today</span></motion.h1>
          <p>We unlock your potential with courses designed to help you thrive in the digital age. Here we provide you with the tools to succeed.</p>
          <div className="buttons">
          {/* <GiRapidshareArrow className='hero_icon'/> */}
            {/* <a href="#" className="cta-button">Enroll Now</a>  */}
            {/* <a href="#" className="courses-button">Explore Our Courses</a> */}
          </div>
          
        </div>
        <div className="hero_images">
          <div className="img_top">
            <img src={firstPic} alt="" className='student_img'/>
            <img src={secondPic} alt="" className='student_img_one' />
          </div>
          <div className="img_bottom">
            <img src={thirdPic} alt="" className='student_img_two'/>
            <img src={fourthPic} alt="" className='student_img_three'/>
          </div>
        </div>
        
      
       
      </div>
      
    </div>
  )
}

export default Hero