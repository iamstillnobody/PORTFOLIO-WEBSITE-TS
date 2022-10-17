import React from 'react'
import './header.css'
import CTA from './CTA'
import US from '../../assets/us.png'

const Header: React.FC = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>hello, we are</h5>
        <h1>Anna & Anastasia</h1>
        <h5>aspiring developers</h5>

        <CTA />

        <div className="us">
          <img src={US} alt="us" />
        </div>

      </div>
    </header>
  )
}

export default Header