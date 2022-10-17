import React from 'react'
import './about.css'
import US from '../../assets/us-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineFolderOpen} from 'react-icons/ai'

const About: React.FC = () => {
  return (
    <section id='about'>
      <h5>Get To Know Us</h5>
      <h2>About Us</h2>

      <div className="container about__container">
        <div className="about__us">
          <div className="about__us-image">
            <img src={US} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>4 years studying</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>be the first one</small>
            </article>

            <article className='about__card'>
              <AiOutlineFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>3 completed</small>
            </article>
          </div>

            <p>
              Hello, world! It's Anna and Anastasia. <br/> We are passionate creators with 4 years of development experience with programming languages and 2D animations. Skilled in designing user-friendly yet innovative games.
            </p>

        </div>
      </div>
    </section>
  )
}

export default About