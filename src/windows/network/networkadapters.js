import React from 'react';
import { useTable } from "react-table";
import '../../temi.css';
const Networkadapters = () => (
 [
     {
      Header: "Network Adapters",
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
        Header: 'ServiceName',
        accessor: 'ServiceName',
        //Cell: props =>{return(<button onClick={() =>{console.log("props", props)}}>Show</button>)}
        //Cell: props =><span className='number'>{Math.round(props.original.Size/1024/1024)}</span>
     },
      {
        Header: 'TimeOfLastReset',
        accessor: 'TimeOfLastReset',
      },
      {
        Header: 'PhysicalAdapter',
        accessor: 'PhysicalAdapter',
      },
        
      {
        Header: 'Status',
        accessor: 'Status',
      },
      {
        Header: 'Speed',
        accessor: 'Speed',
      },
      {
        Header: 'AdapterType',
        accessor: 'AdapterType',
      },
          ]
}
]
)
 

export default Networkadapters;

