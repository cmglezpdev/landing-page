import { CarsSlider } from './Slider'
import { CardCar } from './CardCar';

import './gallery.scss';

export const Gallery = () => {
    return (

        <section className='gallery' id='gallery'>
            <h2 className='gallery__title'>Que tenemos para ti?</h2>

            <div className='gallery-slider'>
                <CarsSlider />
            </div>

            <p className='gallery__info'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit vero provident labore atque ea explicabo amet illo exercitationem, velit officia illum quis blanditiis repudiandae voluptatem praesentium ipsum vitae ut soluta.
            </p>

            <div className='cars-gallery'>
                <CardCar 
                    img='assets/gallery/ferrari.jpg'
                    name='Ferrari'
                    info='Ferrari es una marca de automóviles de lujo italiana, perteneciente al grupo Fiat Chrysler Automobiles. La compañía fue fundada en 1914 por Alfieri Maserati, quien también diseñó el primer modelo de la marca.'

                />

                <CardCar
                    img='assets/gallery/bmw.jpg'
                    name='BMW'
                    info='BMW es una marca de automóviles de lujo alemana, perteneciente al grupo BMW. La compañía fue fundada en 1916 por Karl Rapp, quien también diseñó el primer modelo de la marca.'
                />

                <CardCar
                    img='assets/gallery/mercedes.jpg'
                    name='Mercedes'
                    info='Mercedes-Benz es una marca de automóviles de lujo alemana, perteneciente al grupo Daimler AG. La compañía fue fundada en 1926 en Stuttgart, Alemania, por Gottlieb Daimler y Carl Benz.'
                />

                <CardCar
                    img='assets/gallery/audi.jpg'
                    name='Audi'
                    info='Audi es una marca de automóviles de lujo alemana, perteneciente al grupo Volkswagen. La compañía fue fundada en 1909 por August Horch, que se convirtió en el primer presidente de la compañía.'
                />

                <CardCar
                    img='assets/gallery/porsche.jpg'
                    name='Porsche'
                    info='Porsche es una marca de automóviles de lujo alemana, perteneciente al grupo Volkswagen. La compañía fue fundada en 1931 por Ferdinand Porsche, quien también diseñó el primer modelo de la marca.'
                />

                <CardCar
                    img='assets/gallery/lamborghini.jpg'
                    name='Lamborghini'
                    info='Lamborghini es una marca de automóviles de lujo italiana, perteneciente al grupo Volkswagen. La compañía fue fundada en 1963 por Ferruccio Lamborghini, quien también diseñó el primer modelo de la marca.'
                />

                <CardCar
                    img='assets/gallery/maserati.jpg'
                    name='Maserati'
                    info='Maserati es una marca de automóviles de lujo italiana, perteneciente al grupo Fiat Chrysler Automobiles. La compañía fue fundada en 1914 por Alfieri Maserati, quien también diseñó el primer modelo de la marca.'
                />

                <CardCar
                    img='assets/gallery/bugatti.jpg'
                    name='Bugatti'
                    info='Bugatti es una marca de automóviles de lujo francesa, perteneciente al grupo Volkswagen. La compañía fue fundada en 1909 por Ettore Bugatti, quien también diseñó el primer modelo de la marca.'
                />

                <CardCar
                    img='assets/gallery/tesla.jpg'
                    name='Tesla'
                    info='Tesla es una marca de automóviles de lujo estadounidense, perteneciente al grupo Tesla. La compañía fue fundada en 2003 por Elon Musk, quien también diseñó el primer modelo de la marca.'
                />

                <CardCar
                    img='assets/gallery/nissan.jpg'
                    name='Nissan'
                    info='Nissan es una marca de automóviles de lujo japonesa, perteneciente al grupo Nissan. La compañía fue fundada en 1933 por Yoshisuke Aikawa, quien también diseñó el primer modelo de la marca.'
                />

                <CardCar
                    img='assets/gallery/lexus.jpg'  
                    name='Lexus'
                    info='Lexus es una marca de automóviles de lujo japonesa, perteneciente al grupo Toyota. La compañía fue fundada en 1989 por Eiji Toyoda, quien también diseñó el primer modelo de la marca.'
                />

            </div>


        </section>
    )
}
