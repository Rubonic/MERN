import React, {useState} from 'react';


const Form = ()=>{

    //create a state variable for each input that will store the information inside each input
    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [confirmPassword, setConfirmPassword] = useState("");


    return(
        <>
            <h3>Enter Your Information</h3>
            <form>
                <div className="form-group">
                    <label htmlFor="">First Name:</label>
                    <input type="text" onChange={(e)=>setFirstName(e.target.value)} name="" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Last Name:</label>
                    <input type="text" onChange={(e)=>setLastName(e.target.value)} name="" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Email:</label>
                    <input type="text" onChange={(e)=>setEmail(e.target.value)} name="" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Password:</label>
                    <input type="password" onChange={(e)=>setPassword(e.target.value)} name="password" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Confirm Password:</label>
                    <input type="password" onChange={(e)=>setConfirmPassword(e.target.value)} name="password" className="form-control" />
                </div>
                
            </form>
            <hr />
            <h3>Your Form Data</h3>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </>
    )
}
export default Form;