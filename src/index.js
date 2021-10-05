import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, NavLink} from "react-router-dom"
import Home from "./Components/Home";
import About from "./Components/About";
import Login from "./Components/Login";

const linkStyles ={
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
}
function NavBar(){
  return(
    <div>
      <NavLink to='/' exact style={linkStyles} activeStyle={{background: "darkblue"}}>Home</NavLink>
      <NavLink to='/about' exact style={linkStyles} activeStyle={{background: "darkblue"}}>About</NavLink>
      <NavLink to='/login' exact style={linkStyles} activeStyle={{background: "darkblue"}}>Login</NavLink>
    </div>
  )
}


ReactDOM.render(
  <BrowserRouter>
  <NavBar />
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
  </BrowserRouter>,
  document.getElementById("root")
);