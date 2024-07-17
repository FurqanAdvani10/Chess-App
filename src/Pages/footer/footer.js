import React from 'react'
import './footer.css'
import { FaPhone } from "react-icons/fa6";
import { IoIosMailOpen } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";

function Footer() {
  return (
    <div>
            {/* <!-- FOOTER START --> */}
            <div class="footer section-top">
                <div class="contain container">
                    <div className='row'>

                    <div class="col col-sm-12 col-md-12 col-lg-6  col-xl-4   col-hr">
                        <h1>About</h1>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consect etur adi pisicing elit sed do eiusmod.</li>
                            <hr className='hr-line' />
                            <li>
                                <div className='foter-icon-content'>
                                    <div className='footer-icon'>
                                        <FaPhone />
                                    </div>
                                    <div className='content'>
                                        +32-(046) 006-8898
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='foter-icon-content'>
                                    <div className='footer-icon'>
                                        <IoIosMailOpen />

                                    </div>
                                    <div className='content'>
                                        needhelp@company.com
                                    </div>
                                </div>

                            </li>
                            <li>
                                <div className='foter-icon-content'>
                                    <div className='footer-icon'>
                                        <FaLocationDot />

                                    </div>
                                    <div className='content'>
                                        DHA phase 8
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="col col-sm-12 col-md-12 col-lg-6  col-xl-4   link">
                        <h1>Links</h1>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#product">Products</a></li>
                            <li><a href="#vision">Vision</a></li>
                            <li><a href="#feature">Feature</a></li>
                            <li><a href="#about">About</a></li>
                        </ul>
                    </div>
               

                    <div class="col col-sm-12 col-md-6 col-lg-6  col-xl-4    social">
                        <div className='news-letter'>
                            <h1>
                                NEWSLETTER
                            </h1>
                            <div className='news-box'>
                                <div className='news-input'>
                                    <input />

                                </div>
                                <div className='news-btn'>
                                    <button>
                                        <i>
                                            <IoIosSend />
                                        </i>
                                    </button>
                                </div>
                            </div>
                            <div className='agree'>
                                <div className='agree-icon'>
                                    <i>
                                        <CiCircleCheck />
                                    </i>
                                </div>
                                <div className='agree-content'>
                                    <h4>
                                        I agree to all your terms and policies
                                    </h4>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="clearfix"></div>
                    <div className='footer-emd'>

                    <hr className='footer-line' />
                    <div className='end-content'>
                        <div className='right-side'>
                            <h4>
                             © Copyrights, 2024 CHESSHOUSE 
                            </h4>
                        </div>
                        <div className='left-side'>
                        <h4>
                        Terms & Conditions
                            </h4>
                            <h4>
                            Privacy Policy
                            </h4>
                        </div>
                    </div>
                    </div>
                    </div>

                </div>
            </div>
        </div>
  )
}

export default Footer