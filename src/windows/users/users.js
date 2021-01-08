import React from 'react';
import { useTable } from "react-table";
import '../../temi.css';
const Windowsusers = () => (
 [
     {
      Header: "Users",
      Footer: "Name",
       headerStyle: {'background-color': 'yellow',
                    'font-size': '20px',
					'text-align': 'vertical'},

   columns: [
    
        {
         Header: "",
         accessor: "",
         expander: true,
         Expander: ({ isExpanded, ...rest }) =>
                     <div>
                       {isExpanded
                         ? <span>&#x2299;</span>
                         : <span>&#x2295;</span>}
                     </div>,
       },
      {
        Header: 'Name',
        accessor: 'Name'
      },
      {
        Header: 'FullName',
        accessor: 'FullName',
        //Cell: props =>{return(<button onClick={() =>{console.log("props", props)}}>Show</button>)}
        //Cell: props =><span className='number'>{Math.round(props.original.Size/1024/1024)}</span>
     },
      {
        Header: 'Caption',
        accessor: 'Caption',
      },
      {
        Header: 'Description',
        accessor: 'Description',
      },
        
      {
        Header: 'Status',
        accessor: 'Status',
      },
      {
        Header: 'LocalAccount',
        accessor: 'LocalAccount',
      },
      {
        Header: 'Disabled',
        accessor: 'Disabled',
      },
          ]
}
]
)
 

export default Windowsusers;

