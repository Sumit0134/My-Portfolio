import React from 'react'
import "./Portfolio.css"
import {Swiper, SwiperSlide} from "swiper/react"
import IndianTourism from "../../img/indiantourism.png"
import portfolio from "../../img/portfolio.png"
import MusicBar from "../../img/musicbar.png"
import NetflixClone from "../../img/netflixclone.png"
import "swiper/css"

const Portfolio = () => {
  return (
    <div className="portfolio" id="Portfolio">
        <span>Recent Projects</span>
        <span>Portfolio</span>

        <Swiper
        // spaceBetween={30}
        // slidesPerView={3}
        // grabCursor={true}
        spaceBetween={30}
    slidesPerView={3} // Default for large screens
    grabCursor={true}
    breakpoints={{
      // when the window is <= 480px
      480: {
        slidesPerView: 1, // 1 slide on small screens
        spaceBetween: 10
      },
      // when the window is <= 768px
      768: {
        slidesPerView: 2, // 2 slides on medium screens
        spaceBetween: 20
      },
      // when the window is >= 768px
      1000: {
        slidesPerView: 3, // 3 slides on large screens
        spaceBetween: 30
      }
    }}
        className='portfolio-slider'
        >
            <SwiperSlide>
                <img src={IndianTourism} alt="" />
                <div className='names'>Indian Tourism</div>
                <div className='links'>
                <a href="https://github.com/Sumit0134/indian-tourism"><button className="button">GitHub</button></a>
                <a href="https://indian-tourism.vercel.app/"><button className="button">Live</button></a>
                <a href="https://www.youtube.com/playlist?list=PLuOzmjzCw1i2qPLJQlfzQ7ZLNcMPf3hWs"><button className="button">Demo</button></a>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <img src={portfolio} alt="" />
                <div className='names'>Portfolio Website</div>
                <div className='links'>
                <a href="https://github.com/Sumit0134/My-Portfolio"><button className="button">GitHub</button></a>
                <a href="/"><button className="button">Live</button></a>
                <a href="/"><button className="button">Demo</button></a>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <img src={MusicBar} alt="" />
                <div className='names'>Music Bar</div>
                <div className='links'>
                <a href="https://github.com/Sumit0134/Music-Bar"><button className="button">GitHub</button></a>
                <a href="https://musicbar.freewebhostmost.com/"><button className="button">Live</button></a>
                <a href="https://drive.google.com/file/d/1egmW7cL0sRHwotZAjByCUGQ7enCMfQ54/view?usp=sharing"><button className="button">Demo</button></a>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <img src={NetflixClone} alt="" />
                <div className='names'>Netflix Clone</div>
                <div className='links'>
                <a href="https://github.com/Sumit0134/Netflix-Website-Clone"><button className="button">GitHub</button></a>
                <a href="https://kaleidoscopic-sprinkles-11bfb8.netlify.app/"><button className="button">Live</button></a>
                <a href="https://drive.google.com/file/d/1suWprCdFBaTTxyhXLdRuGKYvdE4dntUa/view?usp=sharing"><button className="button">Demo</button></a>
                </div>
            </SwiperSlide>
        </Swiper>

    </div>
  )
}

export default Portfolio
