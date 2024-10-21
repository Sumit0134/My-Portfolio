import React from 'react'
import "./Footer.css"
import Wave from "../../img/wave.png"
import Watsapp from "@iconscout/react-unicons/icons/uil-whatsapp"
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin"
import Github from "@iconscout/react-unicons/icons/uil-github"

const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width: "100%"}}/>
        <div className="f-content">
            <a href="mailto:sumitshaw8274060134@gmail.com" style={{textDecoration: "none", color: 'white', cursor: "pointer"}}><span>sumitshaw8274060134@gmail.com</span></a>
            <div className="f-icons">
                <a href="https://wa.me/8274060134?text=Hi, How may I help you?"><Watsapp color="white" size={"3rem"}/></a>
                <a href="https://linkedin.com/in/sumit-kumar-shaw-723170191/"><LinkedIn color="white" size={"3rem"}/></a>
                <a href="https://github.com/Sumit0134"><Github color="white" size={"3rem"}/></a>
            </div>
        </div>
    </div>
  )
}

export default Footer
