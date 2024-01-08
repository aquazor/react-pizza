import './HomePage.scss';
import { useState } from 'react';
import { images } from '../../constants/images';
import {
  SectionHeading,
  PizzaList,
  FilterList,
  SortList,
  Button,
} from '../../components';

const filterOptions = [
  { title: 'Все' },
  { title: 'Мясные' },
  { title: 'Вегетарианская' },
  { title: 'Гриль' },
  { title: 'Острые' },
  { title: 'Закрытые' },
];

const HomePage = () => {
  const [sortValue, setSortValue] = useState('популярности');
  const [sortPanelOpen, setSortPanelOpen] = useState(false);

  return (
    <section className="home section__padding">
      <header className="home__header">
        <FilterList data={filterOptions} />

        <div className="home__header-sortPanel flex__center">
          <div className="home__header-sortPanel__content flex__center">
            <Button onClick={() => setSortPanelOpen((prev) => !prev)}>
              <img src={images.sortTriangle} width={10} height={6} alt="Triangle" />
              Сортировка по:
            </Button>

            <span>{sortValue}</span>
          </div>

          {sortPanelOpen && (
            <SortList setSortPanelOpen={setSortPanelOpen} setSortValue={setSortValue} />
          )}
        </div>
      </header>

      <SectionHeading title={'Все пиццы'} />

      <PizzaList />
    </section>
  );
};

export default HomePage;
