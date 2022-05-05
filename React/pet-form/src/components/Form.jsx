import React, {useState} from 'react';


const Form = ()=>{

    //create a state variable for each input that will store the information inside each input
    let [name, setName] = useState("");
    let [age, setAge] = useState("");
    let [type, setType] = useState("");
    let [date, setDate] = useState("");
    let [imgUrl, setImgUrl] = useState("");
    let [specialReq, setSpecialReq] = useState("");


    return(
        <>
            <h3>Schedule Your Appointment</h3>
            <form>
                <div className="form-group">
                    <label htmlFor="">Name:</label>
                    <input type="text" onChange={(e)=>setName(e.target.value)} name="" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Age:</label>
                    <input type="number" onChange={(e)=>setAge(e.target.value)} name="" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Type:</label>
                    <select className="form-select" onChange={(e)=>setType(e.target.value)} >
                        <option value=""></option>
                        <option value="Dog">Dog</option>
                        <option value="Cat">Cat</option>
                        <option value="Bird">Bird</option>
                        <option value="Rabbit">Rabbit</option>
                        <option value="Horse">Horse</option>
                        <option value="Ferrets">Ferrets</option>
                        <option value="Fish">Fish</option>
                        <option value="Guinea Pig">Guinea Pig</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="">Appointment Date:</label>
                    <input type="date" onChange={(e)=>setDate(e.target.value)} name="" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Pet Image URL:</label>
                    <input type="text" onChange={(e)=>setImgUrl(e.target.value)} name="" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Special Requests:</label>
                    <textarea className="form-control" onChange={(e)=>setSpecialReq(e.target.value)} name="" id="" ></textarea>
                </div>
                <input className="btn btn-success mt-2" type="submit" value="Submit" />
            </form>
            <hr />
            <h3>Pet Information</h3>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Type: {type}</p>
            <p>Appointment Date: {date}</p>
            <p>Pet Image: <img src={imgUrl} alt="" width="250px"/></p>
            <p>Special Requests: {specialReq}</p>
        </>
    )
}
export default Form;