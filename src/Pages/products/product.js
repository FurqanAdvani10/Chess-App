import React, { useEffect, useState } from 'react'
import './product.css'
import data from './../../data.json';
import { useNavigate } from 'react-router-dom';


function Product() {

    const navigate = useNavigate()
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(data);
      }, []);

function handleCardClick (product){
    navigate(`/details/${product?.id}` , { state: { productData: product } });
} 

    return (
        <div className='product-main section-padding' id='product'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 col-xl-12 col-lg-12 col-sm-12'>
              <div className='product-head'>
                <h1>OUR PRODUCTS</h1>
              </div>
            </div>
          </div>
          <div className='product-container'>
            <div className='row'>
              {products.map((product) => (
                <div key={product.id} 
                onClick={() => handleCardClick(product)}
                className='col-md-6 col-xl-3 col-lg-6 col-sm-12 col-12'>
                  <div className='product-box'>
                    <div className='product-content'>
                      <div className='product-box-img'>
                        <img src={product.banner} alt={product.title} />
                      </div>
                      <div className='product-content-main'>
                        <div className='product-details'>
                          <h3 className='m-0 p-0'>{product.title}</h3>
                          <h4 className='m-0 p-0'>{product.price}</h4>
                        </div>
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

export default Product