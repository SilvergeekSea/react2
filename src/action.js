import React from "react";
import { useTable } from "react-table";
//if (name.startsWith("w"))

export const selectOS = (
  os_type,
  apilink = "10.1.1.172:7071",
  apitrigger = "HttpExample"
) => {
  if (os_type.startsWith("l")) {
    return {
      type: "Linux",
      os_type,
      apilink,
      apitrigger,
      allowances: fetch(
        `http://${apilink}/api/${apitrigger}?name=${os_type}`
      ).then((data) => {
        return data.json();
      }),
    };
  } else {
    var apilink = "10.1.1.172:7072";
    var apitrigger = "HttpExample";
    return {
      type: "Windows",
      os_type,
      apilink: "10.1.1.172:7072",
      apitrigger: "HttpExample",
      allowances: fetch(
        `http://${apilink}/api/${apitrigger}?name=${os_type}`
      ).then((data) => {
        return data.json();
      }),
    };
  }
};
