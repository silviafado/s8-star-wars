import styled from "styled-components";

// Ship profile styling
export const StylesProfile = styled.div`
    color: white;
        margin: 15%;
`

export const StylesDiv = styled.div`
    display: flex;
    @media (max-width: 820px) {
        flex-direction: column;
    }
`

export const StylesSection = styled.section`
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
`

export const StylesImg = styled.img`
    max-width: 100%;
    @media (max-width: 700px) {
    width: 100%;
    }
`