import React from "react";
import './App.css';
import Header from "./components/Header"
import SecondHeader from "./components/Secondheader"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Carouselimg from "./components/Carouselimg"
import Prolayout from "./components/Proleyout"
import Footer from "./components/Footer"
import Login from "./components/Login"
import Cart from "./components/Cart"

function App() {
  return (
    <Router>
          <div className="App">
        <Switch>
          <Route path="/order">
            <Header />
            <SecondHeader />
              <h1>no order</h1>
          </Route>
          <Route path="/cart">
            <Header />
            <SecondHeader />
            <Cart></Cart>
              <h1>checkout</h1>
          </Route>     
          <Route path="/login">
              <Login/>
          </Route>
          <Route path="/">
            <Header />
            <SecondHeader />
            <Carouselimg />
            <Prolayout />
            <Footer/>
          </Route>
        </Switch>
        </div>  
    </Router>

  );
}

export default App;
