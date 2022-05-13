import React, {useState} from "react";
import { useHistory } from "react-router-dom";

const Form = ()=>{

    let [category, setCategory] = useState("");
    let [id, setId] = useState("");

    const history = useHistory(); // HISTORY IS USED TO REDIRECT

    // SUBMIT HANDLER
    const search = (e)=>{
        e.preventDefault();

        // REDIRECT USING HISTORY.PUSH(routeGoesHere)
        history.push(`/${category}/${id}`);
    }

    return (
        <div>
            <form className="d-flex justify-content-around align-items-center" onSubmit={search}>
                <div className="form-group">
                    <label htmlFor="">Search for:</label>
                    <select name="" id="" className="form-select" onChange={(e)=>{setCategory(e.target.value)}} defaultValue={'default'}>
                        <option value="default" disabled>Please select a category</option>
                        <option value="people">People</option>
                        <option value="films">Films</option>
                        <option value="planets">Planets</option>
                        <option value="species">Species</option>
                        <option value="starships">Starships</option>
                        <option value="vehicles">Vehicles</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="">ID:</label>
                    <input type="number" className="form-control" onChange={(e)=>{setId(e.target.value)}} />
                </div>
                <input className="btn btn-primary mt-2" type="submit" value="Search" />
            </form>
        </div>
    );
};

export default Form;