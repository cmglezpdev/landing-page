
import './card.scss';

import { BsCheck } from 'react-icons/bs';
// import { AiOutlineClose } from 'react-icons/ai';


export const Card = () => {
  return (
    <section className='card'>
        <img src="/img4.jpg" alt="" />

        <h3 className='card__title'>Basico</h3>

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
    </section>
  )
}
