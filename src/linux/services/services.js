import React from 'react';
import { useTable } from "react-table";
const Linuxservices = () => (
[
{
    Header: "Services",
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
        Header: "Source",
        accessor: "source",
        headerStyle: {'background-color': 'black',
                      'color': 'white',
                    'font-size': '20px'},

      },

      {
        Header: "State",
        accessor: "state",
	headerStyle: {'background-color': 'black',
                      'color': 'white',
                    'font-size': '20px'},

      },
      {
        Header: "Status",
        accessor: "status",
	headerStyle: {'background-color': 'black',
                      'color': 'white',
                    'font-size': '20px'},

      }
    ]
  }
]
)


export default Linuxservices;

