import React from 'react'
import './feature.css'
import { Feature } from '../../components'

const featureData = [{
    title: "Improving end Distructs Instantly",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium modi asperiores odit dolorum voluptas architecto, expedita ea molestiae animi tempora, exercitationem consectetur voluptatibus iusto reprehenderit voluptate. Nesciunt nam doloribus eaque porro corrupti!"
},
{
    title: "Become The tended active",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium modi asperiores odit dolorum voluptas architecto, expedita ea molestiae animi tempora, exercitationem consectetur voluptatibus iusto reprehenderit voluptate. Nesciunt nam doloribus eaque porro corrupti!"
},
{
    title: "Message or am Nothing",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium modi asperiores odit dolorum voluptas architecto, expedita ea molestiae animi tempora, exercitationem consectetur voluptatibus iusto reprehenderit voluptate. Nesciunt nam doloribus eaque porro corrupti!"
},
{
    title: "Really boy And Law",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium modi asperiores odit dolorum voluptas architecto, expedita ea molestiae animi tempora, exercitationem consectetur voluptatibus iusto reprehenderit voluptate. Nesciunt nam doloribus eaque porro corrupti!"
}



]
const Features = () => {
    return (
        <div className="gpt_features section_padding">
            <div className="gpt_feature-heading">
                <h1 className="gradient_text">The Future is Now And You Need To Realize It.Step into Future Today & Make it Happen</h1>
                <p>Request Early Access to Get Started</p>
            </div>
            <div className="gpt_feature-container">
                {featureData.map((data, index) => (
                    <Feature title={data.title} text={data.text} />
                ))}
            </div>
        </div>

    )
}

export default Features