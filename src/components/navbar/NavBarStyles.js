import styled from "styled-components";

export const StylesNav = styled.nav`
    height: 40px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: black;
    color: white;
    width: 100%;
    margin-bottom: 20px;
    & a {
        text-decoration: none;
        color: white;
    }
    & a:hover {
        color: #d1cfcf;
        cursor: pointer;
    }
`

export const StylesNavUl = styled.ul`
    list-style: none;
    padding: 20px;
    margin-top: 0px;
    position: fixed;
    top: 0;
    z-index: 99;
    background-color: #181717;
    @media (max-width: 400px) {
        left: 0;
        width: 100vw;
    }
`

export const StylesNavLi = styled.li`
    padding: 8px;
    & a {
        color: white;
        text-decoration: none;
        transition: all .2s ease-in-out;
        @media (max-width: 400px) {
            align-items:center;
        }
    }
    & a:hover {
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