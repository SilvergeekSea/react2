import React from 'react';
import { useTable } from "react-table";
import '../../temi.css';
const Logicaldisks = () => (
 [
     {
      Header: "LogicalDisks",
      Footer: "Name",
       headerStyle: {'background-color': 'rgba(219, 223, 166, 0.534)',
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
        accessor: 'Caption'
      },
      {
        Header: 'Volume Name',
        accessor: 'VolumeName',
      },
      {
        Header: 'Description',
        accessor: 'Description',
      },
      {
        Header: 'Total Size',
        accessor: 'Size',
      },
      {
        Header: 'Free Space',
        accessor: 'FreeSpace',
      },
        
      {
        Header: 'FileSystem',
        accessor: 'FileSystem',
      },
          ]
}
]
)
 

export default Logicaldisks;

