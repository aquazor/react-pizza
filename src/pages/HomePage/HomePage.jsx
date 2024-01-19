import './HomePage.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL, PIZZAS } from '../../constants/constants';
import { SectionHeading, PizzaList, CategoriesList, SortPanel } from '../../components';

const HomePage = () => {
  const [pizzas, setPizzas] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const [sortValue, setSortValue] = useState(0);

  useEffect(() => {
    const fetchPizzas = async () => {
      const { data } = await axios.get(`${BASE_URL}/${PIZZAS}`);
      setPizzas(data);
    };

    fetchPizzas();
  }, []);

  return (
    <section className="home section__padding">
      <header className="home__header">
        <CategoriesList value={categoryId} onChange={setCategoryId} />

        <SortPanel value={sortValue} onChange={setSortValue} />
      </header>

      <SectionHeading title={'Все пиццы'} />

      <PizzaList value={pizzas} sortValue={sortValue} categoryId={categoryId} />
    </section>
  );
};

export default HomePage;
