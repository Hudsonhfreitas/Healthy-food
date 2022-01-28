import styled from "styled-components"

export const Container = styled.div`
    width: 34.8rem;
    height: 45rem;
    background: var(--white);
    border-radius: 7px;
    box-shadow: 0 15px 20px rgba(29, 22, 77, 0.08);
    margin: 4rem 0;;
    img {
        width: 100%;
        height: 24.7rem;
        object-fit: cover;
    }
    
`

export const Text = styled.div`
    padding: 3.2rem 2.6rem;
    h3 {
        text-align: left;
        color: var(--text-primary);
    }
    span {
        margin-top: 2.4rem;
        display: flex;
        img {
            height: 52px;
            width: 52px;
        }
        p {
            font-size: 1.6rem;
            color: var(--text-secondary);
            margin-left: 8px;
        }
    }
`