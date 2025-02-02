import './styles.css';

import logo from '../../assets/logo.png'

import { FaWhatsapp } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

function Footer() {

    return(
        <div className="back">
        <div className="footer">

            <img src={logo} className='img' alt="" />

            <div>
                <h5>Menu</h5>
                <ul className="menu">
                    <li>
                        <a href="#">Home</a>
                        </li>

                        <li>
                        <a href="#">Sobre</a>
                        </li>

                        <li>
                        <a href="#">Serviços</a>
                        </li>

                        <li>
                        <a href="#">Planos</a>
                        </li>
                </ul>
            </div>

            <div className="contact-footer">
                
                <ul>
                <h5>Contato</h5>
                    <li>
                    <FaWhatsapp />
                    <p>(11) 98642-7140</p>
                    </li>

                    <li>
                    <BsFillTelephoneFill />
                    <p>(11) 3642-7140</p>
                    </li>

                    <li>
                    <MdEmail />
                    <p>Viniciussilva_1@hotmail.com</p>
                    </li>

                    <li>
                    <FaLocationDot />
                    <p>São paulo, SP</p>
                    </li>
                </ul>
            </div>
            </div>

            <p className="dev">Desenvolvido por Vinicius Silva</p>
        </div>
    )
}

export default Footer