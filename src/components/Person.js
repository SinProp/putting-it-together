import React, { useState } from 'react';

const Person = (props) => {
    const [ currentAge, setCurrentAge ] = useState(props.initialAge);
    return(
        <div>
            <h1>{ props.lastName } {props.firstName}</h1>
            <p>{ currentAge }</p>
            <p>{ props.hairColor }</p>
            <button onClick={ (event) => setCurrentAge(currentAge + 1)}>Birthday Button for {props.firstName}  { props.lastName }</button>
        </div>
    )
}

export default Person;