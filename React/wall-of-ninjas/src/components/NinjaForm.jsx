import React, {useState} from 'react';


const NinjaForm = ()=>{

    //create a state variable for each input from the form that we want to collect
    let [name, setName] = useState("");
    let [proPicUrl, setProPicUrl] = useState("");
    let [color,setColor] = useState("");
    let [needsSpecialAttention, setNeedsSpecialAttention] = useState(false)

    //create state variable which is an array so that we can store all the pets that get submitted into it
    let [petList, setPetList] = useState([]);



    //create a submit handler below
    const submitPet = (e)=>{
        //the default behavior of a form when it is submitted, is to reload the page. we can prevent this from happening using preventDefault();
        e.preventDefault();

        //create a pet object (python dictionary) also called a hashmap
        let pet = {name, proPicUrl, color, needsSpecialAttention };
        console.log("pet looks like this-->", pet)

        //use the setPetList setter to update the petList array to have the pet object inside of it
        setPetList([...petList, pet]);

        //clear out the state variables so that we can use this to empty the form inputs
        setName("");
        setProPicUrl("");
        setColor("");
    }



    //function to toggle if the pet needs special attention on from false<-->true and vice versa
    const toggleAttention = (e, idx)=>{
        console.log("toggling pet at index number-->", idx);
        //we will modify the petList array at specific index -> idx so that the pet at that index has their "needsSpecialAttention" property changed to true/false
        //1. make a copy of petlist
        let [...copyList] = petList;
        //2. change the pet at the specific index number property for special attention to true/false
        copyList[idx].needsSpecialAttention = e.target.checked; //e.target.check specifies if the checkbox is checked or not with a true/false value
        //3. update our state variable for petList with the modified copy
        setPetList(copyList);
    }

    const deletePet = (e, idx)=>{
        console.log("wazza deleting pet at index-->", idx)
        //idx represents the index number of the pet we want to delete
        let filteredCopy = petList.filter((pet, i)=>{
            //inside the filter function, i represents the index number of each pet
            return i != idx //return back only the pets whose index number does not match the index number of the pet we want to delete
        })

        //3. update our state variable for petList with the modified copy
        setPetList(filteredCopy);

    }


    return(
        <>
            <form onSubmit={submitPet}>
                <div className="form-group">
                    <label htmlFor="">Name:</label>
                    <input onChange={(e)=>{setName(e.target.value)}} type="text" className="form-control" value={name} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Profile pic url</label>
                    <input onChange={(e)=>{setProPicUrl(e.target.value)}} type="text" className="form-control" value={proPicUrl} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Belt color</label>
                    <input onChange={(e)=>{setColor(e.target.value)}} type="text" className="form-control" value={color} />
                </div>
                <input type="submit" value="Add Pet" className="btn btn-success mt-2" />
            </form>
            <hr />

            <div className="pet-list">
                {
                    petList.map((petObj,idx)=>{
                        return(
                            <div key={idx}  className="pet-card" style={{backgroundColor: petObj.color}}>
                                <h1 style= {{textDecoration: petObj.needsSpecialAttention? "red underline overline": "none"}}>{petObj.name}</h1>
                                <p>Special Attention needed? <input type="checkbox" name="" id="" onChange={(e)=>toggleAttention(e,idx)} /></p>
                                <button onClick={(e)=>{deletePet(e,idx)}} className="btn btn-danger">Delete</button>
                                <p>Belt color: {petObj.color}</p>
                                <img src={petObj.proPicUrl} alt="" width="250px" height="250px" />
                                
                            </div>
                            
                        ) 
                    })
                }
            </div>

        </>
    )

}


export default NinjaForm;