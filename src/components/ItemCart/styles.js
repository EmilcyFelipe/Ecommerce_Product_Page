import styled from "styled-components";


export const ItemWrapper = styled.div`
    padding: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
   
`;
export const CartImageWrapper =  styled.div`
    width: 50px;
    height: 50px;
    border-radius: 5px;
    overflow: hidden;
`;
export const CartImage = styled.img`
width: 100%;
`;

export const CartInfoWrapper = styled.div`
    width: 70%;
`;

export const Title = styled.p`
    color: var(--neutral-dark-grayish-blue);
`;
export const Price = styled.p`
    color: var(--neutral-dark-grayish-blue);
    display: inline-block;
`;
export const Total = styled.p`
    font-weight: bolder;
    display: inline-block;
    margin-left: 5px;
`;
export const DeleteIcon =  styled.img`
    cursor: pointer;
`;