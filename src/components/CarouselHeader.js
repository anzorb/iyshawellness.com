import React from 'react';
import Header from './Header';
import Slider from "react-slick";

const settings = {
	dots: true,
	infinite: true,
	autoplaySpeed: 5000,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	fade: true
};
  
const CarouselHeader = ({ images }) => (
	<Slider {...settings}>
	{
		images.map((c, id) => <Header key={id} image={c} />)
	}
	</Slider>
);


export default CarouselHeader;