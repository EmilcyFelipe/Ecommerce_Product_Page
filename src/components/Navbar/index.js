import React from "react";
import {Container, 
    HomeMenu, 
    Menu, 
    Logo, 
    Management, 
    Cart, 
    User} from './styles';

import menu from '../../images/icon-menu.svg'
import logo from '../../images/logo.svg'
import cart from '../../images/icon-cart.svg'
import avatar from '../../images/image-avatar.png'



export default function Navbar(){
    return(
        <>
            <Container>
                <HomeMenu>
                    <Menu src={menu}/>
                    <Logo src={logo}/>
                </HomeMenu>
                <Management>
                    <Cart src={cart}/>
                    <User src={avatar}/>
                </Management>
            </Container>
        </>
    )
}