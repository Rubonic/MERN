import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from "react-router-dom";


const NewProductForm = (props) => {

    let [title, setTitle] = useState("");
    let [price, setPrice] = useState("");
    let [description, setDescription] = useState("");
    

    // state variable to store validation errors inside of
    let [errors, setErrors] = useState({})

    const history = useHistory();


    // SUBMIT HANDLER
    const addProduct = (e)=>{
        e.preventDefault();

        // PACKAGE UP THE STATE VARIABLES INTO AN OBJECT
        let formInfo = {title, price, description}

        axios.post("http://localhost:8000/api/products", formInfo)
            .then(res=>{
                console.log("response after posting form", res)

                if(res.data.error){
                    // this means there are validation errors we need to save
                    setErrors(res.data.error.errors);
                }
                else{
                    // CLEAR OUT THE STATE VARIABLES TO CLEAR OUT THE FORM
                    setTitle("");
                    setPrice("");
                    setDescription("");

                    props.setNewProductToggle(!props.newProductToggle);

                    history.push("/");

                }

            })
            .catch(err=>console.log("errrrrrr", err))
    }

    return (
        <div>
            <form onSubmit={addProduct}>
                <div className="form-group">
                    <label htmlFor="">Title:</label>
                    <input type="text" onChange={(e)=>setTitle(e.target.value)} className="form-control" value={title} />
                    <p className="text-danger">{errors.title?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Price:</label>
                    <input type="number" onChange={(e)=>setPrice(e.target.value)} className="form-control" value={price} />
                    <p className="text-danger">{errors.price?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Description:</label>
                    <input type="text" onChange={(e)=>setDescription(e.target.value)} className="form-control" value={description} />
                    <p className="text-danger">{errors.description?.message}</p>
                </div>
                <input type="submit" value="Create" className="btn btn-success mt-2" />
            </form>
        </div>
    );
};



export default NewProductForm;