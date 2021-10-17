import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  background-color: var(--neutral-light-grayish-blue);
  padding: 20px;
  justify-content: space-between;
  @media(min-width:500px){
    background:none;
  }
  
`;

export const HomeMenu = styled.div`
  @media(min-width:500px){
    display: flex;
  }

`;

export const Menu = styled.img`
   @media(min-width:700px){
    display: none;
  }
`;

export const Logo = styled.img`
  cursor: pointer;
  margin-left: 20px;
  width: 120px;
`;

export const MenuOptions = styled.div`
  display: none;
  width: 70%;
  min-width: 350px;
  max-width: 500px;
  margin-left: 20px;

  @media(min-width:700px){
    display: flex;
    justify-content: space-evenly;
  }
  a{
    font-weight: bold;
    color: var(--neutral-grayish-blue)

  }
`;

export const Management = styled.div`
  display: flex;
  align-items: center;
`;

export const CartWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;
export const Items = styled.div`
  position: absolute;
  top: -5px;
  left: 8px;
  width: 16px;
  font-size: 8px;
  font-weight: bold;
  border-radius: 5px;
  padding: 1px;
  color: var(--primary-pale-orange);
  background-color: var(--primary-orange);
  text-align: center;
`;

export const Cart = styled.img`
  margin-right: 20px;
  width: 18px;
`;

export const User = styled.img`
  width: 25px;
`;

export const Line = styled.hr`
  display: none;
  @media(min-width:500px){
    display: block;
    border:.2px solid rgba(0,0,0,.1);
    width: 100%;
    max-width: 1200px;
    margin: 20px 0;
  }
  
  
`;