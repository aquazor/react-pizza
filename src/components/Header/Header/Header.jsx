import './Header.scss';
import Logo from '../../Logo/Logo';
import HeaderInfoList from '../HeaderInfoList/HeaderInfoList';

const Header = () => {
  return (
    <header className="header section__padding">
      <Logo />
      <HeaderInfoList />
    </header>
  );
};

export default Header;
