
import './services.scss';

import { Card } from '../card/Card';


export const Services = () => {

  return (
    <section className='services' id='services'>
        <h2 className='services__title'>Servicios</h2>

        <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quod, velit, error sint adipisci esse aperiam sequi nobis ratione et laboriosam quidem! Fugiat placeat iste facere alias sint? Optio, quas.</p>

        <div className="services__cards">
          <Card />
          <Card />
          <Card />
        </div>


    </section>
  )
}
