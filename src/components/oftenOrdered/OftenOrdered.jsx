import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import OftenSlides from '../oftenSlide/OftenSlides';
import { Component } from 'react';
export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <OftenSlides
            image={'https://cdn-icons-png.flaticon.com/128/432/432339.png'}
            up='50000'
            bottom='hello world'
            />
          </div>
          <div>
          <OftenSlides
            image={'https://cdn-icons-png.flaticon.com/128/432/432339.png'}
            up='50000'
            bottom='hello world'
            />
          </div>
          <div>
          <OftenSlides
            image={'https://cdn-icons-png.flaticon.com/128/432/432339.png'}
            up='50000'
            bottom='hello world'
            />
          </div>
          <div>
          <OftenSlides
            image={'https://cdn-icons-png.flaticon.com/128/432/432339.png'}
            up='50000'
            bottom='hello world'
            />
          </div>
          <div>
          <OftenSlides
            image={'https://cdn-icons-png.flaticon.com/128/432/432339.png'}
            up='50000'
            bottom='hello world'
            />
          </div>
          <div>
          <OftenSlides
            image={'https://cdn-icons-png.flaticon.com/128/432/432339.png'}
            up='50000'
            bottom='hello world'
            />
          </div>
          <div>
          <OftenSlides
            image={'https://cdn-icons-png.flaticon.com/128/432/432339.png'}
            up='50000'
            bottom='hello world'
            />
          </div>
          <div>
          <OftenSlides
            image={'https://cdn-icons-png.flaticon.com/128/432/432339.png'}
            up='50000'
            bottom='hello world'
            />
          </div>
        </Slider>
      </div>
    );
  }
}
