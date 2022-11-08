import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
const Header = () => {
    return (
        <div className="gpt_header section_padding">
            <div className="gpt_header-content">
                <h1 className="gradient_text">Let's Build Something with GPT-3 Open AI</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat modi reprehenderit dicta?</p>

                <div className="gpt_header-content_input">
                    <input type="email" placeholder='Your Email Address' />
                    <button type='button'>Get Started</button>
                </div>

                <div className="gpt_header-content_people ">
                    <img src={people} alt="People" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati quia natus doloribus?</p>
                </div>

            </div>
            <div className="gpt_header-image">
                <img src={ai} alt="AI" />
            </div>
        </div>
    )
}

export default Header