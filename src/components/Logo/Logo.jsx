import './Logo.scss';
import { Link } from 'react-router-dom';
import { images } from '../../constants/images';

const Logo = () => {
  return (
    <div className="logo">
      <Link to={'/'}>
        <img src={images.logo} width={38} height={38} alt="Logo" />
        <div className="logo__text">
          <h1>REACT PIZZA</h1>
          <p>самая вкусная пицца во вселенной</p>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
