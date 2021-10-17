import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    display: flex;
    justify-content: center;
`;
export const CartWrapper = styled.div`
    width: 360px;
    height: 220px;
    margin-top: 70px;
    border-radius: 10px;
    background-color: azure;
    box-shadow: 2px 2px 3rem rgba(0,0,0,.3);

    .emptyCart{
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        color: var(--neutral-dark-grayish-blue);
        flex
    }
`;
export const Title = styled.h3`
    font-size: 14px;
    padding: 20px;
`;

export const CheckoutButton = styled.div`
    width: 90%;
    margin: auto;
    font-weight: bold;
    font-size: 14px;
    background-color: var(--primary-orange);
    border-radius: 10px;
    color: var(--neutral-white);
    padding: 15px 0;
    text-align: center;
    cursor: pointer;
`;
