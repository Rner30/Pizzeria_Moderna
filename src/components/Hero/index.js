import React,{useState} from 'react'
import NavBar from '../Navbar/index'
import SideBar from '../SideBar/index'
import {HeroContainer,HeroContent,HeroItems, HeroH1,HeroP,HeroBtn} from './HeroElements'
export default function Hero() {

    const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <HeroContainer>
            <NavBar
                toggle={toggle}
            />
            <SideBar 
                isOpen={isOpen}
                toggle={toggle}
            />
            <HeroContent>
                <HeroItems>
                    <HeroH1>La mejor pizza</HeroH1>
                    <HeroP>Lista en 60 segundos !</HeroP>
                    <HeroBtn>Ordenar</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>

    )
}
