import React from 'react';
const Seun= (props)=>{

    const {s} = props
    const data = JSON.parse(s);
  
    return(
      <div>
      <ul>
        {
      Object.keys(data).map((entry, index)=>{ 
         <li> {entry}  {data[entry]}</li>
       })
      }     
       </ul>
  
  {console.log(s)}
  </div>
       
    )
    
  }

  export default Seun;