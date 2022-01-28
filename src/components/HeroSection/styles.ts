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

    display: flex;
    align-items: center;

    h1 {
        color: var(--text-primary);
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
`

export const Image = styled.div`
    height: 95%;
    width: 100%;
    background: url(${IllustrationImg}) right top no-repeat ;
    background-size: contain;
    position: absolute;
    top: 0;
    right: 0;

    @media (max-width: 820px) {
        width: 100%;
        height: 100%;
        filter: blur(5px);
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