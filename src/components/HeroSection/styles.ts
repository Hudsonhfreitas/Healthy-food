import styled from "styled-components";

import IllustrationImg from '../../assets/Illustration.svg'

export const Container = styled.section`
    background: var(--white);
`

export const Content = styled.div`
    position: relative;
    max-width: 1520px;
    margin: 0 auto;
    padding: 19rem 2rem;
    height: 100%;
    background: url(${IllustrationImg}) right top no-repeat ;
    background-size: contain;

    display: flex;
    align-items: center;

    h1 {
        color: var(--text-primary);
    }

    @media(max-width: 770px) {
        background-position: 170%;
    }

    @media(max-width: 630px) {
        height: calc(80vh - 7.3rem);
        padding: 0;
        justify-content: center
    }

    @media(max-width: 670px) {
        background-position: 290%;
    }

    @media(max-width: 630px) {
        background-position: initial;
        background-size: cover;
    }
`
export const LeftArea = styled.div`
    width: 100%;
    max-width: 41rem;
    position: relative;
    z-index: 2;

    @media (max-width: 820px) {
        max-width: 30rem;
    }

    @media(max-width: 630px) {
        padding: 2rem;
        background: rgba(255,255,255, 0.2);
        max-width: 85%;
        backdrop-filter: blur(5px);
        border-radius: 20px;
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
        width: 5.2rem;
        height: 5.2rem;
        background: var(--primary);
        border: none;
        border-radius: 5px;

        display: flex;
        align-items: center;
        justify-content: center;

        transition: filter .3s;
        svg {
            width: 1.8rem;
            height: 1.8rem;
            color: var(--white);
        }

        &:hover {
            filter: brightness(.95)
        }
    }
`