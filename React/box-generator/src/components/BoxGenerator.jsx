import React, { useState } from 'react';


const BoxGenerator = () => {
    let [name, setName] = useState("");
    let [proPicUrl, setProPicUrl] = useState("");
    let [color,setColor] = useState("");
    let [needsSpecialAttention, setNeedsSpecialAttention] = useState(false)

    let [petList, setPetList] = useState([]);



    //create a submit handler below
    const submitPet = (e)=>{
        e.preventDefault();

        let pet = {name, proPicUrl, color, needsSpecialAttention };
        console.log("pet looks like this-->", pet)


        setPetList([...petList, pet]);


        setName("");
        setProPicUrl("");
        setColor("");
    }




    const toggleAttention = (e, idx)=>{
        console.log("toggling pet at index number-->", idx);

        let [...copyList] = petList;

        copyList[idx].needsSpecialAttention = e.target.checked;  

        setPetList(copyList);
    }

    return(
        <>
            <form onSubmit={submitPet}>
                <div className="form-group">
                    <label htmlFor="">Color:</label>
                    <input onChange={(e)=>{setName(e.target.value)}} type="text" className="form-control" value={name} />
                </div>
                <input type="submit" value="Add" className="btn btn-success mt-2" />
            </form>
            <hr />

            <div className="box-list">
                {
                    petList.map((petObj,idx)=>{
                        return(
                            <div key={idx}  className="box-card" style={{backgroundColor: petObj.color}}>
                                <h1 style= {{textDecoration: petObj.needsSpecialAttention? "red underline overline": "none"}}>{petObj.name}</h1>
                                <img src={petObj.color} alt="" width="250px" height="250px" />
                                
                            </div>
                            
                        ) 
                    })
                }
            </div>

        </>
    )

}


export default BoxGenerator;