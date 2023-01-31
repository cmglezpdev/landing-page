
import './card.scss';

import { BsCheck } from 'react-icons/bs';
import { resoursePathInProduction } from '../../helpers/path-resources';
// import { AiOutlineClose } from 'react-icons/ai';


export const Card = () => {
  return (
    <section className='card'>
        <img src={resoursePathInProduction('/img4.jpg')} alt="" />

        <h3 className='card__title'>Basico</h3>
        <span className='card__price'>5.000 <span>€/mes</span></span>
        <ul className='card__benefits'>
            <li className='benefits-item'>
                <BsCheck className='item-icon' />
                <span className='item--text'>Descuento del 10% en las reparaciones del coche</span>
            </li>
            <li className='benefits-item'>
                <BsCheck className='item-icon' />
                <span className='item--text'>Una vez el año el arreglo es gratis</span>
            </li>
        </ul>

        <button className='card__buy_btn'>
          Adquirir
        </button>
    </section>
  )
}
