import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from "react-router-dom";


const NewPetForm = (props) => {

    let [name, setName] = useState("");
    let [species, setSpecies] = useState("");
    let [description, setDescription] = useState("");
    let [skillOne, setSkillOne] = useState(false);
    let [skillTwo, setSkillTwo] = useState(false);
    let [skillThree, setSkillThree] = useState(false);

    // state variable to store validation errors inside of
    let [errors, setErrors] = useState({})

    const history = useHistory();


    // SUBMIT HANDLER
    const addPet = (e)=>{
        e.preventDefault();

        // PACKAGE UP THE STATE VARIABLES INTO AN OBJECT
        let formInfo = {name, species, description, skillOne, skillTwo, skillThree}

        axios.post("http://localhost:8000/api/pets", formInfo)
            .then(res=>{
                console.log("response after posting form", res)

                if(res.data.error){
                    // this means there are validation errors we need to save
                    setErrors(res.data.error.errors);
                }
                else{
                    // CLEAR OUT THE STATE VARIABLES TO CLEAR OUT THE FORM
                    setName("");
                    setSpecies("");
                    setDescription("");
                    setSkillOne(false);
                    setSkillTwo(false);
                    setSkillThree(false);

                    props.setNewPetToggle(!props.newPetToggle);

                    history.push("/");

                }

            })
            .catch(err=>console.log("err", err))
    }

    return (
        <div>
            <h3>Know a pet needing a home?</h3>
            <form onSubmit={addPet}>
                <div className="form-group">
                    <label htmlFor="">Name:</label>
                    <input type="text" onChange={(e)=>setName(e.target.value)} className="form-control" value={name} />
                    <p className="text-danger">{errors.name?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Type:</label>
                    <input type="text" onChange={(e)=>setSpecies(e.target.value)} className="form-control" value={species} />
                    <p className="text-danger">{errors.species?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Description:</label>
                    <input type="text" onChange={(e)=>setDescription(e.target.value)} className="form-control" value={description} />
                    <p className="text-danger">{errors.description?.message}</p>
                </div>
                <p>Skills (Optional):</p>
                <div className="form-group">
                    <label htmlFor="">Skill 1:</label>
                    <input type="text" onChange={(e)=>setSkillOne(e.target.value)} className="form-control" value={skillOne} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Skill 2:</label>
                    <input type="text" onChange={(e)=>setSkillTwo(e.target.value)} className="form-control" value={skillTwo} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Skill 3:</label>
                    <input type="text" onChange={(e)=>setSkillThree(e.target.value)} className="form-control" value={skillThree} />
                </div>
                <input type="submit" value="Add Pet" className="btn btn-success mt-2" />
            </form>
        </div>
    );
};



export default NewPetForm;