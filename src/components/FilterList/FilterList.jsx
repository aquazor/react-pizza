import './FilterList.scss';
import FilterListItem from '../FilterListItem/FilterListItem';

const FilterList = ({ data }) => {
  return (
    <ul className="filterList">
      {data.map((item, index) => (
        <FilterListItem key={index} item={item} />
      ))}
    </ul>
  );
};

export default FilterList;
