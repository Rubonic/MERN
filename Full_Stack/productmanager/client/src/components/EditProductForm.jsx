import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {useParams} from "react-router";
import {useHistory} from "react-router-dom";

const EditProductForm = () => {

    const {_id} = useParams();

    const [productInfo, setProductInfo] = useState({});

    const history = useHistory();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${_id}`)
            .then(res=>{
                console.log("res-->", res)
                setProductInfo(res.data.results);
            })
            .catch(err=>console.log(err))
    }, [])

    const changeHandler = (e)=>{ 

        setProductInfo({
            ...productInfo,
            [e.target.name]: e.target.value
        })     
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${_id}`, productInfo)
            .then(res=>{
                console.log(res)
                history.push("/")
            })
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <h3>Edit Product: {_id}</h3>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="">Title:</label>
                    <input type="text" name="title" onChange={changeHandler} className="form-control" value={productInfo.title} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Price:</label>
                    <input type="number" name="price" onChange={changeHandler} className="form-control" value={productInfo.price} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Description:</label>
                    <input type="text" name="description" onChange={changeHandler} className="form-control" value={productInfo.description} />
                </div>
                <input type="submit" value="Update" className="btn btn-success mt-2" />
            </form>
        </div>
    );
};



export default EditProductForm;