import React from 'react';
import { useTable } from "react-table";
const Network = () => (
[
{
    Header: "Network",
    Footer: "Name",
    columns: [
       {
        Header: "",
        accessor: "",
        expander: true,
        Expander: ({ isExpanded, ...rest }) =>
                    <div>
                      {isExpanded
                        ? <span>&#x2299;</span>
                        : <span>&#x2295;</span>}
                    </div>,
      },
      {
        Header: "Network",
        accessor: "device",
      },
      {
        Header: "Ipaddress",
        accessor: "ipv4.address",
        disableFilters: true
      },
      {
        Header: "Broadcast",
        accessor: "ipv4.broadcast",
        disableFilters: true
      }

    ]
  },
  {
    Header: "Other Info",
    Footer: "Other Info",
    columns: [
      {
        Header: "Age",
        accessor: "size_available",
	disableFilters: true,
        //Footer: info => {
         // const total = (
           // () => info.rows.reduce((sum, row) => row.values.size_available + sum, 0),
          //  [info.rows]
         // );

        //  return <>Average Age: {total / info.rows.length}</>;
       // }
      }
    ]
  }
]
)


export default Network;

