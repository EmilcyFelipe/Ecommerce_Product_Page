import React,{useEffect, useState} from 'react'
import Navbar from '../../components/Navbar'
import Slider from '../../components/Slider'
import Banner from '../../components/Banner'
import {Container, Content} from './styles'
import Cart from '../../components/Cart'
import Zoom from '../../components/Zoom'
export default function Home(){
    var product = {
        id:'01',
        name:'Autumn Limited Edition',
        price: 250,
        discount: 0.5,
        photo:'',
        description: '',
        quantity: 0
    }

    const [zoom, setZoom] = useState(false);
    const [items, setItems] = useState([product]);
    const [showCart, setShowCart] = useState(false);



    return(
        <Container>
        {zoom && <Zoom setZoom={setZoom} />}
        {showCart && <Cart items={items} setItems={setItems} show={setShowCart}/>}
        <Navbar items={items} show={setShowCart}/>
        <Content>
        <Slider setZoom={setZoom} home={true}/>
        <Banner product={product} items={items} setItems={setItems}/>
        </Content>
        </Container>
    )
}