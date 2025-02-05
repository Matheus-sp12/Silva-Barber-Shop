
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Estilos principais do carousel
import "slick-carousel/slick/slick-theme.css"; // Tema do carousel
import "./styles.css"; // Estilos personalizados (opcional)
import image1 from "../../assets/carrousel/banner1.jpg"
import image2 from "../../assets/carrousel/img2.webp"
import image3 from "../../assets/carrousel/img3.jpg"





// Component Carousel
function Carrousel() {
  const settings = {
    dots: true, // Mostra os pontos de navegação
    infinite: true, // Navegação infinita
    speed: 500, // Velocidade de transição
    slidesToShow: 1, // Mostra 1 slide por vez
    slidesToScroll: 1, // Rola 1 slide por vez
    autoplay: true, // Ativa autoplay
    autoplaySpeed: 3000, // Tempo entre os slides (em ms)
    responsive: [
      {
        breakpoint: 768, // No mobile, mantém 1 slide por vez
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>

        <div className="carousel-slide">
          <div>
          </div>
          <img
            src={image1}
            alt="Slide 1"
          />
        </div>

        <div className="carousel-slide">
          <img
            src={image2}
            alt="Slide 2"
          />

        </div>

        <div className="carousel-slide">
          <img
            src={image3}
            alt="Slide 3"
          />
        </div>
      </Slider>
    </div>
  );
}

export default Carrousel;