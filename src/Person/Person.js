import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className='Person' onClick={props.click}>
            <h3>My name is {props.name} and I am {props.age} age old!</h3>
            <input type="text" onChange={props.change} />
        </div>
    )
}

export default person;