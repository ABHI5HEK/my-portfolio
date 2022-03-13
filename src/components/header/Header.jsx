import React from 'react'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import './header.css'

const Header = () => {
  return (
    <header>
        <div className='container header__container'>
            <h5>
                Hello I'm
            </h5>
            <h1>Abhishek Kumar Singh</h1>
            <h5 className='text-light'>FullStack Developer | Android Developer</h5>
            <CTA/>
            <a href='#contact' className='scroll__down'>Scroll Down</a>
           
            <HeaderSocials/>
            <div className="me">
            <img 
             src={ME} alt="myimage"
            />
            </div>  
        </div>
    </header>
  )
}

export default Header