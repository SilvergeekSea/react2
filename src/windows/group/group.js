import React from 'react';
import { useTable } from "react-table";
import '../../temi.css';
const Windowsgroups = () => (
 [
     {
      Header: "Groups",
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
        Header: 'Description',
        accessor: 'Description',
      },
        
      {
        Header: 'Status',
        accessor: 'Status',
      },
      {
        Header: 'Domain',
        accessor: 'Domain',
      },
      {
        Header: 'Disabled',
        accessor: 'Disabled',
      },
      {
        Header: 'LocalAccount',
        accessor: 'LocalAccount',
      },
      {
        Header: 'SID',
        accessor: 'SID',
      },
          ]
}
]
)
 

export default Windowsgroups;

