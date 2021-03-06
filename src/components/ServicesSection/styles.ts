import { Link } from "react-router-dom";
import styled from "styled-components";

import Cooking from '../../assets/bloco_services.svg'

export const Container = styled.section`
    background: var(---white);
`

export const Content = styled.div`
    max-width: 1520px;
    margin: 0 auto;
    background: url(${Cooking}) left no-repeat;
    padding: 13.6rem 2rem;
    
    display: flex;
    justify-content: right;

    @media (max-width: 870px) {
        background-size: contain;
    }

    @media (max-width: 780px) {
        background-position: -50%;
    }

    @media (max-width: 665px) {
        height: 100%;
        padding: 0 0 0 2rem;
        background-size: cover;
        background-position: left;
    }
    

`

export const TextContainer = styled.div`
    width: 100%;
    max-width: 42rem;
    margin-right: 13rem;
    h2 {
        color: var(--text-primary)
    }

    p {
        font-size: 1.6rem;
        color: var(--text-secondary);
        margin-top: 3.2rem;
        line-height: 2.7rem;
    }

    @media (max-width: 1030px) {
        margin-right: 0;
    }

    @media (max-width: 665px) {
        background: var(--white);
        padding: 4.8rem 2rem;
        max-width: 35rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

`

export const Button = styled(Link)`
    background: var(--primary);
    color: var(--white);
    height: 4.8rem;
    width: 100%;
    max-width: 13.4rem;
    margin-top: 4.8rem;
    font-size: 1.6rem;
    border-radius: 7px;
    cursor: pointer;
    box-shadow: 0 5px 10px rgba(186, 220, 88, .5);
    
    display: flex;
    align-items: center;
    justify-content: center;

    transition: filter 0.3s;

    &:hover {
        filter: brightness(0.95)
    }

`