import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { FreeMode, Navigation, Thumbs } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';

import { useLocation } from 'react-router-dom';
import { FreeMode, Navigation, Thumbs, Scrollbar, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/scrollbar';

import './details.css'
import Header from '../navbar/header';
import FeatureProducts from '../features/feature';
import AboutUs from '../about/aboutUs';
import Footer from '../footer/footer';


function Details() {
  const [thumbsSwiper, setThumbsSwiper] = useState();
  const location = useLocation();
  const { productData = [] } = location?.state;

  // const productData = {}

  // console.log("location", location)


  const faqData = [
    { id: 1, question: 'ADDITIONAL INFORMATION', answer: 'This FAQ section provides answers to commonly asked questions about our service.' },
    { id: 2, question: 'DO YOU NEED CHESS ', answer: 'No, our users are using many different brokers and platforms to place trades , our education is adaptable through all platforms.' },
    // Add more FAQ items as needed
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  if (!productData) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Header />
      <div style={{ height: '30px', padding: '50px' }}>
      </div>
      <div className='details-main section-padding '>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12 col-md-6 col-lg-7 col-xl-7 '>
              <div className='slider-main'>
                <>
                  <Swiper
                    style={{
                      '--swiper-navigation-color': '#000000',
                      '--swiper-pagination-color': '#fff',
                    }}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    freeMode="true"
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                  >
                    {productData?.images?.map((image, index) => (
                      <SwiperSlide key={index}>
                        <img src={image} alt={`product ${index}`} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <Swiper
                    // onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    // freeMode='true'
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                  >
                    {productData?.images?.map((image, index) => (
                      <SwiperSlide key={index}>
                        <img src={image} alt={`thumbnail ${index}`} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </>
              </div>

            </div>
            <div className='col-sm-12 col-md-6 col-lg-5 col-xl-5'>
              <div className='details-info' >
                <div className='pro-name'>
                  <h1>
                    {productData?.title}
                  </h1>
                </div>
                <div className='pro-price-tax'>
                  <h4>
                    {productData?.price}
                  </h4>
                  <p>
                    {productData?.tax}
                  </p>
                </div>
                < hr className='details-hr' />
                <div className='pro-add-info'>
                  <button>
                    ADD TO CART
                  </button>
                  <div className='pro-details'>

                  <ul>
                    {productData?.details?.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                    </div>

                    
        <div className="faq-container">
          {faqData.map((item) => (
            <div className="faq-item" key={item.id} onClick={() => toggleAnswer(item.id)}>
              <div className="question d-flex justify-content-between">{item.question}
                <div className='plus d-flex '>
                  <h3 className='m-0'>+</h3>
                </div>
              </div>
              {activeIndex === item.id &&
                <div className='d-flex justify-content-between'>
                  <div className="answer">{item.answer}

                  </div>
                  <div>
                    <h3 className='m-0'>-</h3>
                  </div>
                </div>
              }
            </div>
          ))}
        </div>
                </div>
              </div>
            </div>



          </div>
        </div>
      </div>
          <AboutUs />
          <FeatureProducts />
          <Footer />

    </>

  )
}

export default Details