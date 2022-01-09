import styled, { createGlobalStyle } from "styled-components";
import back from './assets/background-stars-desktop.jpeg';
import back2 from './assets/background-stars-mobile.jpeg';

// Styling GlobalStyle 
export const GlobalStyle = createGlobalStyle`
    body {
        background-image: url(${back});
        background-size: cover;
        margin: 0px;
        @media (max-width: 700px) {
            background-image: url(${back2});
        }
    }
`

export const StylesHeader = styled.header`
    display: flex;
    justify-content: center;
    padding: 30px;
`

export const StylesLogo = styled.img`
    width: 200px;
`

export const StylesHome = styled.div`
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
`