import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css'

import Nav from './components/Header/Nav/Nav';
import Footer from './components/Footer/Footer';
import Home from './components/Content/Home/Home';
import Create from './components/Content/Create/Create';
import NoMatch from './components/Content/NoMatch/NoMatch';
import Post from './components/Content/Post/Post';
import Apropos from './components/Content/Apropos/Apropos';
import Manage from './components/Content/Manage/Manage';


const App = (props) => {

  return (
    

    <div className="App">
    <Router>

      <Nav />
     
     
      <main className="main-content">
      <Switch>

          <Route exact path="/" component={Home} />
          <Route path="/create" component={Create} />
          <Route path="/manage" component={Manage} />
          <Route path="/a-propos" component={Apropos} />
          <Route path="/404" component={NoMatch} />
          <Route path="/:slug" component={Post} />

          
        </Switch>
     </main>



    </Router>

    <Footer />
    </div>
 
);



}
 

export default App;