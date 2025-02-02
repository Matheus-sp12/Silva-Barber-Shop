import './styles.css';
import corte from "../../assets/plano/cabelo.jpg"
import barba from "../../assets/plano/barba.jpg"
import barbaecorte from "../../assets/plano/cabelo+barba.jpg"


function Planos() {

    return (
        <div id="planos" className="planos">
            <h3>Nossos Planos</h3>

            <div>
                <ul>
                    <li>
                        <img src={corte} alt="Plano do corte" />
                        <h5>Corte</h5>
                        <p>Faça em qualquer unidade, com desconto em nossos produtos, cancele quando quiser, Brindes exclusivos com 
                            cortes ilimitados.
                        </p>
                        <button type='submit'>Assine por R$ 89,90</button>
                    </li>

                    <li>
                        <img src={barbaecorte} alt="Plano do corte junto com a barba" />
                        <h5>Corte e Barba</h5>
                        <p>Faça em qualquer unidade, com desconto em nossos 
                            produtos, cancele quando quiser, Brindes
                             exclusivos com cortes, barba e sombrancelha ilimitados.
                        </p>
                        <button type='submit'>Assine por R$ 189,90</button>
                    </li>

                    <li>
                        <img src={barba} alt="Plano do barba" />
                        <h5>Barba</h5>
                        <p>Faça em qualquer unidade, com desconto em nossos
                             produtos, cancele quando quiser, Brindes exclusivos com 
                            corte de barba ilimitados.
                        </p>
                        <button type='submit'>Assine por R$ 129,90</button>
                    </li>


                </ul>
            </div>
        </div>
    )
}

export default Planos;