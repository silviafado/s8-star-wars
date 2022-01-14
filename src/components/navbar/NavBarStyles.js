import styled from "styled-components";

// Exercise 5: Navbar styling
export const StylesNav = styled.ul`
    list-style: none;
    height: 60px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: black;
    color: white;
    width: 100%;
    margin: 0px 0px 20px 0px;
    padding: 10px 0px;
    & a {
        text-decoration: none;
        color: white;
    }
    & a:hover {
        color: #d1cfcf;
        cursor: pointer;
    }
    @media (max-width: 500px) {
        flex-direction: column;
    }
`

export const StylesNavEl = styled.li`
    padding: 8px;
    padding: 20px;
    border: 1px solid #333;
    flex-grow: 2;
    display: flex;
    justify-content: center;
    & a {
        color: white;
        text-decoration: none;
        @media (max-width: 500px) {
            display: flex;
            justify-content: center;
        }
    }
    & a:hover {
        color: #d1cfcf;
        cursor: pointer;
    }
    & .sc-iCfMLu:hover {
        color: #d1cfcf;
    }
    & .button {
        all: unset;
    }
    & .button:hover {
        color: #d1cfcf;
        cursor: pointer;
    }
`

export const StylesNavUl = styled.ul`
    list-style: none;
    padding: 10px;
    margin-top: 0px;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 99;
    background-color: #181717;
    width: 450px;
    @media (max-width: 600px) {
        left: 0;
        width: 100vw;
    }
`

export const StylesNavLi = styled.li`
    padding: 8px;
    padding: 20px;
    border: 1px solid #333;
    & a {
        color: white;
        text-decoration: none;
        transition: all .2s ease-in-out;
        @media (max-width: 600px) {
            display: flex;
            justify-content: center;
        }
    }
    & a:hover, & button:hover {
        color: #d1cfcf;
        cursor: pointer;
        font-size: 18px;
    }
`

export const StylesNavDrop = styled.button`
    all: unset;
    &:hover {
        cursor: pointer;
    }
`