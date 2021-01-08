import React from 'react';
import { useTable } from "react-table";
const Linuxgroups = () => (
[
{
    Header: "Groups",
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
        Header: "Group ID",
        accessor: "gid",
        headerStyle: {'background-color': 'black',
                      'color': 'white',
                    'font-size': '20px'},

      },

      {
        Header: "User ID",
        accessor: "uid",
	headerStyle: {'background-color': 'black',
                      'color': 'white',
                    'font-size': '20px'},

      }
    ]
  }
]
)


export default Linuxgroups;

