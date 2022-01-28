import styled from "styled-components";

export const Container = styled.section`
    background: #FAFAFC;
    width: 100%;
`

export const Content = styled.div`
    width: 100%;
    max-width: 1520px;
    padding: 2rem 4rem 4.8rem 4.8rem;
    margin: 0 auto;
    text-align: center;
    h2 {
        color: var(--text-primary)
    }
    P {
        font-size: 1.6rem;
        color: var(--text-secondary);
        margin-top: 1.6rem;
        line-height: 2.7rem;
    }
`