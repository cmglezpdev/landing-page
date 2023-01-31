import { IoCarSportSharp } from 'react-icons/io5';
import { BsInstagram, BsTwitter } from 'react-icons/bs';

import './footer.scss';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__info">
                <a href="#home">
                    <IoCarSportSharp className="info__logo" />
                </a>

                <div className='info__legal'>
                    <span className='terms'>Termino y Condiciones</span>
                </div>
                <div className="info__sn">
                    <BsInstagram className='sn-icon' />
                    <BsTwitter className='sn-icon' />
                </div>
            </div>
        </footer>
    )
}
