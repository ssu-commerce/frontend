import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ReactNode } from "react";

const Carousel = ({ children }: { children: ReactNode }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return <Slider {...settings}>{children}</Slider>;
};

export default Carousel;
