import React from 'react';
import ItemsCart from '../ItemCart';
import {Container, CartWrapper, Title, CheckoutButton} from './styles'


export default function Cart({items,setItems, show}){
    function closeCart(e){
        if(e.target.id==="cartContainer"){
            show(false)
        }
    }
    return(
        <Container id="cartContainer" onClick={closeCart}>
            <CartWrapper>
                <Title>Cart</Title>
                <hr style={{borderColor:'hsl(220, 14%, 75%,0.2)'}}/>
                {items[0].quantity===0 && <div className='emptyCart'>Your cart is empty.</div>}
                   {items[0].quantity>0 && (<><table style={{width:"100%"}}>
                        <tbody>
                            <ItemsCart items={items} setItems={setItems}/>
                        </tbody>
                    </table>
                    <CheckoutButton>Checkout</CheckoutButton></>)
                    }
            </CartWrapper>

        </Container>
    )
}