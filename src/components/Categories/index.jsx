import React, { useState } from 'react';

const Categories = React.memo(function Categories({ items, onClickItem }) {
  const [isActive, setIsActive] = useState(null);
  const onSelectItem = (index) => {
    setIsActive(index);
    onClickItem(index);
  };

  return (
    <div className="categories">
      <ul>
        <li
          className={isActive === null ? 'active' : ''}
          onClick={() => onSelectItem(null)}>
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              className={isActive === index ? 'active' : ''}
              onClick={() => {
                onSelectItem(index);
              }}
              key={`${name}_${index}`}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Categories;
