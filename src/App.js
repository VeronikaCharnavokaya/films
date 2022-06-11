import React from "react";

import {

  BrowserRouter as Router,

  Routes,

  Route,

  Link

} from "react-router-dom";
import Comedy from "./Comedy";
import Fantasy from "./Fantasy";
import Romance from "./Romance";
import Slide from "./Slide";
import "./App.css";



function App() {

  

  return (
    <div className="App">
      <div className="navbar">
      <h1>Фильмы на вечер</h1>
      
      
      <Router>
        <nav>
          <Link to="/comedy" className="link">Comedy</Link> 
          <Link to="/fantasy" className="link" >Fantasy</Link>
          <Link to="/romance" className="link">Romance</Link>
          <Link to="/slide" className="link">All</Link>

        </nav>

        <Routes>
          <Route path="comedy" element={<Comedy/>}/>
          <Route path="fantasy" element={<Fantasy/>}/>
          <Route path="romance" element={<Romance/>}/>
          <Route path="slide" element={<Slide/>}/>

        </Routes>
      </Router>
      </div>
      
      
      </div>
    
    
  );
}


export default App;
