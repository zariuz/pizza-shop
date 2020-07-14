import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import NotFound from './components/NotFound/index';

import { setPizzas } from './redux/actions/pizzas';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('/db.json').then(({ data }) => {
      dispatch(setPizzas(data.pizzas));
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/" component={NotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
