import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const AllNinjas = () => {

    const [allNinjas, setAllNinjas] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/api/ninjas")
        .then(res=>{
            // console.log("response: ", res);
            setAllNinjas(res.data.results);
        })
        .catch(err=>{
            console.log("errrrrr", err)
        })
    },[])
    


    return (
        <div>
            <h2>All of the Ninjas</h2>
            <div className="cards">
            {
                allNinjas.map((ninjaObj, idx)=>{
                    return (
                        <div key= {ninjaObj._id} className="card mx-auto mb-2" style={{width: '18rem'}}>
                            <div className="card-body">
                            <h5 className="card-title"> <Link to={`/ninjas/${ninjaObj._id}`}>{ninjaObj.name}</Link></h5>
                            <h6 className="card-subtitle mb-2 text-muted">Number of Projects: {ninjaObj.numProjects}</h6>
                            <p className="card-text">Graduation Date: {ninjaObj.gradDate}</p>
                            <p className='card-text'>Veteran Status: {ninjaObj.isVeteran? "Veteran": "Non-Veteran"}</p>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    );
};



export default AllNinjas;