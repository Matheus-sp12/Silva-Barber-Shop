import './App.css'

import Navbar from '../Header';
import Carrousel from "../Carrousel";
import Sobre from "../Sobre";
import Servico from "../Serviços";
import Planos from "../Planos";
import Galeria from "../Galeria";
import Card from "../Barbeiros";
import Contato from "../Contato";
import Footer from "../Footer";


function App() {


  return (
    <div className='App'>
      <Navbar />
      <Carrousel />
      <Sobre />
      <div className="degrade">
       <Servico />
      </div>
      <Planos />
      <Galeria />
      <Card />
      <Contato />
      <Footer />
    </div>
  );
}

export default App
