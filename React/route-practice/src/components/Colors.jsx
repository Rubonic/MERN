import React from 'react'
import { useParams } from 'react-router'

const Colors = () => {
    const { word } = useParams();
    const { color1 } = useParams();
    const { color2 } = useParams();

    return (
        <h1 style={{backgroundColor: color2, color: color1}}>{word}</h1>
    )
}

export default Colors;