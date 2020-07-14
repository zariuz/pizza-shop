import React from 'react';
import { useSelector } from 'react-redux';

import Categories from '../Categories';
import SortPopup from '../SortPopup';
import PizzaBlock from '../PizzaBlock';

export default function Home() {
  const { pizzas } = useSelector(({ pizzas }) => {
    return {
      pizzas: pizzas.items,
    };
  });

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={(name) => {
            console.log(name);
          }}
          items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
        />
        <SortPopup
          items={[
            { name: 'популярности', type: 'popular' },
            { name: 'цене', type: 'price' },
            { name: 'алфавиту', type: 'alphabet' },
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzas && pizzas.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
}
