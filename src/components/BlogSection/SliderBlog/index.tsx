import { ReactNode } from "react";

import * as S from './styles'

interface SliderBlogProps {
  children: ReactNode;
}

export default function SliderBlog({ children }: SliderBlogProps) {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.2,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <S.SliderContainer {...settings}>
      {children}
    </S.SliderContainer>
  );
}