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

          <h2>Все пиццы</h2>

          <ul className="pizzaList">
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
      </main>
    </div>
  );
};

export default App;
