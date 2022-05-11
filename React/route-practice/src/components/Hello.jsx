import React from 'react';
import { useParams } from 'react-router'

const Hello = () => {
    const { hello } = useParams();
    let word = isNaN(+hello);
    console.log(hello)
    console.log('word: ', word);

    return (
        isNaN(+hello) ? <h1>The word is: { hello }</h1> : <h1>The number is: { hello }</h1>
    )
}

export default Hello;