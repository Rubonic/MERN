import React, {useState} from 'react';
import axios from 'axios';


const NewNinjaForm = () => {

    let [name, setName] = useState("");
    let [numProjects, setNumProjects] = useState("");
    let [gradDate, setGradDate] = useState("");
    let [isVeteran, setIsVeteran] = useState(false);


    // SUBMIT HANDLER
    const addNinja = (e)=>{
        e.preventDefault();

        // PACKAGE UP THE STATE VARIABLES INTO AN OBJECT
        let formInfo = {name, numProjects, gradDate, isVeteran}

        axios.post("http://localhost:8000/api/ninjas", formInfo)
            .then(res=>{
                console.log("response after posting form", res)

                // CLEAR OUT THE STATE VARIABLES TO CLEAR OUT THE FORM
                setName("");
                setNumProjects("");
                setGradDate("");
                setIsVeteran(false);

            })
            .catch(err=>console.log("errrrrrr", err))
    }

    return (
        <div>
            <form onSubmit={addNinja}>
                <div className="form-group">
                    <label htmlFor="">Name:</label>
                    <input type="text" onChange={(e)=>setName(e.target.value)} className="form-control" value={name} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Number of Projects:</label>
                    <input type="number" onChange={(e)=>setNumProjects(e.target.value)} className="form-control" value={numProjects} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Graduation Date:</label>
                    <input type="date" onChange={(e)=>setGradDate(e.target.value)} className="form-control" value={gradDate} />
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