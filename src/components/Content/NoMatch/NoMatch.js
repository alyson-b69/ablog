import React from "react";
import { Link } from "react-router-dom";
import "./NoMatch.css"

const NoMatch = () => (
  <div className="error">
    <h1>Hmmm...</h1>
    <h1>Comme une panne de courant.</h1>
    <p>Nous ne trouvons pas la page que vous recherchez...</p>
    <div>
    <img src="https://lh3.googleusercontent.com/proxy/tfThZrkvFfaA06WCZZUR-bqUCgpK0CH3UejG-wKCPbRqELuZ4J4Ty9Y8jGKoYv4_YHOSgm_tSypvZsaXc9WhoWSjwgjPAixHbA" alt="erreur"/>
    </div>
   
    <Link to="/"><button>Revenir à la page d'accueil</button></Link>
  </div>
);

export default NoMatch;
