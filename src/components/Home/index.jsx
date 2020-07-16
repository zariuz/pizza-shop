import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Categories from '../Categories';
import SortPopup from '../SortPopup';
import PizzaBlock from '../PizzaBlock';
import { setCategory } from '../../redux/actions/filters';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'alphabet' },
];

const Home = () => {
  const dispatch = useDispatch();
  const pizzas = useSelector(({ pizzas }) => pizzas.items);

  const onSelecCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onSelecCategory} items={categoryNames} />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzas && pizzas.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

export default Home;
