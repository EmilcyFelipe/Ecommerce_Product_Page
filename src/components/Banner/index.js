import React, { useState } from 'react'
import {
    CompanyTitle, 
    Container, 
    DescTitle, 
    Desc, 
    Cost,
    PriceContainer,
    Price,
    DiscountPer, 
    OriginalPrice, 
    Quantity,
    Less,
    More,
    AddToCart
} from './styles';

import minus from '../../images/icon-minus.svg';
import plus from '../../images/icon-plus.svg';

export default function Banner({product, items, setItems}){
    const [price, setPrice] = useState(product.price);
    const [discount, setDiscount] =useState(product.discount);
    

    function handleQuantity(add){
        if(add){
            setItems(items+1)
        }else if(items!=0){
            setItems(items-1)
        }
    }
    return(
        <Container>
        <CompanyTitle>SNEAKER COMPANY</CompanyTitle>
        <DescTitle>Fall Limited Edition Sneakers</DescTitle>
        <Desc>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</Desc>
        <Cost>
            <PriceContainer>
                <Price>{`$${(price*discount).toFixed(2)}`}</Price>
                <DiscountPer>{discount*100}%</DiscountPer>
            </PriceContainer>
            <OriginalPrice>${price.toFixed(2)}</OriginalPrice>
        </Cost>
        <Quantity>
            <Less src={minus} onClick={()=>handleQuantity(false)}/>
            {items}
            <More src={plus} onClick={()=>handleQuantity(true)}/>
        </Quantity>
        <AddToCart> Add to cart</AddToCart>
        </Container>
    )
}