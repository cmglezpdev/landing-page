
import PropTypes from 'prop-types';

import './cardcar.scss';

export const CardCar = ({ img, name, info }) => {

    return (
        <article className='card-car'>
            <img src={img} alt={name} />
            <h3 className='card-car-name'>{ name }</h3>
            <p className='card-car-info'>{ info }</p>
        
            <button className='card-car-see'>
                Ver coches
            </button>
        </article>
    )
}


CardCar.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired
}