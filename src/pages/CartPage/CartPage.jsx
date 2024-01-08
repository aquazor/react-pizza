import './CartPage.scss';
import { Link } from 'react-router-dom';
import { SectionHeading, Button, CartList } from '../../components';

const CartPage = () => {
  return (
    <section className="cart section__padding">
      <SectionHeading
        className="cart__heading"
        title={'Корзина'}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M10.6667 28.7917C12.0014 28.7917 13.0833 27.7097 13.0833 26.375C13.0833 25.0403 12.0014 23.9583 10.6667 23.9583C9.33198 23.9583 8.25 25.0403 8.25 26.375C8.25 27.7097 9.33198 28.7917 10.6667 28.7917Z"
              stroke="#3F3F3F"
              stroke-width="2.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M25.1667 28.7917C26.5014 28.7917 27.5833 27.7097 27.5833 26.375C27.5833 25.0403 26.5014 23.9583 25.1667 23.9583C23.832 23.9583 22.75 25.0403 22.75 26.375C22.75 27.7097 23.832 28.7917 25.1667 28.7917Z"
              stroke="#3F3F3F"
              stroke-width="2.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.85117 8.24999H28.7916L26.7616 18.3879C26.6511 18.9442 26.3484 19.4439 25.9066 19.7996C25.4648 20.1553 24.912 20.3442 24.3449 20.3333H11.5728C10.9828 20.3383 10.4113 20.1273 9.96612 19.74C9.52095 19.3527 9.23286 18.8159 9.15617 18.2308L7.3195 4.31083C7.24334 3.72991 6.95872 3.19643 6.51862 2.80968C6.07852 2.42292 5.5129 2.20922 4.927 2.20833H2.20825"
              stroke="#3F3F3F"
              stroke-width="2.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        }
      >
        <Button>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 4H3.16667H16.5"
              stroke="#B6B6B6"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.57143 4.2V2.6C5.57143 2.17565 5.75204 1.76869 6.07353 1.46863C6.39502 1.16857 6.83106 1 7.28571 1H10.7143C11.1689 1 11.605 1.16857 11.9265 1.46863C12.248 1.76869 12.4286 2.17565 12.4286 2.6V4.2M15 4.2V15.4C15 15.8243 14.8194 16.2313 14.4979 16.5314C14.1764 16.8314 13.7404 17 13.2857 17H4.71429C4.25963 17 3.82359 16.8314 3.5021 16.5314C3.18061 16.2313 3 15.8243 3 15.4V4.2H15Z"
              stroke="#a0a0a0"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.33337 8.16667V13.1667"
              stroke="#a0a0a0"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.6666 8.16667V13.1667"
              stroke="#a0a0a0"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
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
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
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
