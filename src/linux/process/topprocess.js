import React from 'react';
import { useTable } from "react-table";
const LinuxTopprocesses = () => (
[
{
    Header: "TOP Processes",
    Footer: "Name",
    columns: [
      {
        Header: "Command",
        accessor: "COMMAND",
        headerStyle: {'background-color': 'black',
                      'color': 'white',
                   },
          
      },
       {
        Header: "PID",
        accessor: "PID",
        headerStyle: {'background-color': 'black',
                      'color': 'white',
                   },

      },

      {
        Header: "User",
        accessor: "USER",
	headerStyle: {'background-color': 'black',
                      'color': 'white',
                   },

      },
      {
        Header: "Priority",
        accessor: "PR",
	headerStyle: {'background-color': 'black',
                      'color': 'white',
                    },

      },
      {
        Header: "Nice",
        accessor: "NI",
	headerStyle: {'background-color': 'black',
                      'color': 'white',
                   },

      },
      {
        Header: "Memory Utilisation ",
        accessor: "%MEM",
	headerStyle: {'background-color': 'black',
                      'color': 'white',
                   },

      },
      {
        Header: "CPU Utilization",
        accessor: "%CPU",
	headerStyle: {'background-color': 'black',
                      'color': 'white',
                    },
                },
    {
        Header: "Time Elapsed",
        accessor: "TIME+",
        headerStyle: {'background-color': 'black',
       'color': 'white',
    },

      }
    ]
  }
]
)


export default LinuxTopprocesses;

