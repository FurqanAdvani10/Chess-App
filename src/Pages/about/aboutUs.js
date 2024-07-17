import React from 'react'
import './aboutUs.css';

function AboutUs() {



  return (
    <div className='about-main section-padding' id='about'>
        <div className='container'>
            <div className='row'>

            <div className='col-md-6 col-xl-4 col-sm-12 col-lg-6'>
            <div className='about-box'>
                <div className='about-head'>
                    <h4 className='m-0 p-0'>
                    ABOUT CHESS HOUSE
                    </h4>
                    <h1 className='p-0 m-0'> 
                    BRITISH ROOTS, INTERNATIONAL EXPERIENCE
                    </h1>
                </div>
                <div className='about-para'>
                    <p>Founded by two London-based architectural designers, Skyline Chess takes iconic architecture from around the world and pits the greats against each other, bringing impeccable design and gamesmanship into a beautiful set.

</p>
                </div>
                <div className='about-btn'>
                    <button>
                        READ MORE
                    </button>
                </div>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs