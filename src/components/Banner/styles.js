import styled from "styled-components";

export const Container = styled.div`
padding: 20px;

`;

export const CompanyTitle = styled.h5`
    color: var(--primary-orange);
    font-size: 12px;
    font-weight: bolder;
    margin-bottom: 15px;
`;

export const DescTitle =  styled.h3`
    margin-bottom: 15px;
    color: var(--neutral-very-dark-blue);
    font-size: 20px;
`;

export const Desc = styled.p`
    color: var(--neutral-dark-grayish-blue);
    font-size: 12px;
    line-height: 20px;
`;

export const Cost = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
`;

export const PriceContainer = styled.div`
    display: flex;
`;

export const Price = styled.h2`
    color: var(--neutral-very-dark-blue);

`;

export const DiscountPer = styled.div`

    background-color:var(--primary-pale-orange);
    color: var(--primary-orange);
    font-weight: bolder;
    font-size: 14px;
    padding: 4px;
    margin-left: 10px;
    display: inline-block;
    border-radius: 5px
`;

export const OriginalPrice = styled.p`
    text-decoration:line-through ;
    font-size: 14px;
    font-weight: bold;
    color: var(--neutral-grayish-blue);
`;

export const Quantity = styled.div`
    margin-top: 20px;
    display: flex;
    color: var(--neutral-very-dark-blue);
    font-weight: bold;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 15px;
    background-color: var(--neutral-light-grayish-blue)
`;

export const Less = styled.img`

`;

export const More = styled.img`
`;

export const AddToCart = styled.div`
    width: 100%;
    background-color: var(--primary-orange);
    border-radius: 7px;
    padding: 15px;
    font-weight: bold;
    font-size: 12px;
    text-align: center;
    color: var(--primary-pale-orange);
`;
