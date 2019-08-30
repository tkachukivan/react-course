import React from 'react';
import './Person.css'

const person = ({ name, age, click, changed, children }) => (
    <div className="Person">
        <p onClick={click}>I'm {name} {age} years old</p>
        <p>{children}</p>
        <input type="text" onChange={changed} value={name}/>
    </div>
);

export default person;