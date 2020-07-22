import React from "react";
import "./Apropos.css"

const Apropos = () => {

    return (
        <div className="apropos">
   
   <header>
        <img src="https://feel-ink-good.com/wp-content/uploads/2020/03/avatar2.png" alt="Alyson profile" title="Alyson" />
        <p className="bubble-text">Salut, moi c'est Alyson, ancienne comptable devenue développeuse web.<br/>
            Du haut de mes 29 ans, j'ai déjà 10 années d'expérience professionnelle à mon actif.<br/>
            Vive, curieuse, et très enthousiaste, je ne manque jamais d'idées, ni de ressources, pour mener à bien les missions qui me sont confiées.<br/>
            Appréciant le travail en équipe, j'apporte volontiers, en plus de mes compétences et de mon savoir-être, quelques douceurs à partager pour motiver les troupes.
        </p>
        <h1>Alyson BERNABEU</h1>
        <h2> &#8249; Developpeuse Web &#8250;</h2>
        <h3>Level 29 - 14.07.1991</h3>
    </header>
    <nav className="nav-a-propos">
        <ul>
            <li><i className="fa fa-home" aria-hidden="true"></i> 2 rue des Bons Enfants <br/> 69007 LYON</li>
            <li><i className="fa fa-mobile" aria-hidden="true"></i> 07.78.38.91.64</li>
            <li><i className="fa fa-envelope-o" aria-hidden="true"></i> <a href="mailto:alyson.bernabeu@gmail.com" alt="Envoyer un mail à Alyson" title="Envoyer un mail à Alyson">alyson.bernabeu@gmail.com</a></li>
            <li><i className="fa fa-globe" aria-hidden="true"></i> <a href="https://www.feel-ink-good.com" alt="site web d'Alyson" title="site web d'Alyson" target="_blank" rel="noopener noreferrer">https://www.feel-ink-good.com</a></li>
        </ul>
        </nav>
    <main>
    <aside>
        <div className="hardskills">
            <h3>HARD SKILLS</h3>
            <ul>
                <li>HTML / CSS</li>
                <li>JavaScript</li>
                <li>Node JS</li>
                <li>React</li>
                <li>Git / GitHub</li>
                <li>Méthodes agiles</li>
                <li>Photoshop</li>
            </ul>
        </div>
        <div className="softskills">
            <h3>SOFT SKILLS</h3>
            <ul>
                <li>Implication</li>
                <li>Curiosité</li>
                <li>Créativité</li>
                <li>Motivation</li>
                <li>Esprit d'équipe</li>
            </ul>
        </div>
        <div className="langues">
            <h3>LANGUES</h3>
            <ul>
                <li><b>Français</b> : <br/>langue maternelle</li>
                <li><b>Anglais</b> : <br/>niveau moyen</li>
            </ul>
        </div>
        <div className="loisirs">
            <h3>LOISIRS</h3>
            <ul>
                <li><b>Sports</b> :<br/>Badminton, vélo, roller</li>
                <li><b>Arts</b> : <br/>Dessin, aquarelle, illustration</li>
                <li><b>Associations</b> : <br/>Cargo (adjointe section badminton),<br/> Foyer Notre-dame (bénévole)</li>
            </ul>
        </div>
    </aside>
    <section>
        <div className="formation">
            <h3>FORMATIONS</h3>
            <ul>
                <li>
                    <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                    <h4>2020 : DEVELOPPEMENT WEB ET MOBILE</h4> - Wild Code School
                </li>
                <li>
                    <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                    <h4>2013 : BTS COMPTABILITE</h4> - Sciences-U
                </li>
            </ul>
        </div>
        <div className="experience">
            <h3>EXPERIENCES PROFESSIONNELLES HORS DEVELOPPEMENT WEB</h3>
            <ul>
                <li><h4>Restalliance - Comptable - Sept.2018 à Juin.2019</h4> Gestion comptabilité filiale & des Cuisines Centrales
                </li>
                <li><h4>Carré d'or immobilier - Comptable - Oct.2015 à Sept.2018</h4>
                    Gestion comptabilité d'un portefeuille de 30 sociétés
                </li>
                <li><h4>Mutualité Sociale Agricole - Comptable - Mar.2014 à Sept.2015</h4>
                    Comptabilité fournisseurs, gestion des notes de frais, participation aux remontées des comptes à la caisse centrale
                </li>
                <li><h4>Adapei de l'Ain - Assistante Comptable - Oct.2013 à Fév.2014</h4>
                    Comptabilité fournisseurs, gestion des caisses, gestion de l'argent de poche des résidents, secrétariat
                </li>
                <li><h4>HERTZ LSA - Comptable (alternance) - Aou.2012 à Aou.2013</h4>
                    Comptabilité clients, gestion des PV, trésorerie
                </li>
                <li><h4>EKYLIS - Comptable (alternance) - Aou.2011 à Juil.2012</h4>
                    Gestion de la comptabilité d'un portefeuille de 5 clients
                </li>
            </ul>
        </div>
    </section>

</main>
<footer>
    <h3>Retrouvez moi ici :</h3>
    <ul>
        <li><a href="https://instagram.com/alyson.b69" alt="instagram Alyson" title="instagram Alyson"><i className="fa fa-instagram" aria-hidden="false"></i></a></li>
        <li><a href="https://github.com/alyson-b69" alt="GitHub Alyson" title="GitHub Alyson"><i className="fa fa-github" aria-hidden="false"></i></a></li>
        <li><a href="https://www.linkedin.com/in/alyson-bernabeu-08249a172/" alt="linkedin Alyson" title="linkedin Alyson"><i className="fa fa-linkedin" aria-hidden="false"></i></a></li>
        <li><a href="https://codepen.io/alysonb69" alt="Codepen Alyson" title="CodePen Alyson"><i className="fa fa-codepen" aria-hidden="false"></i></a></li>
        <li><a href="https://twitter.com/feelink_good" alt="Twitter Alyson" title="Twitter Alyson"><i className="fa fa-twitter" aria-hidden="false"></i></a> </li>
    </ul>
</footer>
           
        </div>
    )
}

export default Apropos;