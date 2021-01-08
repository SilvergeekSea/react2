import React from 'react';
import { useTable } from "react-table";
const Osinfo = () => (
  [
    {
     Header: "Operating System Info",
     Footer: "Name",
      headerStyle: {'background-color': 'yellow',
                   'font-size': '20px',
         'text-align': 'vertical'},

  columns: [
     {
       Header: 'Sytem Info',
       accessor: 'namesa',
       maxWidth: 220
       
     },
     {
       Header: 'Info',
       accessor: 'valuesa',
     },
         ]
}
]
)


export default Osinfo;

