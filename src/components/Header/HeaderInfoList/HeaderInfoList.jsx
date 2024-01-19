import './HeaderInfoList.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { images } from '../../../constants/images';

const HeaderInfoList = () => {
  const { cartItemsCount, cartItemsPrice } = useSelector((state) => state.cart);

  return (
    <ul className="header__infoList flex__center">
      <li>{cartItemsPrice}</li>
      <li className="header__infoList-divider"></li>
      <li className="header__infoList-cartInfo">
        <Link to={'/cart'}>
          <img src={images.cart} width={16} height={16} alt="Cart" />
          {cartItemsCount}
        </Link>
      </li>
    </ul>
  );
};

export default HeaderInfoList;
