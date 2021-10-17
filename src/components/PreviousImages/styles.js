import styled from "styled-components";



export const Container = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    .selectedBorder{
        border: solid 3px var(--primary-orange);
    }
    .selected{
        opacity: 0.3;
    }
    
`;

export const ImageWrapper = styled.div`
    width: 80px;
    height: 80px;
    overflow: hidden;
    border-radius: 10px;
    background-color: #fff;
    cursor: pointer;

    img{
        width: 100%;
    }
`;

