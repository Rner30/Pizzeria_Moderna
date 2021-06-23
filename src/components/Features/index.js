import React from 'react'
import {FeatureContainer,FeatureButton} from './FeaturesElements'
export default function Feature() {
    return (
        <FeatureContainer>
            <h1>Pizza del dia</h1>
            <p>Salsa Alfredo con polvo de Oro 24 kilates</p>
            <FeatureButton>Ordenar Ahora</FeatureButton> 
        </FeatureContainer>
    )
}
