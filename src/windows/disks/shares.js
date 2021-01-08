import React from 'react';
import { useTable } from "react-table";
import '../../temi.css';
const Shares = () => (
 [
     {
      Header: "Shares",
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
        Header: 'Path',
        accessor: 'Path',
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
        Header: 'AccessMask',
        accessor: 'AccessMask',
      },
        
      {
        Header: 'Status',
        accessor: 'Status',
      },
          ]
}
]
)
 

export default Shares;

