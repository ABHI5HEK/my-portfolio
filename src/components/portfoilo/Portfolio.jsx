import React from 'react'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        {/*https://abhi5hek.github.io/my-portfolio*/}
        <div className="containter portfolio__container">

            <article className='portfolio__item'>
                <div className='portfolio__item-image'></div>
                <h3>This is a portfolio item title</h3>
                <a href='' className='btn'>GitHub</a>
                <a href='' className='btn btn-primary' target={_blank}>Live Demo</a>

            </article>

        </div>

    </section>
  )
}

export default Portfolio