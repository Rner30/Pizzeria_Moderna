import { BrowserRouter as Ruter } from 'react-router-dom'
import { GlobalStyle } from "./GlobalStyles";
import Hero from "./components/Hero";
import Products from './components/Products';
import { productData , productData2} from './components/Products/data';
import Feature from './components/Features';
import Footer from './components/Footer';
function App() {
  return (
    <Ruter>
      <GlobalStyle/>
      <Hero/>
      <Products
        heading={'Elige tu favorita'}
        data={productData}
      />
      <Feature/>
      <Products
        heading={'Postres para vos'}
        data={productData2}
      />
      <Footer/>
    </Ruter>
  );
}

export default App;
