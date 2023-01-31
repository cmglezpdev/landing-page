import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { resoursePathInProduction } from '../../helpers/path-resources'
import './slider.scss';

const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'slider',
}

export const CarsSlider = () => {

    return (
        <div className="container__slider">
            <div>
                <Slider {...settings}>
                    {
                        new Array(8).fill(0).map((_, index) => (
                            <div className='slider-item' key={index}>
                                <img
                                    src={`${resoursePathInProduction(`/assets/slider/car${index + 1}.jpg`)}`} alt="car"
                                    className='slider-item__img'
                                />
                            </div>
                        ))
                    }

                </Slider>
            </div>
        </div>
    )
}
