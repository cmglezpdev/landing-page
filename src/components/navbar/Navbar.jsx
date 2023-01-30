import './navbar.scss';

export const Navbar = () => {

  return (

    <nav className="nav container-nav" id="nav">
      <div className="nav__logo">
          <span>Cars</span>
      </div>
      
      <ul className='nav__links'>
          <li className="nav__item">
              <a href="#app" className='nav__link'>Home</a>
              <div className="underline"></div>
          </li>
          <li className="nav__item">
              <a href="#about" className='nav__link'>About</a>
              <div className="underline"></div>
          </li>
          <li className="nav__item">
              <a href="#skills" className='nav__link'>Skills</a>
          </li>
          <li className="nav__item">
              <a href="#works" className='nav__link'>Works</a>
              <div className="underline"></div>
          </li>
          <li className="nav__item">
              <a href="#contact" className='nav__link'>Contact</a>
              <div className="underline"></div>
          </li>
      </ul>

      <a href="#nav" className="nav__hamburguer">
          <img src='/menu.svg' className="nav__icon" alt='open' />
      </a>
      
      <a href="#other" className="nav__close">

          <img src='/close.svg' className="nav__icon" alt='close' />
      </a>
    </nav>  
  )
}
