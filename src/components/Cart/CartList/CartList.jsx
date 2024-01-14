import './CartList.scss';
import CartListItem from '../CartListItem/CartListItem';

const items = [
  { title: 'Чизбургер-пицца', type: 'тонкое тесто', size: 30, count: 1, price: 395 },
];

const CartList = () => {
  return (
    <ul className="cartList">
      {items.map((item, index) => (
        <CartListItem item={item} key={index} />
      ))}
    </ul>
  );
};

export default CartList;
