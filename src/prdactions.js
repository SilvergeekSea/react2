import React from "react";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { fetchData } from "./action2";

export function selectOS(
  os_type,
  apilink = "10.1.1.107:7071",
  apitrigger = "HttpExample"
) {
  if (os_type.startsWith("l")) {
    return (dispatch) => {
      return fetch(`http://${apilink}/api/${apitrigger}?name=${os_type}`)
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          dispatch(fetchData(data, os_type));
          // return data.json;
        });
    };
  } else {
    var apilink = "10.1.1.107:7072";
    var apitrigger = "HttpExample";
    return (dispatch) => {
      return fetch(`http://${apilink}/api/${apitrigger}?name=${os_type}`)
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          dispatch(fetchData(data, os_type));
          // return data.json;
        });
    };
  }
}

export function selectOSHistory(
  os_type,
  apilink = "10.1.1.107:7073",
  apitrigger = "History"
) {
  if (os_type.startsWith("l")) {
    return (dispatch) => {
      return fetch(`http://${apilink}/api/${apitrigger}?name=${os_type}`)
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          dispatch(fetchData(data, os_type));
          // return data.json;
        });
    };
  } else {
    var apilink = "10.1.1.107:7073";
    var apitrigger = "History";
    return (dispatch) => {
      return fetch(`http://${apilink}/api/${apitrigger}?name=${os_type}`)
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          dispatch(fetchData(data, os_type));
          // return data.json;
        });
    };
  }
}
