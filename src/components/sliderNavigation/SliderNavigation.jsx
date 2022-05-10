
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Slide from '../slide/Slide'

// const PrevBtn = (props) => { 
//     return <div onClick={props.onClick}>Prev</div> 
// } 
// const NextBtn = (props) => { 
//     return <div onClick={props.onClick}>Next</div> 
// } 

export default function SliderInfo(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    // prevArrow: <PrevBtn />, 
    // nextArrow: <NextBtn /> 
  };
  return (
    <div className='Slider_wrapper'>

      <Slider {...settings}>
        <div>
          <Slide
            image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR55Kd33tqAuKNoeHmoKeetyEL8nZIRhWn92w&usqp=CAU'}
            description='hello world'
          />
        </div>
        <div>
          <Slide
            image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUYnq7O4vXY4a3mW-ZQo_wziI1l3xqZFHTRw&usqp=CAU'}
            description='hello world'
          />
        </div>
        <div>
          <Slide
            image={'https://cdn-icons-png.flaticon.com/128/3595/3595455.png'}
            description='hello world'
          />
        </div>
        <div>
          <Slide
            image={'https://cdn-icons-png.flaticon.com/128/3595/3595455.png'}
            description='hello world'
          />
        </div>
        <div>
          <Slide
            image={'https://cdn-icons-png.flaticon.com/128/3595/3595455.png'}
            description='hello world'
          />
        </div>
        <div>
          <Slide
            image={'https://cdn-icons-png.flaticon.com/128/3595/3595455.png'}
            description='hello world'
          />
        </div>
      </Slider>
    </div>
  );

}