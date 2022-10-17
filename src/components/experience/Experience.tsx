import React from 'react'
import './experience.css'
import {BsFillCheckCircleFill} from 'react-icons/bs'

const Experience: React.FC = () => {
  return (
    <section id='experience'>
      <h5>The Skills We Have</h5>
      <h2>Our Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">

          <h3>Frontend & Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-black'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-black'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-black'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>C++</h4>
                <small className='text-black'>Upper-Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-black'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-black'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-black'>Intermediate</small>
              </div>
            </article>

          </div>
        </div>
        {/* END OF FRONTEND & BACKEND */}

        <div className="experience__backend">
        <h3>Game Development</h3>

          <div className="experience__content">
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>C#</h4>
                <small className='text-black'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>Java</h4>
                <small className='text-black'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>Unity</h4>
                <small className='text-black'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>Unreal Engine</h4>
                <small className='text-black'>Basic</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>Photoshop</h4>
                <small className='text-black'>Intermediate</small>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience