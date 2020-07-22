import React from 'react';
import Login from '../Login/Login';
// import logo from './logo.svg'
import { Link } from "react-router-dom";
import './Nav.css'

function Nav() {
    return (
  
      <nav className="main-menu">
      
      <ul>
        <li><Link to="/">
          Home
        </Link></li>

        <li><Link to="/create">
          Creer un post
        </Link></li>

        <li><Link to="/manage">
          Gérer les posts
        </Link></li>

        <li><Link to="/a-propos">
          A propos
        </Link></li>

      </ul>


       <div className="Login">
        <Login />
       </div>
       
  
      </nav>

      
   
    );
  
  
  
  }
   
  
  export default Nav;