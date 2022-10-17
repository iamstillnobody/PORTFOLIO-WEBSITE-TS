import React from 'react'
import "./portfolio.css"
import IMG1 from '../../assets/AC.jpg'
import IMG2 from '../../assets/NC.jpg'
import IMG3 from '../../assets/The_Loss.png'

const Portfolio: React.FC = () => {
  return (
    <section id='portfolio'>
      <h5>Our Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a calculator by Anna.</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/iamstillnobody/Calculator_Anna" className='btn' target='_blank'>Github</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>This is a calculator by Anastasia.</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/c0dead/Calculator_Anastasia" className='btn' target='_blank'>Github</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>This is our 2D platformer "The Loss". <br/> We are still working on it.</h3>
        </article>
      </div>
    </section>
  )
}

export default Portfolio