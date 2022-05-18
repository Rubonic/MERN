import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from "react-router-dom";


const NewNinjaForm = (props) => {

    let [name, setName] = useState("");
    let [numProjects, setNumProjects] = useState("");
    let [gradDate, setGradDate] = useState("");
    let [isVeteran, setIsVeteran] = useState(false);

    // state variable to store validation errors inside of
    let [errors, setErrors] = useState({})

    const history = useHistory();


    // SUBMIT HANDLER
    const addNinja = (e)=>{
        e.preventDefault();

        // PACKAGE UP THE STATE VARIABLES INTO AN OBJECT
        let formInfo = {name, numProjects, gradDate, isVeteran}

        axios.post("http://localhost:8000/api/ninjas", formInfo)
            .then(res=>{
                console.log("response after posting form", res)

                if(res.data.error){
                    // this means there are validation errors we need to save
                    setErrors(res.data.error.errors);
                }
                else{
                    // CLEAR OUT THE STATE VARIABLES TO CLEAR OUT THE FORM
                    setName("");
                    setNumProjects("");
                    setGradDate("");
                    setIsVeteran(false);

                    props.setNewNinjaToggle(!props.newNinjaToggle);

                    history.push("/");

                }

            })
            .catch(err=>console.log("errrrrrr", err))
    }

    return (
        <div>
            <h3>Create Ninja</h3>
            <form onSubmit={addNinja}>
                <div className="form-group">
                    <label htmlFor="">Name:</label>
                    <input type="text" onChange={(e)=>setName(e.target.value)} className="form-control" value={name} />
                    <p className="text-danger">{errors.name?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Number of Projects:</label>
                    <input type="number" onChange={(e)=>setNumProjects(e.target.value)} className="form-control" value={numProjects} />
                    <p className="text-danger">{errors.numProjects?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Graduation Date:</label>
                    <input type="date" onChange={(e)=>setGradDate(e.target.value)} className="form-control" value={gradDate} />
                    <p className="text-danger">{errors.gradDate?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Check if you are a Veteran:</label>
                    <input type="checkbox" onChange={(e)=>setIsVeteran(e.target.checked)} className="form-check-input" value={isVeteran} />
                </div>
                <input type="submit" value="Add Ninja" className="btn btn-success mt-2" />
            </form>
        </div>
    );
};



export default NewNinjaForm;