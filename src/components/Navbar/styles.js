import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  background-color: var(--neutral-light-grayish-blue);
  padding: 20px;
  justify-content: space-between;
`;

export const HomeMenu = styled.div``;

export const Menu = styled.img``;

export const Logo = styled.img`
  margin-left: 20px;
  width: 120px;
`;

export const Management = styled.div`
  display: flex;
  align-items: center;
`;

export const CartWrapper = styled.div`
  position: relative;
`;
export const Items = styled.div`
  position: absolute;
  top: -5px;
  left: 13px;
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
`;

export const User = styled.img`
  width: 25px;
`;
