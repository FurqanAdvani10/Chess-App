import Hero from "./hero/hero"
import Header from "./navbar/header"
import Testimonail from "./testimonial/testimonail"
import AboutUs from "./about/aboutUs"
import Product from "./products/product"
import FeatureProducts from './features/feature'
import Footer from "./footer/footer"
import SubFooter from "./sub-footer/sub"
import SignUp from "./save/save"
import Vision from "./vision/our-vision"



function Pages() {
  return (
    <>
    <Header />
    <div style={{ height: '0', padding: '0px' }}>
            </div>
    <Hero />
    <Product />
    <AboutUs />
    <FeatureProducts />
    <Vision />
    < SignUp />
    <Testimonail />
    <SubFooter />
    <Footer />
    </>

  )
}



export default Pages