import './SortListItem.scss';

const SortListItem = ({ option, setSortValue, setSortPanelOpen }) => {
  const handleClick = () => {
    setSortValue(option.title);
    setSortPanelOpen(false);
  };

  return <li onClick={handleClick}>{option.title}</li>;
};

export default SortListItem;
