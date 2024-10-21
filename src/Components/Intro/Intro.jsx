import React from 'react'
import "./Intro.css"
import Watsapp from "../../img/watsapp.png"
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Leetcode from '../../img/leetcode.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import {motion} from 'framer-motion'
import {Link} from "react-scroll"

const Intro = () => {
    const transition = { duration: 2, type: 'spring' }

    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hi! I Am</span>
                    <span>Sumit Kumar Shaw</span>
                    <span>"I see problems --&gt; I break them --&gt; I strategize --&gt; I persist --&gt; I won't rest until I've pieced them together."</span>
                </div>

                <Link spy={true} to='Contact' smooth={true}><button className='button i-button'>Hire me</button></Link>
                <div className="i-icons">
                    <a href="https://wa.me/8274060134?text=Hi, How may I help you?"><img src={Watsapp} alt="" /></a>
                    <a href="https://linkedin.com/in/sumit-kumar-shaw-723170191/"><img src={LinkedIn} alt="" /></a>
                    <a href="https://github.com/Sumit0134"><img src={Github} alt="" /></a>
                    <a href="https://leetcode.com/u/sumit0134/"><img src={Leetcode} alt="" /></a>
                </div>
            </div>

            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <motion.img
                    initial={{ left: "-36%" }}
                    whileInView={{ left: "-24%" }}
                    transition={transition}
                    src={glassesimoji} alt="" />
                <motion.div
                    initial={{top: '-4%', left:'74%'}}
                whileInView={{left: '68%'}}
                transition={transition}
            style={{top: '-4%', left: '38%'}}
            className='floating-div'
            >
                <FloatingDiv image={crown} txt1="Ex STEM" txt2="Trainer" />
            </motion.div>
            <motion.div 
            initial={{top: "18rem", left: '9rem'}}
            whileInView={{left: "4rem"}}
            transition={transition}
            style={{ top: '18rem', left: '4rem', width: "20rem"}}
            className='floating-div'
            >
                <FloatingDiv image={thumbup} txt1="Software Engineer-to-be"/>
            </motion.div>
            <div className="blur" style={{ background: "rgb(238 210 255" }}></div>
            <div className="blur" style={{ background: "#C1F5FF", top: '17rem', width: '21rem', height: '11rem', left: '-9rem' }}></div>

        </div>
    </div >
  )
}

export default Intro
