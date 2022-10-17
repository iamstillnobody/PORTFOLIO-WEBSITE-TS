import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'
import {FaTelegramPlane} from 'react-icons/fa'
import {BsYoutube} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer: React.FC = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>ANNA & ANASTASIA</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://instagram.com"><BsInstagram/></a>
        <a href="https://telegram.org"><FaTelegramPlane/></a>
        <a href="https://youtube.com"><BsYoutube/></a>
        <a href="https://github.com"><BsGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; ANNA & ANASTASIA. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer