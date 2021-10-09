import React, { useState } from 'react'

import{Container, SliderWrapper, SliderItem, LeftButton, RightButton} from './styles';

import p1 from '../../images/product/image-product-1.jpg';
import p2 from '../../images/product/image-product-2.jpg';
import p3 from '../../images/product/image-product-3.jpg';
import p4 from '../../images/product/image-product-4.jpg';
import next from '../../images/icon-next.svg';
import previous from '../../images/icon-previous.svg'

export default function Slider(){
    const photoList = [p1,p2,p3,p4]
    const[photoId, setPhotoId] = useState(0)

    function changePhotoToRight(){
        if(photoId!==(photoList.length-1)){
            setPhotoId(photoId+1)
        }
    }
    function changePhotoToLeft(){
        if(photoId!==0){
            setPhotoId(photoId-1)
        }
    }
    
    return(
        <>
            <Container>
                <SliderWrapper>
                    <SliderItem src={photoList[photoId]} alt="" />

                </SliderWrapper>
                <LeftButton onClick={changePhotoToLeft}><img style={{height:"10px"}} src={previous} alt="previous"/></LeftButton>
                <RightButton onClick={changePhotoToRight}><img style={{height:"10px"}} src={next} alt="previous"/></RightButton>
            </Container>
        </>
    )
}