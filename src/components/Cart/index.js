import React from 'react';
import ItemsCart from '../ItemCart';
import {Container, CartWrapper, Title, CheckoutButton} from './styles'


export default function Cart({items,setItems, show}){
    function closeCart(){
        show(false)
    }
    return(
        <Container onClick={closeCart}>
            <CartWrapper>
                <Title>Cart</Title>
                <hr style={{}}/>
                    <table style={{width:"100%"}}>
                        <tbody>
                            {
                                items[0].quantity>0 ?(<ItemsCart items={items} setItems={setItems}/>):(<tr><td><div style={{textAlign:'center'}}>Adicione itens no carrinho</div></td></tr>)
                            }
                        </tbody>
                    </table>
                <CheckoutButton>Checkout</CheckoutButton>
            </CartWrapper>

        </Container>
    )
}