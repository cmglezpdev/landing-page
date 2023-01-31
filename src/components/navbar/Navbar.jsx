import { IoCarSportSharp } from 'react-icons/io5';
import { resoursePathInProduction } from '../../helpers/path-resources';

import './navbar.scss';

export const Navbar = () => {

  return (

    <nav className="nav" id='nav'>
      <div className="nav__logo">
          <IoCarSportSharp className='icon' />
          <span>Cars</span>
      </div>
      
      <ul className='nav__links'>
          <li className="nav__item">
              <a href="#home" className='nav__link'>Inicio</a>
          </li>
          <li className="nav__item">
              <a href="#gallery" className='nav__link'>Galería</a>
          </li>
          <li className="nav__item">
              <a href="#services" className='nav__link'>Servicios</a>
          </li>
          <li className="nav__item">
              <a href="#contact" className='nav__link'>Contacto</a>
          </li>
      </ul>

      <a href="#nav" className="nav__hamburguer">
          <img src={resoursePathInProduction('/menu.svg')} className="nav__icon" alt='open' />
      </a>
      
      <a href="#other" className="nav__close">

          <img src={resoursePathInProduction('/close.svg')} className="nav__icon" alt='close' />
      </a>
    </nav>  
  )
}
