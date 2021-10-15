import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    `;

export const Content = styled.div`
    @media(min-width:500px){
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin: auto;
        height: 100vh;
        padding: 0 70px;
    }
`