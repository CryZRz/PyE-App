import { useState } from "react";

import logoEnmsl from '../assets/logo-enmsl.png'
import logoInstagram from '../assets/logo-instagram.png'
import logoGithub from '../assets/logo-github.png'
import imageHeader from '../assets/ugescudoblackandwhithe.png'

export default function Footer() {
  const [saveMessage, setSaveMessage] = useState("");

  async function lisenSubmit(e) {
    e.preventDefault();
    if (saveMessage == "") {
      return alert("No puedes enviar sugerencias vacias");
    }
    let validateSend = confirm("¿Estas seguro de enviar la sugerencia?");
    if (validateSend) {
      try {
        const req = await axios.post("http://localhost:3000/suggestions", {
          suggestion: saveMessage,
        });
        return alert("Sugerencia enviada correctamente. Gracias :)");
      } catch (e) {
        return alert("Ocurrio un error al enviar la sugerencia");
      }
    }
  }

  function lisenChangeMessage(e) {
    console.log(e.target.value);
    setSaveMessage(e.target.value);
  }

  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="footer-section-left">
          <div className="logos-schol">
            <img className="logo-enmsl" src={logoEnmsl}></img>
          </div>
        </div>
        <div className="footer-section-mid">
          <form onSubmit={lisenSubmit} className="form-suggestions">
            <input
              className="get-suggestions"
              onChange={lisenChangeMessage}
              value={saveMessage}
              type="text"
              placeholder="Sugerencias :)"
            ></input>
            <input className="send-suggestion" type="submit"></input>
          </form>
        </div>
        <div className="footer-section-right">
          <div className="section-logo-ug">
            <img className="logo-ug" src={imageHeader}></img>
          </div>
          <div className="social-section-foter">
            <div className="author-name">
              <span>Designed by CryZ</span>
            </div>
            <div className="social-reds">
              <a href="https://www.instagram.com/christianrmsz34/?hl=es">
                <img className="logo-instagram" src={logoInstagram}></img>
              </a>
              <a href="https://github.com/CryZRz">
                <img className="logo-github" src={logoGithub}></img>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
