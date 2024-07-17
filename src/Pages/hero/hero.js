import React from 'react'
import './hero.css'
import video from '../../Assests/Amazing HDR 8k Chess Duel Dolby Vision.mp4'

function Hero() {
  return (
    <div className='hero-main' id='home'>
              <div className="video-container">
                <video className="video"  autoPlay muted loop>
                    <source src={video} type="video/mp4" />
                </video>
                <div className="video-overlay"></div>
            </div>
    </div>
  )
}

export default Hero