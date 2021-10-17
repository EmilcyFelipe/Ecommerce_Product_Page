import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background: var(--neutral-black);
    position: fixed;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .zoom-wrapper{
        height: auto;
        position: relative;
        display: flex;
        justify-content: center;
    }

    .icon-close{
        position: absolute;
        right: 0;
        top: -30px;
        cursor: pointer;
    }
    
`;