import './styles.css';
import corte from "../../assets/plano/cabelo.jpg"
import barba from "../../assets/plano/barba.jpg"
import barbaecorte from "../../assets/plano/cabelo+barba.jpg"
import { GiChessQueen } from "react-icons/gi";



function Planos() {

    const handleWhatsAppClick = (item) => {
        const telefone = "5511986427140";
        const mensagem = `Olá, gostaria de assinar o plano: ${item}`;
        const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

        window.open(url, "_blank"); // Abre o link em uma nova aba
    };

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
                        <button onClick={() => handleWhatsAppClick("Basico com corte Masculino por R$ 89,90")} type='submit'>Assine por R$ 89,90</button>
                    </li>

                    <li>
                        <span className="king">
                            <GiChessQueen className="icone" />
                        </span>
                        <img src={barbaecorte} alt="Plano do corte junto com a barba" />
                        <h5>Corte e Barba</h5>
                        <p>Faça em qualquer unidade, com desconto em nossos
                            produtos, cancele quando quiser, Brindes
                            exclusivos com cortes, barba e sombrancelha ilimitados.
                        </p>
                        <button onClick={() => handleWhatsAppClick("Premium com corte e barba por R$ 189,90")} type='submit'>Assine por R$ 189,90</button>
                    </li>

                    <li>
                        <img src={barba} alt="Plano do barba" />
                        <h5>Barba</h5>
                        <p>Faça em qualquer unidade, com desconto em nossos
                            produtos, cancele quando quiser, Brindes exclusivos com
                            corte de barba ilimitados.
                        </p>
                        <button onClick={() => handleWhatsAppClick("basico de barba por R$ 129,90")} type='submit'>Assine por R$ 129,90</button>
                    </li>


                </ul>
            </div>
        </div>
    )
}

export default Planos;