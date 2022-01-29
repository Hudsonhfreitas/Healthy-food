import styled from "styled-components";

export const Container = styled.div`
    background: var(--white);
    width: 60vw;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 99;
    box-shadow: -10px 5px 25px rgba(0,0,0, 0.3);

    display: flex;
    align-items: center;
    justify-content: center;
`

export const NavBar = styled.nav`
    display: flex;
    align-items: center;
    flex-direction: column;
    ul {
        list-style: none;
        display: flex;
        align-items: center;
        flex-direction: column;
        li {

            & + li {
                margin-top: 10rem;
            }
                
            a {
                font-size: 2.6rem;
                text-transform: uppercase;
                font-weight: 700;
                color: var(--primary);
                cursor: pointer;
                position: relative;

                &::after {
                    content: '';
                    width: 100%;
                    height: 2px;
                    background: var(--primary);
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

`

export const RegisterButton = styled.button`
    background: var(--primary);
    border: none;
    padding: 1.6rem 2.5rem;
    font-size: 2.4rem;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--white);
    border-radius: 5px;
    transition: all .3s;
    margin-top: 10rem;

    &:hover {
        filter: brightness(0.9)
    }
`

export const CloseButton = styled.button`
    position: absolute;
    top: 1rem;
    right: 1.5rem;
    padding: 1rem;
    background: none;
    border: none;
    font-size: 4rem;
    color: var(--primary);
    z-index: 100;

    display: flex;
    align-items: center;
    justify-content: center;
`