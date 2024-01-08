import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { HomePage, CartPage } from './pages';

const App = () => {
  return (
    <div id="wrapper">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/cart" element={<CartPage />} exact />
        </Routes>
      </main>
    </div>
  );
};

export default App;
