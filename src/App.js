import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';

import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import NotFound from './components/NotFound/index';

function App() {
  const [pizzas, setPizzas] = useState([]);
  useEffect(() => {
    axios.get('/db.json').then(({ data }) => {
      setPizzas(data.pizzas);
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Switch>
          <Route exact path="/" render={() => <Home pizzas={pizzas} />} />
          <Route path="/cart" component={Cart} />
          <Route path="/" component={NotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
