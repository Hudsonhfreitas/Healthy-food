import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.main`
    background: var(--white);
`

export const Content = styled.div`
    width: 100%;
    height: 100vh;
    max-width: 1520px;
    margin: 0 auto;
    background: var(--primary);

    display: flex;
    align-items: center;
    justify-content: right;

    form {
        height: 100%;
        width: 60%;
        max-width: 800px;
        padding: 4rem 10rem;
        background: var(--white);
        box-shadow: -10px 5px 25px rgba(0,0,0, 0.3);
    
        display: flex;
        flex-direction: column;
        justify-content: center;
        
        label, input, select {
            display: block;
            font-size: 1.6rem;
            color: var(--text-secondary);
            width: 100%;
        }

        input, select {
            border: none;
            border-radius: 2px;
            padding: .3rem;
            border-bottom: 1px solid var(--text-secondary);
            outline: none;
        }

        label {
            font-weight: 700;
            color: var(--text-primary);
            margin-top: 2rem;
        }
    }

    @media (max-width: 750px) {
        justify-content: center;
        padding: 0 2rem;
        form {
            height: unset;
            border-radius: 20px;
            width: 100%;
            max-width: 500px;
        }
    }
    @media (max-width: 480px) {
        form {
            padding: 4rem 6rem;
        }
    }
`

export const Logo = styled(Link)`
    font-size: 3.2rem;
    font-weight: 700; 
    color: var(--primary);
    margin: 0 auto;

    @media(max-width: 740px) {
        color: var(--primary);
        font-size: 2.4rem;
    }
`

export const Error =  styled.span`
    font-size: 1.2rem;
    margin-top: 5px;
    color: red;
`

export const SubmitButton = styled.button`
    background: var(--primary);
    border: none;
    padding: 1.6rem 2.5rem;
    font-size: 1.6rem;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--white);
    border-radius: 5px;
    transition: all .3s;
    margin-top: 3rem;

    &:hover {
        filter: brightness(.95)
    }

    &:disabled {
        background: var(--text-secondary);
        cursor: not-allowed;
    }
`