import './HeaderInfoList.scss';
import { Link } from 'react-router-dom';
import { images } from '../../../constants/images';

const HeaderInfoList = () => {
  return (
    <ul className="header__infoList flex__center">
      <li>520 ₸</li>
      <li className="header__infoList-divider"></li>
      <li className="header__infoList-cartInfo">
        <Link to={'/cart'}>
          <img src={images.cart} width={16} height={16} alt="Cart" />0
        </Link>
      </li>
    </ul>
  );
};

export default HeaderInfoList;
