import "./styles.css"
import img1 from "../../assets/galeria/img1.jpg"
import img2 from "../../assets/galeria/img2.jpeg"
import img3 from "../../assets/galeria/img6.webp"
import img4 from "../../assets/galeria/img3.jpg"
import img5 from "../../assets/galeria/img5.avif"
import img6 from "../../assets/galeria/img6.webp"
import img7 from "../../assets/galeria/img7.jpg"
import img8 from "../../assets/galeria/img8.jpeg"
import img9 from "../../assets/galeria/img9.jpg"
import img10 from "../../assets/galeria/img10.webp"
import img11 from "../../assets/galeria/img4.avif"


import img12 from "../../assets/galeria/img12.jpg"

function Galeria() {
    
    return(
        <div id="trabalho" className="galeria">
            <h5>Nosso trabalho</h5>
            <div>
                <ul>
                    <li>
                        <img src={img1} alt="cabelereiro fazendo a barba" />
                    </li>

                    <li>
                        <img src={img2} alt="cabelereiro cortando o cabelo" />
                    </li>

                    <li>
                        <img src={img3} alt="cabelereiro ajustando o cliente na cadeira" />
                    </li>

                    <li>
                        <img src={img12} alt="cabelereiro cortando cabelo da criança" />
                    </li>

                    <li>
                        <img src={img6} alt="cabelereiro ajustando o cliente na cadeira" />
                    </li>

                    <li>
                        <img src={img7} alt="cabelereiro cortando o cabelo" />
                    </li>

                    <li>
                        <img src={img4} alt="cabelereiro cortando cabelo de criança" />
                    </li>

                    <li>
                        <img src={img9} alt="cabelereiro cortando o cabelo" />
                    </li>

                    <li>
                        <img src={img5} alt="cabelereiro cortando o cabelo" />
                    </li>

                    <li>
                        <img src={img8} alt="cabelereiro cortando o cabelo" />
                    </li>

                    <li>
                        <img src={img10} alt="cabelereiro cortando o cabelo" />
                    </li> 

                    <li>
                        <img src={img11} alt="cabelereiro cortando o cabelo" />
                    </li>                  
                </ul>
            </div>
        </div>
    )
}

export default Galeria;