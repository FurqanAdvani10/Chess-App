import React, { useEffect, useState } from 'react';
import './feature.css';
import { useNavigate } from 'react-router-dom';
import data from './../../feature.json';


function FeatureProducts() {

  const navigate = useNavigate()
  const [products, setProducts] = useState([]);

  useEffect(() => {
      setProducts(data);
    }, []);

  function handleCardClick (product){
    navigate(`/details/${product?.id}` , { state: { productData: product } });
    
} 

  return (
    <div className='feature-main section-padding' id='feature'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='product-head'>
              <h1>FEATURE PRODUCTS</h1>
            </div>
          </div>
        </div>
        <div className='feature-container'>
          <div className='feature-scroll'>
            {data?.map((product, index) => (
              <div className='feature-box' key={product?.id}
              onClick={() => handleCardClick(product)}>
                <div className='feature-content'>
                  <div className='feature-box-img'>
                    <img
                      src={product?.banner}
                      alt='product'
                    />
                  </div>
                  <div className='feature-content-main'>
                    <div className='feature-details'>
                      <h3 className='m-0 p-0'>{product?.title}</h3>
                      <h4 className='m-0 p-0'>{product?.price}</h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureProducts;
