import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { useAppSelector } from '../../components/hooks';
import NavBar from '../../components/nav-bar/nav-bar';
import ProductCards from '../../components/product-cards/product-cards';
import { getProducts } from '../../store/slices/all-products/selectors';

export default function Main() {
  const cards = useAppSelector(getProducts);
  return (
    <>
      <Header />
      <section>
        <ProductCards cards={cards} />
      </section>
      <NavBar />
      <Footer />
    </>
  );
}
