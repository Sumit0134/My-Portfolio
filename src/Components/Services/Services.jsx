import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
// import Resume from '../../img/resume.png'
import {motion} from "framer-motion"   

const Services = () => {
const transition={duration: 1, type: "spring"}

    return (
        <div className="services" id="Services">
            <div className="awesome">
                <span>My Awesome</span>
                <span>Skills</span>
                <span>
                "I learn at a steady pace because I believe it helps me remember things better in the long run."
                </span>
                <a href=""><button className="button s-button">Download CV</button></a>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>

            <div className="cards">
                <motion.div 
                initial={{left: "25%"}}
                whileInView={{left: "25rem"}}
                transition={transition}
                style={{left: "14rem"}}>
                    <Card
                    emoji={HeartEmoji}
                    heading={"Programming Languages"}
                    detail={"C/C++, Java, Python, Golang"}
                    />
                </motion.div>
                <motion.div 
                initial={{top: "12rem", left: "2rem"}}
                whileInView={{left: "5rem"}}
                transition={transition}
                style={{top: "12rem", left: "-4rem"}}>
                    <Card
                    emoji={Glasses}
                    heading={"Web Technologies"}
                    detail={"HTML5, CSS3, JavaScript, Node.js, Express, React"}
                    />
                </motion.div>
                <motion.div 
                initial={{top: "19rem", left: "12rem"}}
                whileInView={{left: "22rem"}}
                transition={transition}
                style={{top: "19rem", left: "12rem"}}>
                    <Card
                    emoji={Humble}
                    heading={"Core Competencies"}
                    detail={"OOPS, Data Structures, Algorithms"}
                    />
                </motion.div>
                <motion.div 
                initial={{top: "19rem", left: "-8rem"}}
                whileInView={{left: "-12rem"}}
                transition={transition}
                style={{top: "19rem", left: "12rem"}}>
                    <Card
                    emoji={HeartEmoji}
                    heading={"Database Management & Version Control"}
                    detail={"SQL, MongoDB, Git, GitHub"}
                    />
                </motion.div>
                <motion.div 
                initial={{top: "12rem", left: "-8rem"}}
                whileInView={{left: "-29rem"}}
                transition={transition}
                style={{top: "19rem", left: "12rem"}}>
                    <Card
                    emoji={Humble}
                    heading={"Design & Development Tools"}
                    detail={"Visual Studio Code, Figma, Canva"}
                    />
                </motion.div>
                <motion.div 
                initial={{top: "19rem", left: "-8rem"}}
                whileInView={{left: "-46rem"}}
                transition={transition}
                style={{top: "19rem", left: "12rem"}}>
                    <Card
                    emoji={Glasses}
                    heading={"Soft Skills"}
                    detail={"Strong Communication, Adaptability"}
                    />
                </motion.div>
                <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
            </div>
        </div>
    )
}

export default Services
