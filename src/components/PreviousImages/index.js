import React, { useEffect, useState } from "react";
import {Container,ImageWrapper,} from './styles'
import p1 from '../../images/product/image-product-1-thumbnail.jpg'
import p2 from '../../images/product/image-product-2-thumbnail.jpg'
import p3 from '../../images/product/image-product-3-thumbnail.jpg'
import p4 from '../../images/product/image-product-4-thumbnail.jpg'

export default function PreviousImages({setphotoActive, active}){

    const [selectedImg, setSelectedImg] = useState();
    
    useEffect(()=>{
        if(selectedImg){
            selectedImg.children[0].classList.remove('selected')
            selectedImg.classList.remove('selectedBorder')
        }
        let listImg = document.querySelector('.thumbList').children;
        setSelectedImg(listImg[active])
        listImg[active].children[0].classList.add('selected')
        listImg[active].classList.add('selectedBorder')

    },[active])

    // aply class at the element selected and remove one unselected
    function activeThumb(e){
        if(selectedImg){
            selectedImg.children[0].classList.remove('selected')
            selectedImg.classList.remove('selectedBorder')
        }
        let indice = parseInt(e.currentTarget.id.split('-')[1]);
        let listImg = document.querySelector('.thumbList').children;

        setSelectedImg(listImg[indice])
        listImg[indice].children[0].classList.add('selected')
        listImg[indice].classList.add('selectedBorder')
        setphotoActive(indice)
    }


    return(
        <Container className="thumbList">
            <ImageWrapper id="thumb-0" onClick={activeThumb}><img src={p1}/></ImageWrapper> 
            <ImageWrapper id="thumb-1" onClick={activeThumb}><img src={p2}/></ImageWrapper>
            <ImageWrapper id="thumb-2" onClick={activeThumb}><img src={p3}/></ImageWrapper>
            <ImageWrapper id="thumb-3" onClick={activeThumb}><img src={p4}/></ImageWrapper>
        </Container>
    )
}