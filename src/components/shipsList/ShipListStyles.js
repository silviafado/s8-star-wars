import styled from "styled-components";

// Ship list styling
export const StylesList = styled.ul`
    list-style: none;
    padding: 0px;
    margin: 70px;
    @media (max-width: 700px) {
        margin: 50px;
    }
`

export const StylesLi = styled.li`
    padding: 8px;
    margin-bottom: 15px;
    background-color: #181717;
    & a {
        color: white;
        text-decoration: none;
    }
    & a:hover {
        color: #d1cfcf;
        cursor: pointer;
    }
`

export const StylesParag = styled.p`
    margin: 8px;
`

export const StylesButton = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 10px;
    margin: 40px;
`