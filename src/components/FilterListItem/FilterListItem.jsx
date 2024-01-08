import './FilterListItem.scss';
import Button from '../Button/Button';

const FilterListItem = ({ item }) => {
  return (
    <li className="filterList__item">
      <Button>{item.title}</Button>
    </li>
  );
};

export default FilterListItem;
