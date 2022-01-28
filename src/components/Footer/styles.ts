import styled from "styled-components";

export const Container = styled.footer`
    background: var(--white);
    height: 10.3rem;
`

export const Content = styled.div`
    max-width: 1520px;
    margin: 0 auto;
    padding: 0 2rem;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
        font-size: 1.6rem;
        color: var(--text-primary);
    }
`

export const FooterNav = styled.nav`
    a {
        display: inline-block;
        font-size: 1.6rem;
        color: var(--text-secondary);
        & + a {
            margin-left: 3.2rem;
        }
    }
`