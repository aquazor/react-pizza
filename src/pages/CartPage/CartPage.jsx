import './CartPage.scss';
import { Link } from 'react-router-dom';
import { SectionHeading, Button, CartList } from '../../components';
import { images } from '../../constants/images';

const CartPage = () => {
  const icon = <img src={images.cartBig} alt="Cart Icon" />;

  return (
    <section className="cart section__padding">
      <SectionHeading className="cart__heading" title={'Корзина'} icon={icon}>
        <Button>
          <img src={images.trash} width={18} height={18} alt="Trash Icon" />
          Очистить корзину
        </Button>
      </SectionHeading>

      <CartList />

      <ul className="cart__summary">
        <li className="cart__summary-quantity">
          Всего пицц: <strong>3 шт.</strong>
        </li>
        <li className="cart__summary-amount">
          Сумма заказа: <strong>900 ₽</strong>
        </li>
      </ul>

      <div className="cart__buttons">
        <Link to={'/'} className="mainButton cart__buttons-backBtn flex__center">
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 13L1 6.93015L6.86175 1"
              stroke="#D3D3D3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Вернуться назад
        </Link>

        <Button className="mainButton cart__buttons-payBtn">Оплатить сейчас</Button>
      </div>
    </section>
  );
};

export default CartPage;
