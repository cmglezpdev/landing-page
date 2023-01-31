
import './services.scss';

import { Card } from '../card/Card';


export const Services = () => {

  return (
    <section className='services' id='services'>
        <h2 className='services__title'>Servicios</h2>

        <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quod, velit, error sint adipisci esse aperiam sequi nobis ratione et laboriosam quidem! Fugiat placeat iste facere alias sint? Optio, quas.</p>

        <div className="services__cards">
          <Card
            img='/img4.jpg'
            name='Básico'
            price="1.000"
            time="6 meses"
            benefits={["Descuento del 10% en las reparaciones del coche", "Una vez el año el arreglo es gratis"]}
            linkGetPlan='#'
          />

          <Card
            img='/img4.jpg'
            name='Asociado'
            price="2.500"
            time="year"
            benefits={["Descuento del 20% en las reparaciones del coche", "Descuento de un 50% si compras otro coche en el proximo año", "Si tienes 3 coches puedes llevarte otro por un 80% de descuento"]}
            linkGetPlan='#'
          />

          <Card
            img='/img4.jpg'
            name='Personalizado'
            price="5.000"
            time="year"
            benefits={["Por favor contacte con nosotros para poder ofrecerle un servicio personalizado"]}
            linkGetPlan='#contact'
          />

          

        </div>


    </section>
  )
}
