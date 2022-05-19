import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import {useHistory} from "react-router-dom";

const OnePet = () => {

    const { _id } = useParams();

    const history = useHistory(); 

    // state variable to store the one ninja info
    const [petInfo, setPetInfo] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${_id}`)
        .then(res=>{
            console.log(res);
            setPetInfo(res.data.results);
        })
        .catch(err=>console.log(err))

    },[])

// DELETE BUTTON TO REQUEST TO BACKEND TO DELETE ITEM

    // delete pet
    const deletePet = ()=>{
        axios.delete(`http://localhost:8000/api/pets/${_id}`)
            .then(res=>{
                console.log("res-->", res);
                history.push("/")
            })
            .catch(err=>console.log(err))
    }


    return (
        <div>
            <h3>Details about: {petInfo.name}</h3>
            <p>Pet type: {petInfo.species}</p>
            <p>Description: {petInfo.description}</p>
            <p>Skill One: {petInfo.skillOne}</p>
            <p>Skill Two: {petInfo.skillTwo}</p>
            <p>Skill Three: {petInfo.skillThree}</p>
            <button onClick={deletePet} className="btn btn-danger">Adopt {petInfo.name}</button>
            
        </div>
    );
};



export default OnePet;