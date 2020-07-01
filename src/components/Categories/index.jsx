import React, { useState } from 'react';

export default function Categories({ items, onClickItem }) {
  const [isActive, setIsActive] = useState(null);
  const onSelectItem = (index) => {
    setIsActive(index);
  };

  return (
    <div className="categories">
      <ul>
        <li
          className={isActive === null ? 'active' : ''}
          onClick={() => setIsActive(null)}>
          Все
        </li>
        {items.map((name, index) => (
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
}
