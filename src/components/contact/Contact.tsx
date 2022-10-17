import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaTelegramPlane} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.sendForm('service_fxrug84', 'template_r9o610j', form.current!, 'RZxtnK73wWa1cfIRo');
      
    (e.target as HTMLFormElement).reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Us</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>ouremail@gmail.com</h5>
            <a href="mailto:annaromankina1609@gmail.com" target="_blank">send a message</a>
          </article>

          <article className="contact__option">
            <FaTelegramPlane className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>@ourProfile</h5>
            <a href="https://telegram.me/aannihilatedd" target="_blank">send a message</a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='your full name' required />
          <input type="email" name='email' placeholder='your email' required />
          <textarea name="message" rows={7} placeholder='enter your message...' required ></textarea>
          <button type='submit' className='btn btn-primary'>send the message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact