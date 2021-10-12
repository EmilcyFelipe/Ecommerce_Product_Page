import React,{useState} from 'react'
import Navbar from '../../components/Navbar'
import Slider from '../../components/Slider'
import Banner from '../../components/Banner'
export default function Home(){
    const [items, setItems] = useState([]);
    
    var product = {
        id:'',
        name:'Autumn Limited Edition',
        price: 250,
        discount: 0.5,
        photo:'',
        description: ''
    }

    return(
        <>
        <Navbar items={items}/>
        <Slider/>
        <Banner product={product} items={items} setItems={setItems}/>
        </>
    )
}