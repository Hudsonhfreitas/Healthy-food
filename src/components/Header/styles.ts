import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.header`
    width: 100%;
    height: 10.3rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;

    @media(max-width: 630px) {
        background: var(--white);
        box-shadow: 0 15px 15px rgba(0, 0, 0, 0.2);
        height: 7.3rem;
    }
`

export const Content = styled.div`
    max-width: 1520px;
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

    @media(max-width: 740px) {
        color: var(--primary);
        font-size: 2.4rem;
    }
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
                cursor: pointer;
                position: relative;

                &::after {
                    content: '';
                    width: 100%;
                    height: 2px;
                    background: var(--white);
                    position: absolute;
                    left: 0;
                    bottom: -3px;
                    transition: all .3s;
                    opacity: 0;
                }

                &:hover {
                    &:after {
                        opacity: 1;
                    }
                }
            }
        }
    }

    @media(max-width: 630px) {
        display: none;
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

export const Toggle = styled.button`
    padding: 1rem;
    background: none;
    border: none;
    font-size: 3rem;
    color: var(--primary);

    display: flex;
    align-items: center;
    justify-content: center;
`

