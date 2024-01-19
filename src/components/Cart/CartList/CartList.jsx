import './CartList.scss';
import { useEffect } from 'react';
import { useThunk } from '../../../hooks/useThunk';
import CartListItem from '../CartListItem/CartListItem';
import { fetchCartItems } from '../../../store/thunks/fetchCartItems';
import { useSelector } from 'react-redux';

const CartList = () => {
  const [fetchItems, isLoading, error] = useThunk(fetchCartItems);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const { cartItems } = useSelector((state) => state.cart);

  const renderContent = () => {
    if (isLoading) {
      return (
        <div>
          <p>Загрузка...</p>
        </div>
      );
    }
    if (error) {
      return (
        <div>
          <p>Что-то пошло не так...</p>
        </div>
      );
    }

    return cartItems.map((item, index) => <CartListItem item={item} key={index} />);
  };

  return <ul className="cartList">{renderContent()}</ul>;
};

export default CartList;
