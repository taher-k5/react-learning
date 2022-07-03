import React, { Component } from 'react';
import classes from './App.module.css';
import  Navbar from './Components/Navbar'

class App extends Component {
  state = {
    persons: [
      {id: "dsdsf", name: "taher", age: 23},
      {id: "gfgdfg", name: "munira", age: 13}
    ],
    showPerson: false
  };

  switchNameHandler = () => {
    // console.log('call');
    this.setState({
      persons : [
        {id: "dsdsf", name: "taher tatu", age: 23},
        {id: "gfgdfg", name: "mun chunu ", age: 13}
      ]
    })
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons] ;
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  switchNames = () => {
    let personVal = this.state.showPerson;
    this.setState({
      showPerson: !personVal
    });
  };
  
  deletePerson = (index) => {    
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  } 

  render(){

    let person = null;

    const style = {
      backgroundColor: 'blue',
      color: 'white',
    };

    if(this.state.showPerson){
      person = (
        <div>
          {/* {console.log(this.state.persons)} */}
          {this.state.persons.map((person, index) => {
            return <Navbar 
            click={() => this.deletePerson(index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangeHandler(event, person.id)}
            />
          })}              
        {/* <Navbar 
          name={this.state.person[0].name} 
          age={this.state.person[0].age}/>
        <Navbar 
          name={this.state.person[1].name} 
          age={this.state.person[1].age}
          change={this.nameChangeHandler}> she is my sister </Navbar> */}
      </div>
      );

      style.backgroundColor = 'orange';
    }

    let additionalClasses = [];
    if (this.state.persons.length <= 1) {
      additionalClasses.push( classes.red );
    }

    if (this.state.persons.length === 0) {
      additionalClasses.push( classes.bold );
    }
  return (
    <div className={classes.App}>
      <h1>Hi I Am React APP!!!!!</h1>
      <p className={additionalClasses.join(' ')}>This is some basic text</p>
      <buttton onClick={this.switchNames} className={classes["btn-style"]}>Switch Name</buttton>
      {person}
      {/* {this.state.showPerson === true ?
      <div>              
        <Navbar 
          name={this.state.person[0].name} 
          age={this.state.person[0].age}/>
        <Navbar 
          name={this.state.person[1].name} 
          age={this.state.person[1].age}
          change={this.nameChangeHandler}> she is my sister </Navbar>
      </div> : null
      } */}
    </div>
  );
}
}

// const App = props => {
//   const [personState, setPersonState] = useState({
//     person: [
//       {name: "taher", age: 23},
//       {name: "munira", age: 13}
//     ]
//   });

//   const switchNameHandler = () => {
//     // console.log('call');
//     setPersonState({
//       person : [
//         {name: "taher tatu", age: 23},
//         {name: "mun chunu ", age: 13}
//       ]
//     })
//   };

//   return (
//     <div className="App">
//       <h1>Hi I Am React APP!!!!!</h1>
//       <buttton onClick={switchNameHandler} className="p-2 bg-gray-200 cursor">Switch Name</buttton>
//       <Navbar name={personState.person[0].name} age={personState.person[0].age}/>
//       <Navbar name={personState.person[1].name} age={personState.person[1].age}> she is my sister </Navbar>
//     </div>
//   );
// }

export default App;
