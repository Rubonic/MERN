import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from "react-router-dom";


const NewAuthorForm = (props) => {

    let [name, setName] = useState("");

    // state variable to store validation errors inside of
    let [errors, setErrors] = useState({})

    const history = useHistory();


    // SUBMIT HANDLER
    const addAuthor = (e)=>{
        e.preventDefault();

        // PACKAGE UP THE STATE VARIABLES INTO AN OBJECT
        let formInfo = {name}

        axios.post("http://localhost:8000/api/authors", formInfo)
            .then(res=>{
                console.log("response after posting form", res)

                if(res.data.error){
                    // this means there are validation errors we need to save
                    setErrors(res.data.error.errors);
                }
                else{
                    // CLEAR OUT THE STATE VARIABLES TO CLEAR OUT THE FORM
                    setName("");


                    props.setNewAuthorToggle(!props.newAuthorToggle);

                    history.push("/");

                }

            })
            .catch(err=>console.log("errrrrrr", err))
    }

    return (
        <div>
            <h3>Add a new author:</h3>
            <form onSubmit={addAuthor}>
                <div className="form-group">
                    <label htmlFor="">Name:</label>
                    <input type="text" onChange={(e)=>setName(e.target.value)} className="form-control" value={name} />
                    <p className="text-danger">{errors.name?.message}</p>
                </div>
                <input type="submit" value="Submit" className="btn btn-success mt-2" />
                <br />
                <input type="submit" value="Cancel" className="btn btn-dark mt-2" />
            </form>
        </div>
    );
};



export default NewAuthorForm;