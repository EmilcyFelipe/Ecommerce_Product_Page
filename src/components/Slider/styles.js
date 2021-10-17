import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    width: 100%;
    position: relative;
    height: 275px;
    overflow: hidden;
    
    @media(min-width:500px){
        width: 100%;
        max-width: 500px;
        min-width: 350px;
        height: auto;
        align-items: center;
        
    }
`;

export const SliderElements = styled.div`
    
`;

export const SliderWrapper = styled.div`
    overflow: hidden;
    cursor: pointer;
    @media(min-width:500px){
        display: flex;
        /* max-height: 500px; */
        /* max-width: 500px; */
        background-color: black;
        border-radius: 20px;
    }
`;

export const SliderItem = styled.img`
    width: 100%;
    @media(min-width:500px){
        object-fit: cover;
    }
    
`


export const LeftButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: var(--neutral-light-grayish-blue);
    top: 45%;
    left: 15px;
    cursor: pointer;
    @media(min-width:500px){
       display: none;
    }
`;

export const RightButton = styled.div`
     display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: var(--neutral-light-grayish-blue);
    top: 45%;
    right: 15px;
    cursor: pointer;
    @media(min-width:500px){
       display: none;
    }
`;