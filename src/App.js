import './App.css';
import Banner from './Banner';
import Blog from './Blog';
import Featuredsec from './Featuredsec';
import Footer from './Footer';
import Header from './Header';
import Offer from './Offer';
import Product from './Product';

function App() {
  return (
    <div className='app'>
      <Header />
      <Banner />
      <Featuredsec />
      <Product />
      <Offer />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
