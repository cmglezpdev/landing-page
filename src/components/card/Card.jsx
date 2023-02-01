import ReactPropTypes from 'prop-types';

import { BsCheck } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import './card.scss';


export const Card = ({ img, name, price, time = 'mes', benefits, limitations = [], linkGetPlan }) => {
  return (
    <section className='card'>
        <div>
          <img src={img} className='card__img' alt="" />

          <h3 className='card__title'>{ name }</h3>
          <span className='card__price'>{ price } <span>€/{ time }</span></span>
          <ul className='card__benefits'>
              {
                benefits.map((b, i) => (
                  <li className='benefits-item benefit' key={i}>
                      <BsCheck className='item-icon' />
                      <span className='item--text'>{ b }</span>
                  </li>

                ))
              }
              {
                limitations.map((b, i) => (
                  <li className='benefits-item limitation' key={i}>
                      <AiOutlineClose className='item-icon' />
                      <span className='item--text'>{ b }</span>
                  </li>

                ))
              }
          </ul>
            

        </div>
        <a href={linkGetPlan} className='card__btn-link'>
          <button className='card__buy_btn'>
            Adquirir
          </button>
        </a>
    </section>
  )
}

Card.propTypes = {
  img: ReactPropTypes.string.isRequired,
  name: ReactPropTypes.string.isRequired,
  price: ReactPropTypes.string.isRequired,
  time: ReactPropTypes.string,
  benefits: ReactPropTypes.arrayOf(ReactPropTypes.string).isRequired,
  limitations: ReactPropTypes.arrayOf(ReactPropTypes.string),
  linkGetPlan: ReactPropTypes.string.isRequired,
}