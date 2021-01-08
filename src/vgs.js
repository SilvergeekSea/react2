import React from 'react';
import { useTable } from "react-table";
const Vgsinfo = () => (
[
{
    Header: "Volume Groups",
    Footer: "Name",
    columns: [
      {
        Header: "Name",
        accessor: "name",
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

      },
     {
        Header: "Logical Volumes Nos",
        accessor: "num_lvs",
        headerStyle: {'background-color': 'black',
                      'color': 'white',
                    'font-size': '20px'},

      },
      {
        Header: "Physical Volumes Nos",
        accessor: "num_pvs",
        headerStyle: {'background-color': 'black',
                      'color': 'white',
                    'font-size': '20px'},

      }


    ]
  }
]
)


export default Vgsinfo;

