import './SortList.scss';
import SortListItem from '../SortListItem/SortListItem';

const sortOptions = [{ title: 'популярности' }, { title: 'цене' }, { title: 'алфавиту' }];

const SortList = ({ setSortPanelOpen, setSortValue }) => {
  return (
    <ul className="sortList">
      {sortOptions.map((option, index) => (
        <SortListItem
          key={index}
          option={option}
          setSortPanelOpen={setSortPanelOpen}
          setSortValue={setSortValue}
        />
      ))}
    </ul>
  );
};

export default SortList;
