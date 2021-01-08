import React from "react";
import { useTable } from "react-table";
//import "react-table/react-table.css";
const Packages = () => [
  {
    Header: "Package Name",
    Footer: "Name",
    columns: [
      {
        Header: "Package Name",
        accessor: "name",
        filter: "tope",
      },
      {
        Header: "Arch",
        accessor: "arch",
      },
    ],
  },
  {
    Header: "Other Info",
    Footer: "Other Info",
    columns: [
      {
        Header: "Version",
        accessor: "version",
      },
    ],
  },
];

export default Packages;
