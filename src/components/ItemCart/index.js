import React from "react";
import cartPhoto from '../../images/product/image-product-1-thumbnail.jpg'
import deleteIcon from '../../images/icon-delete.svg'

import { ItemWrapper, CartImageWrapper, CartImage, CartInfoWrapper, Title, Price, Total, DeleteIcon } from "./styles";

export default function ItemsCart({items,setItems}){
    var product = {
        id:'01',
        name:'Autumn Limited Edition',
        price: 250,
        discount: 0.5,
        photo:'',
        description: '',
        quantity: 0
    }

    function deleteItem(){
        setItems([product])
    }
   
    return(
        <tr>
            <td>
            <ItemWrapper>
                <CartImageWrapper>
                    <CartImage src={cartPhoto} alt="" />
                </CartImageWrapper>
                <CartInfoWrapper>
                <Title>{items[0].name}</Title>
                <Price>${items[0].price*product.discount} x {items[0].quantity}</Price>
                <Total>${items[0].price*product.discount*items[0].quantity}</Total>

                </CartInfoWrapper>
                <DeleteIcon src={deleteIcon} onClick={deleteItem}/>
            </ItemWrapper>
            </td>
        </tr>
           
    )
}