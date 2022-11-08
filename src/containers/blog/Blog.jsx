import React from 'react'
import './blog.css'
import { Article } from '../../components'
import { blog1, blog2, blog3, blog4, blog5 } from './imports'
const Blog = () => {
    return (
        <div className="gpt_blog section_padding">
            <div className="gpt_blog-heading">
                <h1 className='gradient_text'>A Alot is Happiness we Are Blogging About it.</h1>

            </div>
            <div className="gpt_blog-container">
                <div className="gpt_blog-container_groupA">
                    <Article imgUrl={blog1} date="26 Sep, 2022" title="TitleOFArticle" />
                </div>
                <div className="gpt_blog-container_groupB">
                    <Article imgUrl={blog2} date="26 Sep, 2022" title="TitleOFArticle" />
                    <Article imgUrl={blog3} date="26 Sep, 2022" title="TitleOFArticle" />
                    <Article imgUrl={blog4} date="26 Sep, 2022" title="TitleOFArticle" />
                    <Article imgUrl={blog5} date="26 Sep, 2022" title="TitleOFArticle" />
                </div>
            </div>
        </div>
    )
}

export default Blog