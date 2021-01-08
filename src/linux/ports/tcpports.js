import React from 'react';
import { useTable } from "react-table";
const Linuxtcp_ports = () => (
[
{
    Header: "TCP Listening Ports",
    Footer: "Name",
    columns: [
             {
        Header: "Listening Address",
        accessor: "address",
        headerStyle: {'background-color': 'black',
                      'color': 'white',
                    'font-size': '20px'},

      },

      {
        Header: "PID",
        accessor: "pid",
	headerStyle: {'background-color': 'black',
                      'color': 'white',
                    'font-size': '20px'},

      },
      {
        Header: "Port",
        accessor: "port",
	headerStyle: {'background-color': 'black',
                      'color': 'white',
                    'font-size': '20px'},

      },
      {
        Header: "Protocol",
        accessor: "protocol",
	headerStyle: {'background-color': 'black',
                      'color': 'white',
                    'font-size': '20px'},

      },
      {
        Header: "Start Time",
        accessor: "stime",
	headerStyle: {'background-color': 'black',
                      'color': 'white',
                    'font-size': '20px'},

      },
      {
        Header: "User",
        accessor: "user",
	headerStyle: {'background-color': 'black',
                      'color': 'white',
                    'font-size': '20px'},

      }
    ]
  }
]
)


export default Linuxtcp_ports;

