import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { useAppSelector } from '../../components/hooks';
import NavBar from '../../components/nav-bar/nav-bar';
import ProductCards from '../../components/product-cards/product-cards';
import { getProducts } from '../../store/slices/all-products/selectors';
import './main.css';

export default function Main() {
  const cards = useAppSelector(getProducts);

  return (
    <div className='main-page'>
      <Header />
      <div className='nav-main-container'>
        <ProductCards cards={cards} />
        <NavBar />
      </div>
      <Footer />
    </div>
  );
}
