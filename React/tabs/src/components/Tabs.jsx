import React, { useState } from 'react'

const Tab = (props) => {

    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <>
            <div className='d-flex align-items-center justify-content-center gap-2'>
                {props.items.map((tabObj, idx) => {
                    let labelStyling = {
                        backgroundColor: 'white',
                        color: 'black'
                    };
                    if (selectedTab == idx) {
                        labelStyling.backgroundColor = 'black';
                        labelStyling.color = "white";
                    } 
                    return (
                        <div key="idx" onClick={(e) => setSelectedTab(idx)} style={labelStyling} className='btn border px-4 py-2 rounded'>{tabObj.label}</div>
                    )
                })
                }
            </div>
            <div className='d-flex justify-self-start border border-dark p-2 my-3 rounded' style={{width: "max-width", minHeight: "200px"}}>
                <p>{props.items[selectedTab].content}</p>
            </div>
        </>

    )
}

export default Tab