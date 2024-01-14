import './PizzaList.scss';
import { useEffect, useState } from 'react';
import { sortPizzas } from '../../../utils/sortPizzas';
import PizzaListItem from '../PizzaListItem/PizzaListItem';

const PizzaList = ({ value, categoryId, sortValue }) => {
  const [filteredPizzas, setFilteredPizzas] = useState([]);

  useEffect(() => {
    let filtered;
    if (categoryId === 0) {
      filtered = value;
    } else {
      filtered = value.filter((item) => item.category === categoryId);
    }

    const sorted = sortPizzas(filtered, sortValue);
    setFilteredPizzas([...sorted]);
  }, [value, categoryId, sortValue]);

  const renderedPizzas = filteredPizzas.map((item) => (
    <PizzaListItem item={item} key={item.id} />
  ));

  return <ul className="pizzaList">{renderedPizzas}</ul>;
};

export default PizzaList;
