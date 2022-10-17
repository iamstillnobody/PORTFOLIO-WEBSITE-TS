import React from 'react'
import './nav.css'
import {RiHome4Fill} from 'react-icons/ri'
import {RiUser3Fill} from 'react-icons/ri'
import {FaBook} from 'react-icons/fa'
import {MdBusinessCenter} from 'react-icons/md'
import {BsFillChatLeftTextFill} from 'react-icons/bs'
import {useState} from 'react'

const Nav: React.FC = () => {
  const [activeNav, setActiveNav] = useState<string>('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><RiHome4Fill/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><RiUser3Fill/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaBook/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdBusinessCenter/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BsFillChatLeftTextFill/></a>
    </nav>
  )
}

export default Nav