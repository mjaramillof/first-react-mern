//made with arrow function

import React from "react";
import { useState } from "react";

const PersonCard2 = (props) =>{
    const [counter, setCounter] = useState(props.age);
    return(
        <>
            <h1>{props.lastName}, {props.firstName}</h1>
            <h2>Age: {counter}</h2>
            <h2>Hair Color: {props.hairColor}</h2>
            <button onClick={() => setCounter((prevCount) => prevCount + 1)}>Birthday Button for {props.firstName} {props.lastName}</button>
        </>
    )
}
export default PersonCard2;