import React, {useEffect } from 'react';
import Person from "./Person.js";

const Persons = (props) => {    
    // static getDrivedStateFromProps(props, state){
    //     console.log("[Persons.js] getDrivedStateFromProps")
    //     return state;
    // }

    // render(){
        return props.persons.map((person, index) => {
            return <Person
            click={() => props.clicked(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => props.changed(event, person.id)}
            />
          });
    // }
};

export default Persons;