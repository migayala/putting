import React, { useState } from 'react';
const PersonCard = (props) => {
    const [ age, setage ] = useState(props.age);
    
    return(
        <div>
            <h1> {props.lastName}, {props.name} </h1>
            <p> Age: {age} </p>
            <p> Hair Color: {props.hairColor} </p>
            <button onClick={ (event) => setage(age + 1)}>Birthday Button for {props.name} {props.lastName}</button>
        </div>
        
    );
}
export default PersonCard;

