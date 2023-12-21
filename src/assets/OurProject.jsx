import React from 'react';
import '../assets/OurProject.css'
import image_oval from '../../img/Oval.png'
import image_oval2 from '../../img/Oval (1).png'
import image_oval_slide from '../../img/Photo.png'
import photo1 from '../../img/Photo (1).png'
import photo2 from '../../img/Photo (2).png'

const OurProject = () => {
    return (
       <div>
        <div className='our_project'>
            <div>
            <div>
                <h4 className='our_project_heading' >
                Our recent <span>projects</span>
                </h4>
                <h6 className='our_project_heading_6'>
                Website development for Digital Company
                </h6>
                <p className='our_project_heading_para'>
                My first thought about art, as a child, was that the artist<br/> brings something into the world that didn't exist before, and <br/> that he does it without destroying something else
                </p>
            </div>
            <div className='slid_img_oval'>
                <div className="">
                    <ul>
                        <li><a href=""><img src={image_oval} alt="" /></a></li>
                        <li><a href=""><img src={image_oval2} alt="" /></a></li>
                        <li><a href=""><img src={image_oval2} alt="" /></a></li>
                        <li><a href=""><img src={image_oval2} alt="" /></a></li>
                        <li><a href=""><img src={image_oval2} alt="" /></a></li>
                        <li><a href=""><img src={image_oval2} alt="" /></a></li>
                    </ul>
                </div>
                <div className="">
                <img src={image_oval_slide} alt="" />
                </div>
            </div>
        </div>
        <div className="">
                <div className="">
                    <img src={photo1} alt="" />
                </div>
                <div className="">
                    <img src={photo2} alt="" />
                </div>
        </div>
        </div>
       </div>
    );
};

export default OurProject;