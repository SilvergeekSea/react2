import React from 'react';
import { useTable } from "react-table";
const Mounts = () => (
[
{
    Header: "Mount",
    Footer: "Name",
    columns: [
      {
        Header: "Mount Point",
        accessor: "mount",
        headerStyle: {'background-color': 'black',
                      'color': 'white',
                    'font-size': '20px'},
          
      },
      {
        Header: "fstype",
        accessor: "fstype",
	headerStyle: {'background-color': 'black',
                      'color': 'white',
                    'font-size': '20px'},

      },
      {
        Header: "Size Available",
        accessor: "block_available",
	headerStyle: {'background-color': 'black',
                      'color': 'white',
                    'font-size': '20px'},

      }

    ]
  },
  {
    Header: "Other Info",
    Footer: "Other Info",
    columns: [
      {
        Header: "UUID",
        accessor: "size_available",
       // Footer: info => {
        //  const total = (
           // () => info.rows.reduce((sum, row) => row.values.size_available + sum, 0),
          //  [info.rows]
          //);

        //  return <>Average Age: {total / info.rows.length}</>;
        //}
       headerStyle: {'background-color': 'black',
                      'color': 'white',
                    'font-size': '20px'},

      }
    ]
  }
]
)


export default Mounts;

