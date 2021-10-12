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
    const [quantity, setQuantity] = useState(0)
    const [discount, setDiscount] =useState(product.discount);
    

    function handleQuantity(add){
        if(add){
            setQuantity(quantity+1)
        }else if(quantity!==0){
            setQuantity(quantity-1)
        }
    }

    const [ indiceProduct, setIndiceProduct ] = useState(0) 

    function handleCartItems(){
        let itemsVar = Array.from(items);
        let id = indiceProduct;
        for(var i=0; i<quantity; i++){
            itemsVar.push({
                id:id,
                name:product.name,
                price: product.price,
                discount: product.discount,
                photo:product.photo,
                description: product.description
            });  
            setIndiceProduct(indiceProduct+1);
        }
        setItems(itemsVar)
        console.log(items)
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
            {quantity}
            <More src={plus} onClick={()=>handleQuantity(true)}/>
        </Quantity>
        <AddToCart onClick={handleCartItems}> Add to cart</AddToCart>
        </Container>
    )
}