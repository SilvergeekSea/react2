import React, { Component } from 'react';
import { useTable } from "react-table";
import Network  from "./network";
import datap from "./datap";
import Tablet from "./Table2";


class App extends Component {

 constructor(props) {
        super(props);
        this.state = {shared_var: "init"};
    }

    updateShared(shared_value) {
        this.setState({shared_var: shared_value});
    }

// apple = () => {
//  const networks =  network();
//    return networks;
//}




render() {

//export default function App() {
  return (
    <div className="App">
      <Tablet shared_var={this.state.shared_var} updateShared={this.updateShared}  />
    </div>
  );
}
}
export default App;
