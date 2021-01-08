import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import Tablet from './Table2';
//import { Reacttable } from "./reactTable";

class App extends Component {

    state = {
        characters: [{name: 'Tope', job: 'Engineer'},{name:'Tunde'}]
    };

    removeCharacter = index => {
        const { characters } = this.state;
    
        this.setState({
            characters: characters.filter((character, i) => { 
                return i !== index;
            })
        });
    }

    handleSubmit = (character) => {
        this.setState({characters: [...this.state.characters, character]});
    }

    render() {
         let { characters}  = this.state;
        let fol=characters;
	let fol2 = [];
	fol2.push(fol);
       console.log(fol);
       console.log(fol2);
        
        return (
            <div className="container">
                <h1>React Tutorial</h1>
                <p>Add a character with a name and a job to the table.</p>
                <Table
                    characterData={ fol2[0] }
                    removeCharacter={this.removeCharacter}
                />
                <h3>Add New</h3>
                <Form handleSubmit={this.handleSubmit} sola />
                <Tablet sola />
  
            </div>
        );
    }
}

export default App;

