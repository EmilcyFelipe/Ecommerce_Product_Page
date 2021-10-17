import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Content = styled.div`
     @media(max-width:750px){
        display: flex;
        flex-direction: column;
    }
    @media(min-width:500px){
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin: auto;
        padding: 0 70px;
    }
`