import img1 from '../../assets/barbeiro/img1.jpg'
import img2 from '../../assets/barbeiro/img2.jpg'
import img3 from '../../assets/barbeiro/img3.jpg'
import img4 from '../../assets/barbeiro/img4.jpg'
import img5 from '../../assets/barbeiro/img5.jpg'
import img6 from '../../assets/barbeiro/img6.jpg'
import img7 from '../../assets/barbeiro/img7.jpg'
import img8 from '../../assets/barbeiro/img8.jpg'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";

const cardsData = [
  { id: 1, title: "Ricardo Santos", image: img1},
  { id: 2, title: "Antonie Silva", image: img2},
  { id: 3, title: "Gabriel Oliveira", image: img3},
  { id: 4, title: "Brian Vasques", image: img4},
  { id: 5, title: "Luis Andrade", image: img5},
  { id: 6, title: "Tiago Maia", image: img6},
  { id: 7, title: "Cristiano Ronaldo", image: img7},
  { id: 8, title: "Oscar Miranda", image: img8},
];

function CardsCarousel() {
  const settings = {
    dots: true, // Mostra indicadores embaixo do carrossel
    infinite: true, // Loop infinito
    speed: 500, // Velocidade da transição
    slidesToShow: 4, // Quantidade de cards visíveis
    slidesToScroll: 4, // Quantidade de cards por clique
    autoplay: true, // Habilita autoplay
    autoplaySpeed: 3000, // Velocidade do autoplay (ms)
    responsive: [
      {
        breakpoint: 1024, // Para telas menores que 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, // Para telas menores que 768px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="time" className="carousel-container">
        <h3>Conheça nosso time</h3>
      <Slider {...settings}>
        {cardsData.map((card) => (
          <div className="card" key={card.id}>
            <img src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CardsCarousel;
