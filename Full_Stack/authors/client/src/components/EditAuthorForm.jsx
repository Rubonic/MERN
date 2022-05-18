import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {useParams} from "react-router";
import {useHistory} from "react-router-dom";

const EditAuthorForm = () => {

    const {_id} = useParams();

    const [authorInfo, setAuthorInfo] = useState({});

    const history = useHistory();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${_id}`)
            .then(res=>{
                console.log("res-->", res)
                setAuthorInfo(res.data.results);
            })
            .catch(err=>console.log(err))
    }, [])

    const changeHandler = (e)=>{ 

        setAuthorInfo({
            ...authorInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${_id}`, authorInfo)
            .then(res=>{
                console.log(res)
                history.push("/")
            })
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <h3>Edit this author</h3>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="">Name:</label>
                    <input type="text" name="name" onChange={changeHandler} className="form-control" value={authorInfo.name} />
                </div>
                <input type="submit" value="Submit" className="btn btn-success mt-2" />
                <br />
                <input type="submit" value="Cancel" className="btn btn-dark mt-2" />
            </form>
        </div>
    );
};



export default EditAuthorForm;