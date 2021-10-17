import React from 'react'
import Slider from '../../components/Slider'
import {Container} from './styles'
import close from '../../images/icon-close.svg'

export default function Zoom({setZoom}){
    function handleZoom(e){
        setZoom(false);
    }
    return(
        <Container>
            <div className="zoom-wrapper">
                <div className="icon-close" onClick={handleZoom}><img src={close} alt="" /></div>
                <Slider home={false}/>
            </div>
        </Container>
    );
}