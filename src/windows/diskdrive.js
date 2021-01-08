import React from 'react';
import { useTable } from "react-table";
import '../../temi.css';
const Logicaldisks = () => (
 [
     {
      Header: "DiskDrive",
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
        Header: 'Caption',
        accessor: 'Caption',
      },
      {
        Header: 'Size (MB)',
        //accessor: 'Size',
        //Cell: props =>{return(<button onClick={() =>{console.log("props", props)}}>Show</button>)}
        Cell: props =><span className='number'>{Math.round(props.original.Size/1024/1024)}</span>
          },
      {
        Header: 'Model',
        accessor: 'Model',
      },
      {
        Header: 'Interface Type',
        accessor: 'InterfaceType',
      },
        
      {
        Header: 'Status',
        accessor: 'Status',
      },
          ]
}
]
)
 

export default Logicaldisks;

