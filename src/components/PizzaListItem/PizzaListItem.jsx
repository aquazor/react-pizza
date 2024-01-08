import './PizzaListItem.scss';
import { images } from '../../constants/images';

const PizzaListItem = ({ item }) => {
  return (
    <li className="pizzaList__item">
      <div className="pizzaList__item-image flex__center">
        <img src={images.logo} width={260} height={260} alt="Pizza" />
      </div>

      <h3>{item.title}</h3>

      <div className="pizzaList__item-options">
        <ul className="pizzaList__item-options__list">
          <li className="pizzaList__item-options__list-item flex__center">
            <button className="flex__center" type="button">
              тонкое
            </button>
          </li>
          <li className="pizzaList__item-options__list-item flex__center">
            <button className="flex__center" type="button">
              традиционное
            </button>
          </li>
        </ul>

        <ul className="pizzaList__item-options__list">
          <li className="pizzaList__item-options__list-item flex__center">
            <button className="flex__center" type="button">
              26 см.
            </button>
          </li>
          <li className="pizzaList__item-options__list-item flex__center">
            <button className="flex__center" type="button">
              30 см.
            </button>
          </li>
          <li className="pizzaList__item-options__list-item flex__center">
            <button className="flex__center" type="button">
              40 см.
            </button>
          </li>
        </ul>
      </div>

      <div className="pizzaList__item-footer">
        <h4>от {item.price} ₸</h4>
        <button type="button flex__center">
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
        </button>
      </div>
    </li>
  );
};

export default PizzaListItem;
