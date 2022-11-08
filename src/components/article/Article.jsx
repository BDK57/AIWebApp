import React from 'react'
import './article.css'
const Article = (props) => {
    return (
        <div className="gpt_blog-container_article">
            <div className="gpt_blog-container_article-image">
                <img src={props.imgUrl} alt="ImageArticle" />
            </div>
            <div className="gpt_blog-container_article-content">
                <div>
                    <p>{props.date}</p>
                    <h3>{props.title}</h3>
                </div>
            </div>
        </div>
    )
}

export default Article