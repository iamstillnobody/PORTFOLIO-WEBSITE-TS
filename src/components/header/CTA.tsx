import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA: React.FC = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn btn-primary'>download CV</a>
        <a href="#contact" className='btn btn-primary'>contact</a>
    </div>
  )
}

export default CTA