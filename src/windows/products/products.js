import React from "react";
import { useTable } from "react-table";
import "../../temi.css";
const Windowsproducts = () => [
  {
    Header: "Packages",
    Footer: "Name",
    headerStyle: {
      "background-color": "yellow",
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
        Header: "Name",
        accessor: "Name",
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
        Header: "Vendor",
        accessor: "Vendor",
      },
      {
        Header: "PackageName",
        accessor: "PackageName",
      },
      {
        Header: "InstallSource",
        accessor: "InstallSource",
      },
      {
        Header: "InstallDate",
        accessor: "InstallDate",
      },
      {
        Header: "Version",
        accessor: "Version",
      },
    ],
  },
];

export default Windowsproducts;
