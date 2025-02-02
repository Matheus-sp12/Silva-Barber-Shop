import {useState} from 'react'; //*import do hooks / estado de uso*/;
import './styles.css'; // Supondo que você tenha um arquivo de estilo separado
import logo from '../../assets/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar o menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Alterna o estado do menu
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <h1><img src={logo} alt="logo da pagina" className='logo'/></h1>
        </div>

        {/* Botão de menu (hambúrguer) */}
        <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>

        {/* Links da navbar */}
        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          <a href="#home">Home</a>
          <a href="#about">Sobre</a>
          <a href="#services">Serviços</a>
          <a href="#planos">Planos</a>
          <a href="#trabalho">Nosso trabalho</a>
          <a href="#time">Time</a>
          <a href="#contact">Contato</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;