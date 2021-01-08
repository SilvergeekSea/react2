import React from "react";
import { useTable } from "react-table";
import "../../temi.css";
const Windowsservices = () => [
  {
    Header: "Services",
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
        Header: "State",
        accessor: "State",
      },
      {
        Header: "StartMode",
        accessor: "StartMode",
      },
      {
        Header: "ServiceType",
        accessor: "ServiceType",
      },
      {
        Header: "Started",
        accessor: "Started",
      },

      {
        Header: "StartName",
        accessor: "StartName",
      },
      {
        Header: "Status",
        accessor: "Status",
      },
    ],
  },
];

export default Windowsservices;
