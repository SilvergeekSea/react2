import React from 'react';
import { useTable } from "react-table";
import '../../temi.css';
const Diskquota = () => (
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
        Header: 'Status',
        accessor: 'Status'
      },
      {
        Header: 'QuotaVolume',
        accessor: 'QuotaVolume',
      },
      {
        Header: 'WarningLimit',
        accessor: 'WarningLimit',
        //Cell: props =>{return(<button onClick={() =>{console.log("props", props)}}>Show</button>)}
        //Cell: props =><span className='number'>{Math.round(props.original.Size/1024/1024)}</span>
     },
      {
        Header: 'Limit',
        accessor: 'Limit',
      },
      {
        Header: 'DiskSpaceUsed',
        accessor: 'DiskSpaceUsed',
      },
        
      {
        Header: 'User',
        accessor: 'User',
      },
          ]
}
]
)
 

export default Diskquota;

