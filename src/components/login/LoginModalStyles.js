import styled from "styled-components";

export const StylesModal = styled.div`
    background-color: #181717;
    color: white;
    border: 1px solid black;
`

export const StylesLogSelect = styled.div`
    background-color: #181717;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    & :active {
        background-color: black;
    }
    & .logButton {
        all: unset;
        cursor: pointer;
        color: yellow;
        display: inline-block;
    }
`

export const StylesLogSelect2 = styled.div`
    background-color: #181717;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    margin-top: 20px;
    & :active {
        background-color: black;
    }
    & .logButton2 {
        all: unset;
        cursor: pointer;
        color: yellow;
        display: flex;
        justify-content: center;
    }
`