import './PizzaListItem.scss';
import { useState } from 'react';
import Button from '../../Button/Button';
import { TYPES } from '../../../constants/constants';

const PizzaListItem = ({ item }) => {
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const [count, setCount] = useState(0);

  return (
    <li className="pizzaList__item">
      <div className="pizzaList__item-image flex__center">
        <img src={item.imageUrl} width={260} height={260} alt="Pizza" />
      </div>

      <h3>{item.title}</h3>

      <div className="pizzaList__item-options">
        <ul className="pizzaList__item-options__list">
          {item.types.map((typeId, index) => {
            return (
              <li key={index} className="pizzaList__item-options__list-item flex__center">
                <Button
                  className={activeType === index ? 'active' : null}
                  onClick={() => setActiveType(index)}
                >
                  {TYPES[typeId]}
                </Button>
              </li>
            );
          })}
        </ul>

        <ul className="pizzaList__item-options__list">
          {item.sizes.map((size, i) => {
            return (
              <li key={i} className="pizzaList__item-options__list-item flex__center">
                <Button
                  className={activeSize === i ? 'active' : null}
                  onClick={() => setActiveSize(i)}
                >
                  {size} см.
                </Button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="pizzaList__item-footer">
        <h4>от {item.price} ₸</h4>
        <Button onClick={() => setCount((prev) => prev + 1)}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="#fe5f1e"
            />
          </svg>
          Добавить
          <div className="pizzaList__item-footer__count flex__center">{count}</div>
        </Button>
      </div>
    </li>
  );
};

export default PizzaListItem;
