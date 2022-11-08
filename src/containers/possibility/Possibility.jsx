import React from 'react'
import './possibility.css'
import possibilityImg from '../../assets/possibility.png'
const Possibility = () => {
    return (
        <div className="gpt_possibility section_margin reveal" id='possibility'>
            <div className="gpt_possibility-image">
                <img src={possibilityImg} alt="possibility-Img" />
            </div>
            <div className="gpt_possibility-content">
                <h4>Request Early Access To Get Started </h4>
                <h1 className='gradient_text'>The Possibilities are beyon Your Imagination</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque qui ipsum, perspiciatis quae repellat nobis voluptate distinctio ad, saepe earum iste nesciunt laborum sint. Unde velit aut quam optio ratione consequatur. Totam.</p>
                <h4>Request Early Access To Get Started </h4>

            </div>
        </div>
    )
}

export default Possibility