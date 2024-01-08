import './PizzaList.scss';
import PizzaListItem from '../PizzaListItem/PizzaListItem';
const items = [
  { title: 'Чизбургер-пицца', price: 395 },
  { title: 'Чизбургер-пицца', price: 395 },
  { title: 'Чизбургер-пицца', price: 395 },
  { title: 'Чизбургер-пицца', price: 395 },
  { title: 'Чизбургер-пицца', price: 395 },
];

const PizzaList = () => {
  return (
    <ul className="pizzaList">
      {items.map((item, index) => (
        <PizzaListItem item={item} key={index} />
      ))}
    </ul>
  );
};

export default PizzaList;
