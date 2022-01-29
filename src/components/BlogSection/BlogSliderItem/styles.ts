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
        height: 100%;
        max-height: 24.7rem;
        object-fit: cover;
        border-radius: 7px 7px 0 0;
    }

    @media(max-width: 1150px) {
        width: 27.8rem;
        height: 43rem;
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
    @media(max-width: 1150px) {
        h3 {
            font-size: 2rem;
        }
        span {
            margin-top: 1.8rem;
            display: flex;
            img {
                height: 42px;
                width: 42px;
            }
            p {
                font-size: 1.4rem;
                color: var(--text-secondary);
                margin-left: 8px;
            }
        
    }
`