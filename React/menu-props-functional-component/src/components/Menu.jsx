import React, { useState } from "react"; //"useState" in order to use it

const Menu = (props)=>{
    const {name, calories, children} = props;

    //USE STATE WHEN YOU WANT A VARIABLE THAT CAN CHANGE ITS VALUE AND THE CHANGE IN ITS VALUE NEEDS TO BE REFLECTED IN THE SCREEN/WINDOW
    let [price, setPrice] = useState(props.price)

    const increasePrice = ()=>{
        setPrice(price+1)
        //let newPrice = price * 1.1 (increases price by 10%)
        //setPrice(newPrice)
    }

    return(
        <>
            <div>
                <h4>Item Name: {name}</h4>
                <p>Price: ${price}</p>
                <p>Calories: {calories}</p>
                {children}
                <button onClick={increasePrice}>Increase price for {name}</button>
            </div>
            <hr />
        </>
    )
}
export default Menu;