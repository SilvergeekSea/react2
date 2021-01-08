import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
 console.log(this.props);
        
        this.initialState = {
            name: '',
            job: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;
        console.dir(event.target);

        this.setState({
            [name] : value
        });
    }

   shoot = (a) => {
    alert(a);
  }

    onFormSubmit = (event) => {
        event.preventDefault();
        //this.shoot('goal');
        if (event.target[0].value == ''){
           alert("Please enter");
        }
        else {
	//event.target[0].value = 'Tope';
	console.dir(event.target);
        this.props.handleSubmit(this.state);
        //this.setState(this.initialState);
         this.setState({
                  name: '',
                 job: ''
              });

	}
    }

    render() {
        const { name, job } = this.state; 

        return (
            <form onSubmit={this.onFormSubmit}>
                <label for="name">Name</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name"
                    value={name} 
                    onChange={this.handleChange} />
                <label for="job">Job</label>
                <input 
                    type="text" 
                    name="job" 
                    id="job"
                    value={job} 
                    onChange={this.handleChange} />
                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;
