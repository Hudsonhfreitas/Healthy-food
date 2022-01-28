import styled from "styled-components";

import IllustrationImg from '../../assets/Illustration.svg'

export const Container = styled.section`
    height: calc(100vh - 10.3rem);
    background: var(--white);
    padding-bottom: 2.5rem;
`

export const Content = styled.div`
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 2rem;
    height: 100%;
    background: url(${IllustrationImg}) right top no-repeat;
    background-size: contain;

    display: flex;
    align-items: center;

    h1 {
        color: var(--text-primary);
        line-height: 7rem;
    }
`

export const LeftArea = styled.div`
    width: 100%;
    max-width: 41.2rem;
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