import React from 'react'
import "./Works.css"
import Python from "../../img/python.png"
import App from "../../img/app.png"
import Logo from "../../img/logo.png"
import Game from "../../img/game.png"
import D3 from "../../img/3d.png"
import Certificate from "../../img/Experience_Certificate.pdf"
import { motion } from "framer-motion"

const Works = () => {
    return (
        <div className="works" id='Works'>
            <div className="awesome">
                <span>Experienced STEM Trainer</span>
                <span>Futurite</span>
                <span>
                    <ul>
                        <li>Developed and delivered comprehensive training programs in various STEM modules such as
                            <br />
                            Python Programming, 3D Designing, Game Development, App Development, and Building Circuits.</li>
                        <br />

                        <li>Provided personalized mentorship to students, assisting them with coding projects,
                            <br />
                            debugging issues, and developing
                            efficient solutions.</li>
                        <br />

                        <li>Led a workshop on STEM and Robotics, training over 75 students, and
                            <br />
                            received an appreciation letter for outstanding
                            performance.</li>
                    </ul>
                </span>
                <a href={Certificate}><button className="button s-button">Certificate</button></a>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>

            <div className="w-right">
                <motion.div
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: "-40px" }}
                    transition={{ duration: 3.5, type: "spring" }}
                    className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Python} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={App} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Game} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={D3} alt="" />
                    </div>
                </motion.div>
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    )
}

export default Works
