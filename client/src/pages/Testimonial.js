import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Navbar from "../components/Navbar";
import "./testimonials.css";

export default class Testimonials extends Component {
  render() {
    return (
        <>
        <Navbar/>
        <br></br>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src="/images/my_image.jpg" />
          <div className="myCarousel">
            <h3>Aaryanaaditya Singh</h3>
            <h4>Startup Founder</h4>
            <p>
            Thank you Child Fund for the wonderful work you do, and for allowing people like me to be able to help! I sponsor 6 children and I have loved each and every one of them from day 1!
            </p>
          </div>
        </div>

        <div>
          <img src="/images/abj.jpeg" />
          <div className="myCarousel">
            <h3>Abhijit Sarkar</h3>
            <h4>Stock Market Trader</h4>
            <p>
            In 2005, my wife and I heard a Child Fund radio drive; we immediately called and each sponsored a child. Fast forward 14 years, we currently sponsor 4 children.
            </p>
          </div>
        </div>

        <div>
          <img src="/images/ladki.jpeg" />
          <div className="myCarousel">
            <h3>Rubika Liyakat</h3>
            <h4>Jornalist</h4>
            <p>
            Yes, I would recommend Compassion to a friend. As a current sponsor of 4 kids, I can highly recommend Compassion! I started sponsoring 2 kids 1.5 years ago and have had such a pleasant experience that God called me to sponsor 2 more kids! 
            </p>
          </div>
        </div>
      </Carousel>
      </>
    );
  }
}