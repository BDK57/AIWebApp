import React from 'react'
import './feature.css'
// import '../../../src/index.css'
const Feature = (props) => {
    return (
        <div className="gpt_features-container_feature">
            <div className="gpt_features-container_feature-title">
                <div className=' gpt_features_container-feature-bar' />
                <h1 className='gpt_features-container_feature-title-h1'>{props.title}</h1>
            </div>
            <div className="gpt_features-container_feature-text">
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default Feature