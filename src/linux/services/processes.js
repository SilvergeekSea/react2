import React from 'react';
import { useTable } from "react-table";
const Linuxprocesses = () => (
[
{
    Header: "Processes",
    Footer: "Name",
    columns: [
      {
        Header: "PID",
        accessor: "PID",
        headerStyle: {'background-color': 'black',
                      'color': 'white',
                    'font-size': '20px'},
          
      },
       {
        Header: "Time Elapsed",
        accessor: "ELAPSED",
        headerStyle: {'background-color': 'black',
                      'color': 'white',
                    'font-size': '20px'},

      },

      {
        Header: "Command",
        accessor: "COMMAND",
	headerStyle: {'background-color': 'black',
                      'color': 'white',
                    'font-size': '20px'},

      },
      {
        Header: "User",
        accessor: "USER",
	headerStyle: {'background-color': 'black',
                      'color': 'white',
                    'font-size': '20px'},

      },
      {
        Header: "Parent Process ID",
        accessor: "PPID",
	headerStyle: {'background-color': 'black',
                      'color': 'white',
                    'font-size': '20px'},

      },
      {
        Header: "Time",
        accessor: "TIME",
	headerStyle: {'background-color': 'black',
                      'color': 'white',
                    'font-size': '20px'},

      },
      {
        Header: "CPU Utilization",
        accessor: "%CPU",
	headerStyle: {'background-color': 'black',
                      'color': 'white',
                    'font-size': '20px'},

      }
    ]
  }
]
)


export default Linuxprocesses;

