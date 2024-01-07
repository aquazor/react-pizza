import './App.scss';
import { images } from './constants/images';

const App = () => {
  return (
    <div id="wrapper">
      <header className="header section__padding">
        <div className="logo flex__center">
          <img src={images.logo} width={38} height={38} alt="Logo" />
          <div className="logo__text">
            <h1>REACT PIZZA</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>

        <ul className="header__infoList flex__center">
          <li>520 ₸</li>
          <li className="header__infoList-divider"></li>
          <li className="header__infoList-cartInfo">
            <button type="button" className="flex__center">
              <img src={images.cart} width={16} height={16} alt="Cart" />0
            </button>
          </li>
        </ul>
      </header>

      <main>
        <section className="home section__padding">
          <div className="home__filter">
            <ul className="home__filter-list">
              <li>
                <button type="button">Все</button>
              </li>
              <li>
                <button type="button">Мясные</button>
              </li>
              <li>
                <button type="button">Вегетарианская</button>
              </li>
              <li>
                <button type="button">Гриль</button>
              </li>
              <li>
                <button type="button">Острые</button>
              </li>
              <li>
                <button type="button">Закрытые</button>
              </li>
            </ul>

            <div className="home__filter-sort flex__center">
              <div className="home__filter-sort__option flex__center">
                <span>
                  <img src={images.sortTriangle} width={10} height={6} alt="Triangle" />
                  Сортировка по:
                </span>
                <span>популярности</span>
              </div>
              {/* <ul className="home__filter-sort__optionsList">
                <li>популярности</li>
                <li>цене</li>
                <li>алфавиту</li>
              </ul> */}
            </div>
          </div>

          <div className="home__heading section__heading">
            <h2>Все пиццы</h2>
          </div>

          <ul className="pizzaList">
            <li className="pizzaList__item">
              <div className="pizzaList__item-image flex__center">
                <img src={images.logo} width={260} height={260} alt="Pizza" />
              </div>

              <h3>Чизбургер-пицца</h3>
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
                <h4>от 395 ₽</h4>
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
            <li className="pizzaList__item">
              <div className="pizzaList__item-image flex__center">
                <img src={images.logo} width={260} height={260} alt="Pizza" />
              </div>

              <h3>Чизбургер-пицца</h3>
              <div className="pizzaList__item-options">
                <ul className="pizzaList__item-options__list">
                  <li className="pizzaList__item-options__list-item flex__center">
                    <button type="button">тонкое</button>
                  </li>
                  <li className="pizzaList__item-options__list-item flex__center">
                    <button type="button">традиционное</button>
                  </li>
                </ul>

                <ul className="pizzaList__item-options__list">
                  <li className="pizzaList__item-options__list-item flex__center">
                    <button type="button">26 см.</button>
                  </li>
                  <li className="pizzaList__item-options__list-item flex__center">
                    <button type="button">30 см.</button>
                  </li>
                  <li className="pizzaList__item-options__list-item flex__center">
                    <button type="button">40 см.</button>
                  </li>
                </ul>
              </div>

              <div className="pizzaList__item-footer">
                <h4>от 395 ₽</h4>
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
            <li className="pizzaList__item">
              <div className="pizzaList__item-image flex__center">
                <img src={images.logo} width={260} height={260} alt="Pizza" />
              </div>

              <h3>Чизбургер-пицца</h3>
              <div className="pizzaList__item-options">
                <ul className="pizzaList__item-options__list">
                  <li className="pizzaList__item-options__list-item flex__center">
                    <button type="button">тонкое</button>
                  </li>
                  <li className="pizzaList__item-options__list-item flex__center">
                    <button type="button">традиционное</button>
                  </li>
                </ul>

                <ul className="pizzaList__item-options__list">
                  <li className="pizzaList__item-options__list-item flex__center">
                    <button type="button">26 см.</button>
                  </li>
                  <li className="pizzaList__item-options__list-item flex__center">
                    <button type="button">30 см.</button>
                  </li>
                  <li className="pizzaList__item-options__list-item flex__center">
                    <button type="button">40 см.</button>
                  </li>
                </ul>
              </div>

              <div className="pizzaList__item-footer">
                <h4>от 395 ₽</h4>
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
            <li className="pizzaList__item">
              <div className="pizzaList__item-image flex__center">
                <img src={images.logo} width={260} height={260} alt="Pizza" />
              </div>

              <h3>Чизбургер-пицца</h3>
              <div className="pizzaList__item-options">
                <ul className="pizzaList__item-options__list">
                  <li className="pizzaList__item-options__list-item flex__center">
                    <button type="button">тонкое</button>
                  </li>
                  <li className="pizzaList__item-options__list-item flex__center">
                    <button type="button">традиционное</button>
                  </li>
                </ul>

                <ul className="pizzaList__item-options__list">
                  <li className="pizzaList__item-options__list-item flex__center">
                    <button type="button">26 см.</button>
                  </li>
                  <li className="pizzaList__item-options__list-item flex__center">
                    <button type="button">30 см.</button>
                  </li>
                  <li className="pizzaList__item-options__list-item flex__center">
                    <button type="button">40 см.</button>
                  </li>
                </ul>
              </div>

              <div className="pizzaList__item-footer">
                <h4>от 395 ₽</h4>
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
            <li className="pizzaList__item">
              <div className="pizzaList__item-image flex__center">
                <img src={images.logo} width={260} height={260} alt="Pizza" />
              </div>

              <h3>Чизбургер-пицца</h3>
              <div className="pizzaList__item-options">
                <ul className="pizzaList__item-options__list">
                  <li className="pizzaList__item-options__list-item flex__center">
                    <button type="button">тонкое</button>
                  </li>
                  <li className="pizzaList__item-options__list-item flex__center">
                    <button type="button">традиционное</button>
                  </li>
                </ul>

                <ul className="pizzaList__item-options__list">
                  <li className="pizzaList__item-options__list-item flex__center">
                    <button type="button">26 см.</button>
                  </li>
                  <li className="pizzaList__item-options__list-item flex__center">
                    <button type="button">30 см.</button>
                  </li>
                  <li className="pizzaList__item-options__list-item flex__center">
                    <button type="button">40 см.</button>
                  </li>
                </ul>
              </div>

              <div className="pizzaList__item-footer">
                <h4>от 395 ₽</h4>
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
            <li className="pizzaList__item">
              <div className="pizzaList__item-image flex__center">
                <img src={images.logo} width={260} height={260} alt="Pizza" />
              </div>

              <h3>Чизбургер-пицца</h3>
              <div className="pizzaList__item-options">
                <ul className="pizzaList__item-options__list">
                  <li className="pizzaList__item-options__list-item flex__center">
                    <button type="button">тонкое</button>
                  </li>
                  <li className="pizzaList__item-options__list-item flex__center">
                    <button type="button">традиционное</button>
                  </li>
                </ul>

                <ul className="pizzaList__item-options__list">
                  <li className="pizzaList__item-options__list-item flex__center">
                    <button type="button">26 см.</button>
                  </li>
                  <li className="pizzaList__item-options__list-item flex__center">
                    <button type="button">30 см.</button>
                  </li>
                  <li className="pizzaList__item-options__list-item flex__center">
                    <button type="button">40 см.</button>
                  </li>
                </ul>
              </div>

              <div className="pizzaList__item-footer">
                <h4>от 395 ₽</h4>
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
            <li className="pizzaList__item">
              <div className="pizzaList__item-image flex__center">
                <img src={images.logo} width={260} height={260} alt="Pizza" />
              </div>

              <h3>Чизбургер-пицца</h3>
              <div className="pizzaList__item-options">
                <ul className="pizzaList__item-options__list">
                  <li className="pizzaList__item-options__list-item flex__center">
                    <button type="button">тонкое</button>
                  </li>
                  <li className="pizzaList__item-options__list-item flex__center">
                    <button type="button">традиционное</button>
                  </li>
                </ul>

                <ul className="pizzaList__item-options__list">
                  <li className="pizzaList__item-options__list-item flex__center">
                    <button type="button">26 см.</button>
                  </li>
                  <li className="pizzaList__item-options__list-item flex__center">
                    <button type="button">30 см.</button>
                  </li>
                  <li className="pizzaList__item-options__list-item flex__center">
                    <button type="button">40 см.</button>
                  </li>
                </ul>
              </div>

              <div className="pizzaList__item-footer">
                <h4>от 395 ₽</h4>
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
          </ul>
        </section>
        <section className="cart section__padding">
          <div className="cart__heading section__heading">
            <h2 className="flex__center">
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
              Корзина
            </h2>

            <button type="button" className="flex__center">
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
            </button>
          </div>

          <ul className="cartList">
            <li className="cartList__item">
              <div className="cartList__item-info">
                <img src={images.logo} width={80} height={80} alt="pizza" />
                <div className="cartList__item-info__description">
                  <h4 className="cartList__item-info__description-name">
                    Чизбургер-пицца
                  </h4>
                  <p className="cartList__item-info__description-options">
                    тонкое тесто, 30 см.
                  </p>
                </div>
              </div>
              <div className="cartList__item-quantity">
                <button type="button" className="flex__center">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="16"
                      cy="16"
                      r="15"
                      fill="#FFFFFF"
                      stroke="#FE5F1E"
                      stroke-width="2"
                    />
                    <path
                      d="M15.0402 15.04H19.8402C20.3704 15.04 20.8002 15.4698 20.8002 16C20.8002 16.5302 20.3704 16.96 19.8402 16.96H15.0402H12.1602C11.63 16.96 11.2002 16.5302 11.2002 16C11.2002 15.4698 11.63 15.04 12.1602 15.04H15.0402Z"
                      fill="#FE5F1E"
                    />
                  </svg>
                </button>
                <span>1</span>
                <button type="button" className="flex__center">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="16"
                      cy="16"
                      r="15"
                      fill="#FFFFFF"
                      stroke="#FE5F1E"
                      stroke-width="2"
                    />
                    <path
                      d="M19.8402 15.04H16.9602V12.16C16.9602 11.6299 16.5304 11.2 16.0002 11.2C15.47 11.2 15.0402 11.6299 15.0402 12.16V15.04H12.1602C11.63 15.04 11.2002 15.4699 11.2002 16C11.2002 16.5302 11.63 16.96 12.1602 16.96H15.0402V19.84C15.0402 20.3702 15.47 20.8 16.0002 20.8C16.5304 20.8 16.9602 20.3702 16.9602 19.84V16.96H19.8402C20.3704 16.96 20.8002 16.5302 20.8002 16C20.8002 15.4699 20.3704 15.04 19.8402 15.04Z"
                      fill="#EB5A1E"
                    />
                  </svg>
                </button>
              </div>
              <div className="cartList__item-price">
                <span>770 ₽</span>
              </div>
              <div className="cartList__item-button">
                <button className="flex__center" type="button">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="16"
                      cy="16"
                      r="15"
                      fill="#FFFFFF"
                      stroke="#a0a0a0"
                      stroke-width="2"
                    />
                    <path
                      d="M19.7479 17.9557L17.4993 15.7071L19.7479 13.4585C20.1618 13.0446 20.1618 12.3734 19.7479 11.9595C19.334 11.5455 18.6628 11.5455 18.2488 11.9595L16.0002 14.2081L13.7516 11.9595C13.3377 11.5455 12.6665 11.5455 12.2526 11.9595C11.8386 12.3734 11.8386 13.0446 12.2526 13.4585L14.5012 15.7071L12.2526 17.9557C11.8386 18.3696 11.8386 19.0409 12.2526 19.4548C12.6665 19.8687 13.3377 19.8687 13.7516 19.4548L16.0002 17.2062L18.2488 19.4548C18.6628 19.8687 19.334 19.8687 19.7479 19.4548C20.1618 19.0409 20.1618 18.3696 19.7479 17.9557Z"
                      fill="#a0a0a0"
                    />
                  </svg>
                </button>
              </div>
            </li>
          </ul>

          <ul className="cart__summary">
            <li className="cart__summary-quantity">
              Всего пицц: <strong>3 шт.</strong>
            </li>
            <li className="cart__summary-amount">
              Сумма заказа: <strong>900 ₽</strong>
            </li>
          </ul>

          <div className="cart__buttons">
            <button
              className="mainButton cart__buttons-backBtn flex__center"
              type="button"
            >
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
            </button>
            <button
              className="mainButton cart__buttons-payBtn flex__center"
              type="button"
            >
              Оплатить сейчас
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
