import styled from "styled-components";

// General styling
export const StylesProfile = styled.div`
    color: white;
`

export const StylesDiv = styled.div`
    display: flex;
    @media (max-width: 700px) {
        flex-direction: column;
    }
`

export const StylesSection = styled.section`
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
`

export const StylesImg = styled.img`
    @media (max-width: 700px) {
    width: 100%;
    }
`