import './App.css';
import AboutUs from './Pages/about/aboutUs';
import FeatureProducts from './Pages/features/feature';
// import Feature from './Pages/features/features';
import Footer from './Pages/footer/footer';
import Hero from './Pages/hero/hero';
import Header from './Pages/navbar/header';
import Product from './Pages/products/product';
import SignUp from './Pages/save/save';
import SubFooter from './Pages/sub-footer/sub';
import Testimonail from './Pages/testimonial/testimonail';
import Vision from './Pages/vision/our-vision';
import Routepage from './Routes/route';
import Route from './Routes/route';
import ExcelToSIF from './converter';
import ExcelToSIFConverter from './converter';
import ExcelToCsv from './converter';

function App() {
  return (
    <div className="App">
        <Header /> 
        <div style={{ height: '0', padding: '0px' }}>
            </div>
        <Hero />
        <Product />
        <AboutUs />
        <FeatureProducts />
        <Vision />
        <SignUp />
        <Testimonail />
        <SubFooter />
        <Footer /> 
        {/* <Routepage /> */}
        {/* < ExcelToSIF /> */}
    </div>
  );
}

export default App;
