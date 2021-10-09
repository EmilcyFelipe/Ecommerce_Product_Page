import React from 'react'
import Navbar from '../../components/Navbar'
import Slider from '../../components/Slider'
import Description from '../../components/Banner'
export default function Home(){

    var product = {
        id:'01',
        name:'sneaker',
        
    }
    return(
        <>
        <Navbar/>
        <Slider/>
        <Description/>
        </>
    )
}