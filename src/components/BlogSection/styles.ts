import styled from "styled-components";

export const Container = styled.section`
    background: #FAFAFC;
`

export const Content = styled.div`
    max-width: 1320px;
    padding: 2rem 0 4.8rem 4.8rem;
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
    > div {
        margin-top: 3.2rem;
    }
`