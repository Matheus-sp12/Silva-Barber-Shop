import './styles.css'
import sobreBarbearia from '../../assets/sobreBarbearia.jpeg';

function Sobre() {

    return (
        <div id="about" className="sobre">
            <h3>Sobre a Silva Barber Shop</h3>
            <div className="sobre-container">
                <div>
                    <p>A Silva Barber Shop é a barbearia da sua época.</p>

                    <p>Focada em excelência, a Confraria conta com tudo 
                        que o homem moderno precisa. </p>
                         
                    <p>Um ambiente confortável, 
                        descontraído e exclusivamente masculino, com cuidados
                        para todos os estilos de barba e cabelo, além de serviços
                        como massagem, podologia, estética masculina e dia do noivo.</p>

                    <p> Uma barbearia premium, para cuidar do visual, tomar uma 
                        cerveja gelada, assistir aos seus esportes favoritos ou 
                        jogar uma partida de sinuca.</p>
                </div>

                <img src={sobreBarbearia} alt="Foto do nosso local" />
            </div>
        </div>
    );
}

export default Sobre;