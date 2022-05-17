import React, {useState} from 'react';
import axios from 'axios';


const NewProductForm = () => {

    let [title, setTitle] = useState("");
    let [price, setPrice] = useState("");
    let [description, setDescription] = useState("");



    // SUBMIT HANDLER
    const addProduct = (e)=>{
        e.preventDefault();

        // PACKAGE UP THE STATE VARIABLES INTO AN OBJECT
        let formInfo = {title, price, description}

        axios.post("http://localhost:8000/api/products", formInfo)
            .then(res=>{
                console.log("response after posting form", res)

                // CLEAR OUT THE STATE VARIABLES TO CLEAR OUT THE FORM
                setTitle("");
                setPrice("");
                setDescription("");
                

            })
            .catch(err=>console.log("errrrrrr", err))
    }

    return (
        <div>
            <form onSubmit={addProduct}>
                <div className="form-group">
                    <label htmlFor="">Title:</label>
                    <input type="text" onChange={(e)=>setTitle(e.target.value)} className="form-control" value={title} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Price:</label>
                    <input type="number" onChange={(e)=>setPrice(e.target.value)} className="form-control" value={price} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Description:</label>
                    <input type="text" onChange={(e)=>setDescription(e.target.value)} className="form-control" value={description} />
                </div>
                <input type="submit" value="Create" className="btn btn-success mt-2" />
            </form>
        </div>
    );
};



export default NewProductForm;