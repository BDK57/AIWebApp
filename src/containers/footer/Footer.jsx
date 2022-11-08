import React from 'react'
import './footer.css'
import logo from '../../assets/logo.svg'
const Footer = () => {
    return (
        <div className="gpt_footer section_padding">
            <div className="gpt_footer-heading">
                <h1 className="gradient_text">Do Yo Want To Step into Future Before Others</h1>

            </div>
            <div className="gpt_footer-btn">
                <p>Request Early Access</p>
            </div>

            <div className="gpt_footer-links">
                <div className="gpt_footer-links_logo">
                    <img src={logo} alt="Logo" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ab odit dolor!</p>
                </div>
                <div className="gpt_footer-links_div">
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Web 3.0</p>
                    <p>Contact</p>
                </div>

                <div className="gpt_footer-links_div">
                    <h4>Company</h4>
                    <p>Terms And Condition</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>

                <div className="gpt_footer-links_div">
                    <h4>Get in Touch</h4>
                    <p>032156-5223</p>
                    <p>BadshahDev57@gmail.com</p>

                </div>
            </div>

            <div className="gpt_footer-copyright">
                <p>CopyRight by Badshah Development</p>
            </div>
        </div>
    )
}

export default Footer