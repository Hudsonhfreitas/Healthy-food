import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.header`
    width: 100%;
    height: 10.3rem;
    position: absolute;
    top: 0;
    left: 0;
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 2rem;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Logo = styled(Link)`
    font-size: 3.2rem;
    font-weight: 700; 
    color: var(--primary);
`

export const NavBar = styled.nav`
    display: flex;
    align-items: center;
    ul {
        list-style: none;
        display: flex;
        margin-right: 3.2rem;
        li {
            & + li {
                    margin-left: 3.2rem;
                }
            a {
                font-size: 1.6rem;
                text-transform: uppercase;
                font-weight: 700;
                color: var(--white);
            }
        }
    }
`

export const RegisterButton = styled.button`
    background: var(--white);
    border: none;
    padding: 1.6rem 2.5rem;
    font-size: 1.6rem;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--primary);
    border-radius: 5px;
    transition: all .3s;

    &:hover {
        background: var(--primary);
        color: var(--white);
    }
`