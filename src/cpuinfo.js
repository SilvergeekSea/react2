import React from 'react';
import { useTable } from "react-table";
const Cpuinfo = () => (
    [
     {
      Header: "CPU Info",
      Footer: "Name",
       headerStyle: {'background-color': 'yellow',
                    'font-size': '20px'},

   columns: [
      {
        Header: 'Product Name',
        accessor: 'product_name',
      },
      {
        Header: 'Processor Name',
        accessor: 'processor_name',
      },
      {
        Header: 'Core Count',
        accessor: 'processor_cores'
      },
      {
        Header: 'Thread per Core',
        accessor: 'thread_per_core'
      },
      {
        Header: 'Virtual CPUs',
        accessor: 'vcpu'
      }
    ]
  }
]
)


export default Cpuinfo;

