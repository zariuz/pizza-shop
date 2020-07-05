import React from 'react';

import Categories from '../Categories';
import SortPopup from '../SortPopup';
import PizzaBlock from '../PizzaBlock';

export default function Home({ pizzas }) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={(name) => {
            console.log(name);
          }}
          items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
        />
        <SortPopup items={['популярности', 'цене', 'алфавиту']} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzas.map((obj) => (
          <PizzaBlock key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
}
