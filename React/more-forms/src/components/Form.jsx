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
                    <p className="text-danger">{firstName.length < 2 ? "First Name must be at least 2 characters!" : null}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Last Name:</label>
                    <input type="text" onChange={(e)=>setLastName(e.target.value)} name="" className="form-control" />
                    <p className="text-danger">{lastName.length < 2 ? "Last Name must be at least 2 characters!" : null}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Email:</label>
                    <input type="text" onChange={(e)=>setEmail(e.target.value)} name="" className="form-control" />
                    <p className="text-danger">{email.length < 5 ? "Email must be at least 5 characters!" : null}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Password:</label>
                    <input type="password" onChange={(e)=>setPassword(e.target.value)} name="password" className="form-control" />
                    <p className="text-danger">{password.length < 8 ? "Password must be at least 8 characters!" : null}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Confirm Password:</label>
                    <input type="password" onChange={(e)=>setConfirmPassword(e.target.value)} name="password" className="form-control" />
                    <p className="text-danger">{password !== confirmPassword ? "Passwords must match!" : null}</p>
                </div>
                
            </form>
        </>
    )
}
export default Form;