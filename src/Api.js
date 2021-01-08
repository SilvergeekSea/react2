import React, { Component } from 'react';
import Table from './Table';

class App extends Component {
    state = {
        data: [],
        data2: []
    };
    
    componentDidMount() {
      //  const url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*&limit=1";
	  const url = "http://10.1.1.172:7071/api/HttpExample?name=box4";
	
const proxyurl = "https://cors-anywhere.herokuapp.com/";

        fetch(url)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    data: result.mounts,
                    data2: result.network_cards
                })
            });
   }

    render() {
        const { data2 } = this.state;
console.log( data2);
// const dele = {};
//cont  dele  =  { data['mounts'] };
//  console.log(dele);
      
//data1.push(data);
        const result = Object.keys(data2).map((entry, index) => {
          console.log(entry);
           //return <li key={index}>{entry}</li>
           //return <li  key={index}> {Object.keys(data[entry])} </li>
           // if (entry == 'mounts'){
            //return  <div>  {entry}<table><thead><tr><th>name</th><th>UUID</th><th>Block size</th></tr></thead>{Object.keys(data[entry]).map((entry2, index2) => {
             //return Object.keys(data[entry]).map((entry2, index2) => {
               // return <tr key={index2}><td>{entry2}</td><td> uuid: {data[entry][entry2].uuid}</td><td> blocksize: {data[entry][entry2].block_available}</td></tr>
              console.log(entry);
               return data2[entry];
              })
		 //console.log(entry2);

//}
//else {

//return  <div>  {entry} <ul>{Object.keys(data[entry]).map((entry2, index2) => {
  //                    return <li key={index2}>{entry2}</li>
    //                })
      //                }
        //           </ul>
         //          </div>
   //  }     //             //console.log(entry2);

    //  })

      //})
      
	console.log(result);

let s = result;
    //    return <div className="container">{result}</div>;


return (
            <div className="container">
                <h1>React Tutorial</h1>
                <p>Add a character with a name and a job to the table.</p>
                <Table
                    characterData={s}
                    //removeCharacter={this.removeCharacter}
                />
                <h3>Add New</h3>
            </div>
        );





  // let obj = JSON.stringify(data);
    //return data1;
     //return 'tope';
    }
}

export default App;

