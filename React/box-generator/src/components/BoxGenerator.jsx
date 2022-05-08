import React, { useState } from 'react'

const BoxGenerator = () => {

    let [formInfo, setFormInfo] = useState({
        color : "",
        size : ""
    });

    let [boxList, setBoxList] = useState([]);


    const createBox = (e) => {
        e.preventDefault();
        
        let newBox = formInfo
        setBoxList([...boxList, newBox])
        setFormInfo({
            color: "",
            size : ""
        });
        console.log('boxList: ', boxList)
    };

    const changeHandler = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name] : e.target.value
        })
    };

    return (
        <div>
            <form onSubmit={ createBox } className='form-group'>
                <div className='d-flex p-1'>
                    <label className='px-2' htmlFor="color">Box Color: </label>
                    <input type="text" name="color" onChange={ changeHandler } value={formInfo.color}/>
                </div>
                <div className="d-flex p-1">
                    <label className="px-2" htmlFor="size">Box Size: </label>
                    <input type="number" name="size" onChange={ changeHandler } value={formInfo.size}/>
                </div>
                <input className="btn btn-success" type="submit" />
            </form>
            <hr />
            <div className="d-flex flex-wrap align-items-end">
                {
                    boxList.map( (boxObj, index) => {
                        console.log('boxObj: ', boxObj);
                        return (
                    <div key={index} className="m-2" style={{backgroundColor: boxObj.color, width: boxObj.size+'px', height: boxObj.size+'px', border: '1px solid black'}}></div>
                        )
                    }
                    )
                }
            </div>
        </div>
    )
    
}
export default BoxGenerator