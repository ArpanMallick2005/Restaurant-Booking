import React from 'react';
import {Link} from "react-router-dom";
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';

const About = () => {
  return (
    <section className='about' id='about'>
      <div className="container">
        <div className="banner">
            <div className="top">
                <h1 className="heading">ABOUT US</h1>
                <p>The only thing we're serious about is food.</p>
            </div>
            <p className='mid'>
                A good food restaurant offers delicious, fresh, and hygienic meals prepared with quality ingredients. It provides a wide variety of dishes to suit different tastes and preferences. The atmosphere is clean, comfortable, and welcoming, with well-arranged seating and pleasant décor. Friendly and professional staff ensure quick and polite service, making customers feel valued. Many restaurants also provide online ordering, home delivery, and digital payment options for convenience. Affordable pricing, consistency in taste, and attractive presentation help build customer trust. Overall, a good restaurant focuses on taste, service, cleanliness, and customer satisfaction.
            </p>
            <Link to={"/"}>Explore Menu 
                <span>
                    <HiOutlineArrowNarrowRight/>
                </span>
            </Link>
        </div>
        <div className="banner">
            <img src="/about.png" alt="about"/>
        </div>
      </div>
    </section>
  )
}

export default About;
