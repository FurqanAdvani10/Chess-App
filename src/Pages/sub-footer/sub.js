import React from 'react'
import './sub.css'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6'


function SubFooter() {
    return (
        <div className='sub-main '>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 col-sm-12 col-lg-12'>
                        <div className='sub-content'>
                            <div className='sub-logo'>
                                <img src='https://www.chesshouse.com/cdn/shop/files/chesshouse-full-logo-white_8084e40a-89b2-4281-bba3-6093cfdae545.png?v=1614296791&width=450' alt='logo' />
                            </div>
                            <div className='sub-link'>
                                <h4>
                                    LET'S WORK TOGETHER JUST DROP ME A LINE - <span>INFO@EXAMPLE.COM</span>
                                </h4>
                            </div>
                            <div className='sub-icons'>
                                <i>
                                    <FaInstagram size={30} />
                                </i>
                                <i>
                                    <FaFacebook size={30} />
                                </i>
                                <i>
                                    <FaLinkedin size={30} />
                                </i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubFooter