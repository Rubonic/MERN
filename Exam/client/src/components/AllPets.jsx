import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";


const AllPets = (props) => {

    const [allPets, setAllPets] = useState([])

    const[deleteToggle, setDeleteToggle] = useState(false);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/pets")
        .then(res=>{
            // console.log("response: ", res);
            setAllPets(res.data.results);
        })
        .catch(err=>{
            console.log("err", err)
        })
    },[deleteToggle, props.newPetToggle])

    const deletePet = (id)=>{
        console.log("deleting pet with this id ->", id);
        axios.delete(`http://localhost:8000/api/pets/${id}`)
            .then(res=>{
                console.log("res after deleting!", res)
                setDeleteToggle(!deleteToggle);
            })
            .catch(err=> console.log(err))
    }
    


    return (
        <div>
            <h2>These pets are looking for a good home</h2>
            <div className="cards">
            {
                allPets.map((petObj, idx)=>{
                    return (
                        <div key= {petObj._id} className="card mx-auto mb-2" style={{width: '18rem'}}>
                            <div className="card-body">
                            <h5 className="card-title">{petObj.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Type: {petObj.species}</h6>
                            <p><Link to={`/edit/${petObj._id}`} className="btn btn-primary">Edit</Link></p> 
                            <p><Link to={`/pets/${petObj._id}`} className="btn btn-secondary">Details</Link></p>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    );
};



export default AllPets;