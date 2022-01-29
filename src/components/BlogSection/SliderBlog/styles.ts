import Slider from "react-slick";
import styled from "styled-components";

export const SliderContainer = styled(Slider)`
    &.slick-slider {
        position: relative;
        &::after {
            content: '';
            width: 10%;
            height: 110%;
            background: linear-gradient(to right , rgba(250, 250, 252, 0) ,rgba(250,250,252,1) 70%);
            position: absolute;
            z-index: 98;
            top: 0;
            right: -0.5rem;
        }
    }
    .slick-arrow {
        &::before {
            position: relative;
            font-size: 2rem;
            color: var(--primary);
            z-index: 98;
        }

    }
`
