import React from "react";
import { useTable } from "react-table";
import "../../temi.css";
const Windowsprocess = () => [
  {
    Header: "Process",
    Footer: "Name",
    headerStyle: {
      "background-color": "rgba(219, 223, 166, 0.534)",
      "font-size": "20px",
      "text-align": "vertical",
    },

    columns: [
      {
        Header: "",
        accessor: "",
        expander: true,
        Expander: ({ isExpanded, ...rest }) => (
          <div>
            {isExpanded ? <span>&#x2299;</span> : <span>&#x2295;</span>}
          </div>
        ),
      },
      {
        Header: "Caption",
        accessor: "Caption",
      },
      {
        Header: "Description",
        accessor: "Description",
      },
      {
        Header: "Priority",
        accessor: "Priority",
      },
      {
        Header: "CreationDate",
        accessor: "CreationDate",
      },
      {
        Header: "ProcessId",
        accessor: "ProcessId",
      },
      {
        Header: "CommandLine",
        accessor: "CommandLine",
      },
    ],
  },
];

export default Windowsprocess;
