import './CategoriesList.scss';
import Button from '../Button/Button';
import { CATEGORIES } from '../../constants/constants';

const CategoriesList = ({ value, onChange }) => {
  const handleClick = (index) => {
    onChange(index);
  };

  return (
    <ul className="categoriesList">
      {CATEGORIES.map((categoryName, index) => {
        return (
          <li className="categoriesList__item" key={index}>
            <Button
              className={value === index ? 'active' : null}
              onClick={() => handleClick(index)}
            >
              {categoryName}
            </Button>
          </li>
        );
      })}
    </ul>
  );
};

export default CategoriesList;
