import React from 'react';

const Header = () => {
    return (
        <>
           <header>
                <div className="container">
                    <a href="#" className="logo">logo</a>
                    <nav>
                    <div className="close-icon"><i className="fa-solid fa-xmark"></i></div>
                    <a href="#">Our service</a>
                    <a href="#">About Us</a>
                    <a href="#">Blog</a>
                    <a href="#">Contact Us</a>
                    </nav>
                    <div className="bar-icon"><i className="fa-solid fa-bars"></i></div>
                    <div className="overlay"></div>
                </div>
            </header>

           <div className="slider">
                <div className="ctn">
                <div className='lt_slider'>
                    <div className="hp">
                        <h1 className='slider_header' >
                        Grow your brand through digital
                        </h1>
                        <p className='slider_p'>
                        If the path is beautiful, let us not ask where it leads. my religion is very simple. my religion is kindness. each of us has within our power the ability to disrupt
                        </p>
                    </div> 
                    <button className='slider_btn'>
                        <a className='slider-btn_a' href="">LEARN MORE</a>
                    </button>
                </div>
                </div>
                <div className='rt_slider'>
                    <img className='sliderImage' src={img1} alt="" />
                </div>
           </div>
       </>
    );
};

export default Header;