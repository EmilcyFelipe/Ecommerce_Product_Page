import React, { useState } from "react";
import {Container, 
    HomeMenu, 
    Menu, 
    Logo, 
    MenuOptions,
    Management, 
    CartWrapper,
    Items,
    Cart, 
    User,
    Line} from './styles';

import menu from '../../images/icon-menu.svg'
import logo from '../../images/logo.svg'
import cart from '../../images/icon-cart.svg'
import avatar from '../../images/image-avatar.png'



export default function Navbar({items,show}){
    function showCart(){
        show(true)
    }
    return(
        <>
            <Container>
                <HomeMenu>
                    <Menu src={menu}/>
                    <Logo src={logo}/>
                    <MenuOptions>
                        <a href="">Collections</a>
                        <a href="">Men</a>
                        <a href="">Women</a>
                        <a href="">About</a>
                        <a href="">Contact</a>
                    </MenuOptions>
                </HomeMenu>
                <Management>
                    <CartWrapper onClick={showCart}>
                        {items[0].quantity>0 && <Items>{items[0].quantity}</Items>}
                        <Cart src={cart}/>
                    </CartWrapper>
                    <User src={avatar}/>
                </Management>
            </Container>
            <Line/>
        </>
    )
}