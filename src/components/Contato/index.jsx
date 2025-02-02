import './styles.css';

import { useState } from "react";

import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiLink } from "react-icons/ci";

function Contato() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });
    
      const [submitted, setSubmitted] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data submitted:", formData);
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      };

    return(
        <div className="contact">
            <h3>Venha viver uma experiência</h3>
            <p>Nossa equipe estará pronta para te atender!</p>
            <div className="contact-container">
            

            <div className="list-contact">
                <ul>
                    <li className='modify1'>
                    <FaInstagram />
                        <p>Instagram</p>
                    </li>

                    <li className='modify2'>
                    <FaWhatsapp />
                        <p>WhatsApp</p>
                    </li>

                    <li className='modify3'>
                    <CiLink />
                        <p>Nosso site</p>
                    </li>
                </ul>
            </div>

    <div id="contact" className="form-container">
      <h1>Envie sua proposta</h1>
      {submitted && <p className="success-message">Obrigado pela sua mensagem!</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensagem</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Enviar</button>
      </form>
    </div>
    </div>
        </div>
        
    );
}

export default Contato;