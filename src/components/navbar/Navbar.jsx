import React from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
// import logo from '../../assets/logoModrenApp/src/assets/logo.png'

import logo from '../../assets/logo.svg'
import { useState } from 'react'

// const Menu = () => {
//     <>
//         <p><a href="#home">Home</a></p>
//         <p><a href="#wgpt">What is GPT</a></p>
//         <p><a href="#possibilitiy">Open AI</a></p>
//         <p><a href="#features">Case Studies</a></p>
//         <p><a href="#blog">Library</a></p>

//     </>
// }

const Navbar = () => {
    const [toggleMenu, settoggleMenu] = useState(false)
    return (
        <div className="gpt_navbar">
            <div className="gpt_navbar-links">
                <div className="gpt__navbar-links_logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="gpt_navbar-links_container">
                    <p><a href="#home">Home</a></p>
                    <p><a href="#wgpt">What is GPT</a></p>
                    <p><a href="#possibilitiy">Open AI</a></p>
                    <p><a href="#features">Case Studies</a></p>
                    <p><a href="#blog">Library</a></p>

                </div>
            </div>
            <div className="gpt_navbar-sign">
                <p>Sign In</p>
                <button type='button'>Sign Up</button>
            </div>

            <div className="gpt__navbar-menu">
                {

                    toggleMenu ? <RiCloseLine color='#fff' size={27} onClick={() => {
                        settoggleMenu(false)
                    }} /> : <RiMenu3Line color='#fff' size={27} onClick={() => {
                        settoggleMenu(true)
                    }} />
                }
                {toggleMenu && (
                    <div className="gpt_navbar-menu_container scale-up-center ">
                        <div className="gpt_navbar-menu_container-links">
                            <p><a href="#home">Home</a></p>
                            <p><a href="#wgpt">What is GPT</a></p>
                            <p><a href="#possibilitiy">Open AI</a></p>
                            <p><a href="#features">Case Studies</a></p>
                            <p><a href="#blog">Library</a></p>
                            <div className="gpt_navbar-menu_container-links-sign">
                                <p>Sign In</p>
                                <button type='button'>Sign Up</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div >
    )
}

export default Navbar