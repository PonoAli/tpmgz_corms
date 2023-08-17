import React from "react";
import './scss/app.scss';
import Header from "./components/Header";
import { Catigories } from "./components/Catigories";
import { Sort } from "./components/Sort";
import { PizzaBlock } from "./components/PizzaBlock";
// import { CartItems } from "./components/CartItems";

function App() {
  return (
    <div className="wrapper">
      <Header />
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Catigories />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content_pizza-block">
          <PizzaBlock />
          <PizzaBlock />
          <PizzaBlock />
          <PizzaBlock />
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
