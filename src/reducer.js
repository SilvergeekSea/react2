import React from "react";
import { useTable } from "react-table";
import { selectOS } from "./action";
import Mounts from "./mounts";
import Packages from "./packages";
import Network from "./network";
import BTable from "react-bootstrap/Table";
import Osinfo from "./osinfo";
import MaterialTable from "material-table";
import Meminfo from "./mem";
import Cpuinfo from "./cpuinfo";

const windowsrout = [];
const rout = [];

const initialState = {
  osarray: windowsrout,
  type: "Windows",
  apilink: "10.1.1.107:7072",
  apitrigger: "HttpExample",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "Windows":
      return {
        ...state,
        osarray: action.windowsrout,
        type: action.os_type,
        apilink: action.apilink,
        apitrigger: action.apitrigger,
        allowances: action.allowances,
        date_captured: action.date_captured,
        ostype: action.type,
        pie_data: action.pie_data,
      };
    case "Linux":
      return {
        ...state,
        osarray: action.rout,
        type: action.os_type,
        apilink: action.apilink,
        apitrigger: action.apitrigger,
        allowances: action.allowances,
        date_captured: action.date_captured,
        ostype: action.type,
        pie_data: action.pie_data,
      };
    default:
      return state;
  }
};

export default reducer;
