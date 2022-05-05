import React from 'react';

const PersonCard = (props) => {
    return (
        <div>
            <h1>{props.lastName} {props.firstName}</h1>
            <h2>Age: {props.age}</h2>
            <h3>Hair Color: {props.hairColor}</h3>
            <hr />
        </div>
        
    );
}
export default PersonCard;