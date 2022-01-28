import styled from "styled-components";

export const Container = styled.section`
    background: #FAFAFC;
    padding: 4.8rem 0 9.8rem 0;
`

export const Content = styled.div`
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 2rem;
    height: 100%;
    text-align: center;

    h2 {
        color: var(--text-primary);
    }

    p {
        font-size: 1.6rem;
        color: var(--text-secondary);
        margin-top: 1.6rem;
        line-height: 2.7rem;
    }
`

export const RecipesList = styled.ul`
    list-style: none;
    margin-top: 3.2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3.6rem;
    flex-wrap: wrap;
`

