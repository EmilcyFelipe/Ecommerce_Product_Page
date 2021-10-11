import React, { useState } from "react";
import {Container, 
    HomeMenu, 
    Menu, 
    Logo, 
    Management, 
    CartWrapper,
    Items,
    Cart, 
    User} from './styles';

import menu from '../../images/icon-menu.svg'
import logo from '../../images/logo.svg'
import cart from '../../images/icon-cart.svg'
import avatar from '../../images/image-avatar.png'



export default function Navbar({items}){
    return(
        <>
            <Container>
                <HomeMenu>
                    <Menu src={menu}/>
                    <Logo src={logo}/>
                </HomeMenu>
                <Management>
                    <CartWrapper>
                        <Items>{items>0?items:''}</Items>
                        <Cart src={cart}/>
                    </CartWrapper>
                    <User src={avatar}/>
                </Management>
            </Container>
        </>
    )
}