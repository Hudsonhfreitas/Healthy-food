import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.li`
    width: 100%;
    background: var(--white);
    box-shadow: 0 15px 20px rgba(29, 22, 77, 0.08);
    border-radius: 7px;
    height: 22.5rem;
    display: flex;
    align-items: center;

    transition: transform .3s;

    &:hover {
        transform: translateY(-10px);
    }

    img {
        width: 100%;
        height: 100%;
        max-width: 253px;
    }

    div {
        padding: 4.9rem 3.2rem;
        text-align: left;
        width: 100%;
        height: 100%;
        h3 {
            color: var(--text-primary);
        }
    }
`

export const Button = styled(Link)`
    background: var(--primary);
    color: var(--white);
    height: 4.8rem;
    width: 100%;
    max-width: 13.4rem;
    margin-top: 1.6rem;
    font-size: 1.6rem;
    border-radius: 7px;
    
    display: flex;
    align-items: center;
    justify-content: center;

    transition: filter 0.3s;

    &:hover {
        filter: brightness(0.95)
    }
`