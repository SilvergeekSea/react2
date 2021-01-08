import React from 'react';
import { useTable } from "react-table";
const Meminfo = () => (
    [
     {
      Header: "Real Memory",
      Footer: "Name",
      headerStyle: {'background-color': 'yellow', 
                    },
      columns: [
      {
        Header: 'Total Memory',
        accessor: 'real.total',
        
      },
      {
        Header: 'Used Memory',
        accessor: 'real.used',
      },
      {
        Header: 'Free Memory',
        accessor: 'real.free'
      }
    ]
  },
 
 {
      Header: "SwapMemory",
      Footer: "Name",
      headerStyle: {'background-color': 'yellow',
                   },
      columns: [
      {
        Header: 'Total Memory',
        accessor: 'swap.total',

      },
      {
        Header: 'Used Memory',
        accessor: 'swap.used',
      },
      {
        Header: 'Free Memory',
        accessor: 'swap.free'
      }
    ]
  },

{
      Header: "NocacheMemory",
      Footer: "Name",
      headerStyle: {'background-color': 'yellow',
                    },
      columns: [
      {
        Header: 'Used Memory',
        accessor: 'nocache.used',
      },
      {
        Header: 'Free Memory',
        accessor: 'nocache.free'
      }
    ]
  }


]
)


export default Meminfo;

