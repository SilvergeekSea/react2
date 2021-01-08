import React from 'react';
import { useTable } from "react-table";
const Userinfo = () => (
[
{
    Header: "Users",
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
        Header: "Description",
        accessor: "description",
        headerStyle: {'background-color': 'black',
                      'color': 'white',
                    'font-size': '20px'},

      },

    {
        Header: "Home Directory",
        accessor: "home_directory",
        headerStyle: {'background-color': 'black',
                      'color': 'white',
                    'font-size': '20px'},

      },
    
      {
        Header: "Shell",
        accessor: "shell",
        headerStyle: {'background-color': 'black',
                      'color': 'white',
                    'font-size': '20px'},

      },

       {
        Header: "UID",
        accessor: "uid",
        headerStyle: {'background-color': 'black',
                      'color': 'white',
                    'font-size': '20px'},

      },
      {
        Header: "GID",
        accessor: "gid",
	headerStyle: {'background-color': 'black',
                      'color': 'white',
                    'font-size': '20px'},

      }
    ]
  }
]
)


export default Userinfo;

