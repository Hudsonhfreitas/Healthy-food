import styled from "styled-components";

import joinImage from '../../assets/joinImage.svg'

export const Container = styled.section`
    height: 100vh;
    max-height: 672px;

    @media (max-width: 670px) {
        max-height: 505px;
    }
`

export const Content = styled.div`
    max-width: 1520px;
    margin: 0 auto;
    padding: 0 2rem;
    height: 100%;
    background: url(${joinImage}) right top no-repeat;

    display: flex;
    align-items: center;
    justify-content: left;

    @media (max-width: 1070px) {
        background-position: 125%;
    }

    @media (max-width: 670px) {
        background-position: initial;
        justify-content: center;
        
    }
`

export const LeftArea = styled.div`
    width: 100%;
    max-width: 45.4rem;
    margin-left: 4.8rem;
    h2 {
        color: var(--text-primary)
    }
    @media (max-width: 1070px) {
        max-width: 38.4rem;
    }

    @media (max-width: 890px) {
        padding: 2rem;
        background: rgba(255,255,255, 0.5);
        border-radius: 20px;
        backdrop-filter: blur(10px);
        margin-left: 0;
    }
`

export const Search = styled.div`
    margin-top: 3.2rem;
    display: flex;
    input {
        border: 1px solid #2D3561;
        border-radius: 5px;
        font-size: 1.6rem;
        padding: 1.6rem;
        flex: 1;
        margin-right: 1.6rem;
        display: block;
        &::placeholder {
            color: var(--text-secondary);
        }
    }
    button {
        width: 9.3rem;
        height: 5.2rem;
        background: var(--primary);
        border: none;
        border-radius: 5px;
        color: var(--white);
        box-shadow: 0 5px 10px rgba(186, 220, 88, .5);

        display: flex;
        align-items: center;
        justify-content: center;

        transition: filter .3s;

        &:hover {
            filter: brightness(.95)
        }
    }
`