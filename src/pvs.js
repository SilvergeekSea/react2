import React from 'react';
import { useTable } from "react-table";
const Pvsinfo = () => (
[
{
    Header: "Physical Volumes",
    Footer: "Name",
    columns: [
      {
        Header: "Physical Volume",
        accessor: "name",
        headerStyle: {'background-color': 'black',
                      'color': 'white',
                    'font-size': '20px'},
          
      },
      {
        Header: "Volume Group",
        accessor: "vg",
	headerStyle: {'background-color': 'black',
                      'color': 'white',
                    'font-size': '20px'},

      },
      {
        Header: "Total Size",
        accessor: "size_g",
	headerStyle: {'background-color': 'black',
                      'color': 'white',
                    'font-size': '20px'},

      },
     {
        Header: "Free Size",
        accessor: "free_g",
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


export default Pvsinfo;

