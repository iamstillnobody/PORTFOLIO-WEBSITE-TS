import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services: React.FC = () => {
  return (
    <section id='services'>
      <h5>What We Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating captivating websites for your business, artwork, etc.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating atmospheric games with breathtaking storylines.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}

        <article className="service">
          <div className="service__head">
            <h3>Education</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Providing succinct and easy-to-understand coding lessons.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}


      </div>
    </section>
  )
}

export default Services