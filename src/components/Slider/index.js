import React, { useState } from 'react'

import{
    Container, 
    SliderElements,
    SliderWrapper, 
    SliderItem, 
    LeftButton, 
    RightButton
} from './styles';

import p1 from '../../images/product/image-product-1.jpg';
import p2 from '../../images/product/image-product-2.jpg';
import p3 from '../../images/product/image-product-3.jpg';
import p4 from '../../images/product/image-product-4.jpg';
import next from '../../images/icon-next.svg';
import previous from '../../images/icon-previous.svg'
import PreviousImages from '../PreviousImages';

export default function Slider({setZoom, home}){
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

    function showZoom(){
        if(home){
            setZoom(true);
        }
    }
    
    return(
        <>
            <Container>
                <SliderElements>
                    <SliderWrapper onClick={showZoom}>
                        <SliderItem src={photoList[photoId]} alt="" />
                    </SliderWrapper>
                    <PreviousImages setphotoActive={setPhotoId} active={photoId}/>
                </SliderElements>
                
                <LeftButton style={home===false?{display:'flex', left:'-15px'}:{}} onClick={changePhotoToLeft}><img style={{height:"10px"}} src={previous} alt="previous"/></LeftButton>
                <RightButton style={home===false?{display:'flex', right:'-15px'}:{}} onClick={changePhotoToRight}><img style={{height:"10px"}} src={next} alt="previous"/></RightButton>
            </Container>
        </>
    )
}