import React from 'react';
import sliderImage from '../../img/slider.png'
import carousel_change_btn from '../../img/Stroke 3.png'
import carousel_change_btn_img_rt from '../../img/right.png'

const Caurosel = () => {
    return (
        <div className="slider">
            <div className='slider_left'>
                <h1 className='slider_heading'>Grow your brand through digital</h1>
                <p className='slider_para'>
                If the path is beautiful, let us  not ask where it leads. my<br/> religion is very simple. my religion is kindness. each of us  <br/>has within our power the ability to disrupt
                </p>
                <button className='slider_btn'>
                    Learn More
                </button>
                <div className='carousel_change_btn_lt'>
                    <img className='carousel_change_btn_img' src={carousel_change_btn} alt="" />
                </div>
            </div>

            <div className="slider_rt">
                <img className='slider_img_rt' src={sliderImage} alt="" />

                <div className='carousel_change_btn_rt'>
                <img className='carousel_change_btn_img_rt' src={carousel_change_btn_img_rt} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Caurosel;