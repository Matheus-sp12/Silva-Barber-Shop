import './styles.css'
import barba from "../../assets/serviços/barba.png"
import corte from "../../assets/serviços/corte.png"
import corteebarba from "../../assets/serviços/corteebarba.png"
import hidratacao from "../../assets/serviços/hidratacao.jpg"
import limpeza from "../../assets/serviços/limpeza.jpg"
import sombrancelha from "../../assets/serviços/sombrancelha.jpg"

function Servico() {
    
    return (
        <div id="services" className="servico">
            <h3>Serviços</h3>

            <div>
                <ul>
                    <li>
                        <img src={barba} alt="Barbeiro fazendo a barba" />
                        <span>
                            <h5>Barba</h5>
                        <div>
                        <p>R$45,00</p>
                        </div>
                        </span>
                        <button>Adicionar serviços</button>

                    </li>

                    <li>
                        <img src={corte} alt="Barbeiro cortando o cabelo" />
                        <span>
                        <h5>Corte</h5>
                        <div>
                        <p>R$50,00</p>
                        </div>
                        </span>
                        <button>Adicionar serviços</button>
                    </li>

                    <li>
                        <img src={corteebarba} alt="opção de corte e barba" />
                        <span>
                        <h5>Corte e Barba</h5>
                        <div>
                        <p>R$75,00</p>
                        </div>
                        </span>
                        <button>Adicionar serviços</button>
                    </li>

                    <li>
                        <img src={hidratacao} alt="Hidratação de cabelo" />
                        <span>
                        <h5>Hidratação</h5>
                        <div>
                        <p>R$30,00</p>
                        </div>
                        </span>
                        <button>Adicionar serviços</button>
                    </li>

                    <li>
                        <img src={limpeza} alt="Limpeza de pele" />
                        <span>
                        <h5>Limpeza de pele</h5>
                        <div>
                        <p>R$40,00</p>
                        </div>
                        </span>
                        <button>Adicionar serviços</button>
                    </li>

                    <li>
                        <img src={sombrancelha} alt="Limpeza de sombrancelha" />
                        <span>
                        <h5>Sombrancelha</h5>
                        <div>
                        <p>R$45,00</p>
                        </div>
                        </span>
                        <button>Adicionar serviços</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Servico;