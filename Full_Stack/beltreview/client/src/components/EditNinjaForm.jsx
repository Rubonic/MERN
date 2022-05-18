import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {useParams} from "react-router";
import {useHistory} from "react-router-dom";

const EditNinjaForm = () => {

    const {_id} = useParams();

    const [ninjaInfo, setNinjaInfo] = useState({});

    const history = useHistory();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/ninjas/${_id}`)
            .then(res=>{
                console.log("res-->", res)
                setNinjaInfo(res.data.results);
            })
            .catch(err=>console.log(err))
    }, [])

    const changeHandler = (e)=>{ 

        if(e.target.name === "isVeteran"){ 
            setNinjaInfo({
                ...ninjaInfo,
                [e.target.name]: e.target.checked // FOR THE CHECKBOX INPUT TYPE
            })
        }else{
            setNinjaInfo({
                ...ninjaInfo,
                [e.target.name]: e.target.value
            })
        }
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/ninjas/${_id}`, ninjaInfo)
            .then(res=>{
                console.log(res)
                history.push("/")
            })
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <h3>Edit Ninja: {_id}</h3>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="">Name:</label>
                    <input type="text" name="name" onChange={changeHandler} className="form-control" value={ninjaInfo.name} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Number of Projects:</label>
                    <input type="number" name="numProjects" onChange={changeHandler} className="form-control" value={ninjaInfo.numProjects} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Graduation Date:</label>
                    <input type="date" name="gradDate" onChange={changeHandler} className="form-control" value={ninjaInfo.gradDate} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Check if you are a Veteran:</label>
                    <input type="checkbox" name="isVeteran" onChange={changeHandler} className="form-check-input" checked={ninjaInfo.isVeteran} />
                </div>
                <input type="submit" value="Update" className="btn btn-success mt-2" />
            </form>
        </div>
    );
};



export default EditNinjaForm;