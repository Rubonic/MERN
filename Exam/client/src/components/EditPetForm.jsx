import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {useParams} from "react-router";
import {useHistory} from "react-router-dom";

const EditPetForm = () => {

    const {_id} = useParams();

    const [petInfo, setPetInfo] = useState({});

    const history = useHistory();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${_id}`)
            .then(res=>{
                console.log("res-->", res)
                setPetInfo(res.data.results);
            })
            .catch(err=>console.log(err))
    }, [])

    const changeHandler = (e)=>{ 
        setPetInfo({
            ...petInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/${_id}`, petInfo)
            .then(res=>{
                console.log(res)
                history.push("/")
            })
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <h3>Edit {petInfo.name}</h3>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="">Name:</label>
                    <input type="text" name="name" onChange={changeHandler} className="form-control" value={petInfo.name} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Type:</label>
                    <input type="text" name="species" onChange={changeHandler} className="form-control" value={petInfo.species} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Description:</label>
                    <input type="text" name="description" onChange={changeHandler} className="form-control" value={petInfo.description} />
                </div>
                <p>Skills (Optional):</p>
                <div className="form-group">
                    <label htmlFor="">Skill 1:</label>
                    <input type="text" name="skillOne" onChange={changeHandler} className="form-control" value={petInfo.skillOne} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Skill 2:</label>
                    <input type="text" name="skillTwo" onChange={changeHandler} className="form-control" value={petInfo.skillTwo} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Skill 3:</label>
                    <input type="text" name="skillThree" onChange={changeHandler} className="form-control" value={petInfo.skillThree} />
                </div>
                <input type="submit" value="Edit Pet" className="btn btn-success mt-2" />
            </form>
        </div>
    );
};



export default EditPetForm;