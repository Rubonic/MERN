import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';

const OneProduct = () => {

    const { _id } = useParams();

    // state variable to store the one ninja info
    const [productInfo, setProductInfo] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${_id}`)
        .then(res=>{
            console.log(res);
            setProductInfo(res.data.results);
        })
        .catch(err=>console.log(err))

    },[])


    return (
        <div>
            <h3>Title: {productInfo.title}</h3>
            <p>Price: ${productInfo.price}</p>
            <p>Description: {productInfo.description}</p>
        </div>
    );
};



export default OneProduct;