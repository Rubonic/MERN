import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import {useHistory} from "react-router-dom";

const OneNinja = () => {

    const { _id } = useParams();

    const history = useHistory(); 

    // state variable to store the one ninja info
    const [ninjaInfo, setNinjaInfo] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/ninjas/${_id}`)
        .then(res=>{
            console.log(res);
            setNinjaInfo(res.data.results);
        })
        .catch(err=>console.log(err))

    },[])

// DELETE BUTTON TO REQUEST TO BACKEND TO DELETE ITEM

    // delete ninja
    const deleteNinja = ()=>{
        axios.delete(`http://localhost:8000/api/ninjas/${_id}`)
            .then(res=>{
                console.log("res-->", res);
                history.push("/")
            })
            .catch(err=>console.log(err))
    }


    return (
        <div>
            <h3>Name: {ninjaInfo.name}</h3>
            <p>Number of Projects: {ninjaInfo.numProjects}</p>
            <p>Graduation Date: {ninjaInfo.gradDate}</p>
            <p>Veteran Status: {ninjaInfo.isVeteran? "Veteran": "Non-Veteran"}</p>
            <button onClick={deleteNinja} className="btn btn-danger">Delete {ninjaInfo.name}</button>
        </div>
    );
};



export default OneNinja;