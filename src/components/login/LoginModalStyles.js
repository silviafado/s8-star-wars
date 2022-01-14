import styled from "styled-components";

// Exercise 6: Modal LOG IN and SIGN UP styling
export const StylesOverlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0.6;
    left: 0;
    background-color: black;
`

export const StylesModalBox = styled.div`
    font-family: "Arial";
    position: fixed;
    width: 400px;
    max-width: calc(100% - 40px);
    max-height: calc(100% - 30px);
    background-color: #181717;
    border: 1px solid black;
    z-index: 2;
    box-shadow: 0 0px 6px #15030A;
    border-radius: 4px;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    top: 50%;
    animation: enlarge-box 0.9s forwards;
    color: white;
`

export const StylesBoxAnimmation = styled.div`
    animation: fade-in 1.2s forwards;
`

export const StylesModal = styled.div`
    background-color: #181717;
    color: white;
    border: 1px solid black;
    padding: 25px 30px 50px 30px;
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
`

export const StylesCloseDiv = styled.div`
    position: absolute;
    right: 0;
    z-index: 1;
    color: white;
    border-radius: 0 2px 0 4px;
    width: 24px;
    text-align: center;
    height: 24px;
    cursor: pointer;
    transition: background-color 0.5s;
    margin: 5px;
`

export const StlylesLogButton = styled.button`
    all: unset;
    cursor: pointer;
    color: yellow;
    display: inline-block;
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

export const StylesContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
`

export const StylesModalForm = styled.div`
    & button {
        width: 100%;
        background-color: grey;
        color: white;
    }
`

export const StylesFormGroup = styled.div`
    margin-bottom: 15px;
    & input:focus {
        background-color: grey !important;
        border: 2px solid yellow !important;
        color: white !important;
    }
`

export const StylesFormInput = styled.input`
    width: 100%;
    padding: 6px 12px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    transition: border-color ease-in-out 0.15s,
`