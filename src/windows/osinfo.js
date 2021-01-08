import React from "react";
import { useTable } from "react-table";
import "../temi.css";
const Windowsosinfo = () => [
  {
    Header: "Operating System Info",
    Footer: "Name",
    headerStyle: {
      "background-color": "yellow",
      "font-size": "20px",
      "text-align": "vertical",
    },

    columns: [
      {
        Header: "Sytem Info",
        accessor: "name",
        maxWidth: 220,
      },
      {
        Header: "Info",
        accessor: "value",
      },
    ],
  },
];

export default Windowsosinfo;
