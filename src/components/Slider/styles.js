import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    width: 100%;
    position: relative;
    height: 250px;
    overflow: hidden;
    align-items: center;
`;

export const SliderWrapper = styled.div`
    width: 100%;
`;

export const SliderItem = styled.img`
    width: 100%;
    object-fit: cover; 
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
`;