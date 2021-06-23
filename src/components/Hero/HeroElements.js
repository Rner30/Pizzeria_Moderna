import styled from "styled-components";
import ImgBg from '../../images/pizza-3.jpg'
export const HeroContainer = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.7),rgba(0,0,0,0.1)),url(${ImgBg});
    height: 100vh;
    background-position:center;
    background-size: cover;
`
export const HeroContent = styled.div`
  height: 100vh;
  max-height: 100%;
  width: 100%;
  @media screen and (min-width: 600px){
    padding-left: 10rem;
  }
`
export const HeroItems = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: flex-start;
    height: 100vh;
    max-height: 100%;
    padding: 0 2rem;
    width: 650px;
    color: #FFF;
    text-transform: uppercase;
    line-height: 1;
    font-weight: bold;
    @media screen and (max-width: 650px){
        width: 100%;
    }
`
export const HeroH1 = styled.h1`
    font-size: 5em;
    margin-bottom: 1rem;
    letter-spacing: 3px;
`
export const HeroP = styled.p`
    font-size: 2.5em;
    margin-bottom: 2rem;
`
export const HeroBtn = styled.button`
    font-size: 1.4rem;
    padding: 1rem 4rem;
    border: none;
    background: #e31837;
    color: #FFF;
    transition: 0.2s ease-out;

    &:hover{
        background: #FFC500;
        transition: 0.2s ease-out;
        cursor: pointer;
        color:#000;
        
    }
`