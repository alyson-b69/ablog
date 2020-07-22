import React from "react";
import "./Footer.css"

const Footer = () => {

    return (
        <div className="footer">
        <div className="footer-link">
            <h3>LIENS</h3>
            <a href="https://www.wildcodeschool.com/fr-FR" alt="Wild Code school" target="_blank" rel="noopener noreferrer">Wild Code School</a>
            <a href="https://github.com/alyson-b69" alt="Github Alyson" target="_blank" rel="noopener noreferrer">Github</a>
            <a href="https://www.linkedin.com/in/alyson-bernabeu-08249a172/" alt="LinkedIn Alyson" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>

        <div className="footer-infos">
            <h3>Crédit</h3>
            <p>Réalisé avec <span role="img" aria-label="love">❤️</span></p>
            <p>&copy; <a href="mailto:alyson.bernabeu@gmail.com"> Alyson.B </a></p>
        </div>
        </div>
    )
}

export default Footer;