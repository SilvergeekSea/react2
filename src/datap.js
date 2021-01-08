import React, {useEffect, useState} from 'react';
import Tablet from './Table2';

class MyClass extends React.Component{
  render(){
console.log(this.props.fol);
return(
    this.props.fol
)
  }
}

const Datap  = () => {
  const [allowances, setAllowances] = useState([]);

  useEffect(() => {
    fetch("http://10.1.1.172:7071/api/HttpExample?name=box4")
      .then(data => {
        return data.json();
      })
      .then(data => {
        setAllowances(data);
      })
      .catch(err => {
        console.log(123123);
      });
  }, []);

//  const classes = useStyles();
  return <MyClass fol={allowances} />;
}
export default MyClass
