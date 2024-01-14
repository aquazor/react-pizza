import './SortPanel.scss';
import { useState } from 'react';
import { images } from '../../constants/images';
import Button from '../Button/Button';
import { SORT_OPTIONS } from '../../constants/constants';

const SortPanel = ({ value, onChange }) => {
  const [sortPanelOpen, setSortPanelOpen] = useState(false);

  const handleOptionClick = (optionIndex) => {
    onChange(optionIndex);
    setSortPanelOpen(false);
  };

  return (
    <div className="sortPanel flex__center">
      <div className="sortPanel__content">
        <Button onClick={() => setSortPanelOpen((prev) => !prev)}>
          <img src={images.sortTriangle} width={10} height={6} alt="Triangle" />
          Сортировка по: <span>{SORT_OPTIONS[value]}</span>
        </Button>
      </div>

      {sortPanelOpen && (
        <ul className="sortList">
          {SORT_OPTIONS.map((optionName, index) => (
            <li
              className={value === index ? 'active' : null}
              onClick={() => handleOptionClick(index)}
              key={index}
            >
              {optionName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SortPanel;
