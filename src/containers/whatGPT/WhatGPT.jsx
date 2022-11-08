import React from 'react'
import './whatGPT.css'
import { Feature } from '../../components'
const WhatGPT = () => {
  return (
    <div className="gpt_whatgpt section_margin reveal" id='wgpt'>
      <div className="gpt_whatgpt-feature">
        <Feature title="What is GPT-3" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic ducimus unde eveniet recusandae corrupti quidem voluptates amet voluptatibus facilis nobis quos rem repellat, minus cupiditate sed ipsam quis fugiat repudiandae quas explicabo!" />
      </div>

      <div className="gpt_whatgpt-heading">
        <h1 className="gradient_text">The Possibilites Are beyond your Imagination</h1>
        <p>Explore the Library</p>
      </div>

      <div className="gpt_whatgpt-container">
        <Feature title="ChatBoats" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae deleniti neque nostrum dignissimos, consequatur error? Natus atque omnis culpa pariatur adipisci facilis unde nisi soluta, necessitatibus id optio odit. Perspiciatis, ducimus maiores.
        " />
        <Feature title="Knowledge Base" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae deleniti neque nostrum dignissimos, consequatur error? Natus atque omnis culpa pariatur adipisci facilis unde nisi soluta, necessitatibus id optio odit. Perspiciatis, ducimus maiores.
        " />
        <Feature title="Education" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae deleniti neque nostrum dignissimos, consequatur error? Natus atque omnis culpa pariatur adipisci facilis unde nisi soluta, necessitatibus id optio odit. Perspiciatis, ducimus maiores.
        " />
      </div>
    </div>
  )
}

export default WhatGPT