import styled from "styled-components";
import FreaturePic from '../../images/featured3.jpg'

export const FeatureContainer = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.7),rgba(0,0,0,0.1)),url(${FreaturePic});
    height: 100vh;
    max-height: 500px;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #FFF;
    text-align: center;
    padding: 0 1rem;
    h1{
        font-size: 3em;
    }
    p{
        margin-bottom: 1rem;
        font-size: 2em;
    }
`
export const FeatureButton = styled.button`
    font-size: 1.4rem;
    padding: 0.6rem 3rem;
    border: none;
    background: #FFC500;
    color: #000;
    transition: 0.2s ease-out;
    &:hover{
        color: #FFF;
        background: #e31837;
        transition: 0.2s ease-out;
        cursor: pointer;

    }
`