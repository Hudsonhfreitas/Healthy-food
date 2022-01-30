import { ReactNode } from "react";
import { useMediaQuery } from 'react-responsive'

import * as S from './styles'

interface SliderBlogProps {
  children: ReactNode;
}

export default function SliderBlog({ children }: SliderBlogProps) {

  const isSmallDesktop = useMediaQuery({
    query: '(max-width: 835px)'
  })

  const isTabletMobile = useMediaQuery({
    query: '(max-width: 672px)'
  })

  const isMobile = useMediaQuery({
    query: '(max-width: 495px)'
  })

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: isMobile ? 1.3 : isTabletMobile ? 1.8 : isSmallDesktop ? 2.5 :  3.2,
    slidesToScroll: 1,
    arrows: isTabletMobile? false : true,
  };
  return (
    <S.SliderContainer {...settings}>
      {children}
    </S.SliderContainer>
  );
}