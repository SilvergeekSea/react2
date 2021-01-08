import { React, useState, useEffect } from "react";
import Tablet from "./Table2";
import {
  Nav,
  Button,
  Container,
  Row,
  Col,
  Table,
  Collapse,
} from "react-bootstrap";
import "./temi.css";
import Tablet2 from "./mounts1";
import Mounts from "./mounts";
import Packages from "./packages";
import Network from "./network";
import BTable from "react-bootstrap/Table";
import Osinfo from "./osinfo";
import MaterialTable from "material-table";
import Meminfo from "./mem";
import Cpuinfo from "./cpuinfo";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import Sideapp from "./sidebar1";
import Nettest from "./nettest";
import Pvsinfo from "./pvs";
import Vgsinfo from "./vgs";
import Lvsinfo from "./lvs";
import Userinfo from "./users";
import Windowssidebar from "./windowssidebar";
import Windowsosinfo from "./windows/osinfo";
import Logicaldisks from "./windows/disks/logicaldisks";
import styled from "styled-components";

import reducer from "./reducer";
import { connect } from "react-redux";
import { createStore } from "redux";

import store from "./store";

import { selectOS, selectOSHistory } from "./prdactions";

import { Doughnut, Bar } from "react-chartjs-2";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

//export default function BasicExample() {
function BasicExample(props) {
  console.log(props);
  const sold = props.selectos;
  console.log(sold);
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  //function temi2(e, state, rowInfo, column, instance){
  function temi2(e) {
    return;
    console.log(e);
  }

  const Styles = styled.div`
    padding: 1rem;

    table {
      border-spacing: 0;
      border: 1px solid black;

      tr {
        :last-child {
          td {
            border-bottom: 0;
          }
        }
        :nth-child(even) {
          background-color: #f2f2f2;
        }
        :hover {
          background-color: #f5f5f5;
        }
      }

      th,
      td {
        margin: 0;
        padding: 0.5rem;
        border-bottom: 1px solid black;
        border-right: 1px solid black;
        width: 1000px;

        :last-child {
          border-right: 0;
        }
      }
      th {
        background-color: #fffaf0;
      }
    }
  `;
  //{
  //console.log("A Td Element was clicked!");
  //console.log("it produced this event:", e);
  //console.log("It was in this column:", column);
  //console.log("It was in this row:", rowInfo);
  //console.log("It was in this table instance:", instance);

  // IMPORTANT! React-Table uses onClick internally to trigger
  // events like expanding SubComponents and pivots.
  // By default a custom 'onClick' handler will override this functionality.
  // If you want to fire the original onClick handler, call the
  // 'handleOriginal' function.
  //if (handleOriginaltop) {
  //handleOriginaltop();
  // }/
  //}
  //}

  function QueryParamsDemo() {
    let query = useQuery();
  }

  function handleselect(e) {
    alert(e.target.value);
    let datename = e.target.value;
    console.log(name);
    setSearch(name + "-" + datename + ".json");
    setDatename(datename);

    props.dispatch(selectOSHistory(name + "-" + datename + ".json"));

    alert(name);
  }

  function handlechange(e) {
    setName(e.target.value);
    // alert(e.target.value);
  }

  function handlebutton(e) {
    props.dispatch(selectOS(name));
    //props.selectos();
    //console.log(lope);
    //console.log(name);
    setSearch(name);
    setCiname(name);
  }

  handlebutton = handlebutton.bind(this);

  let d = new Date();
  let dday = d.toDateString();

  const [name, setName] = useState("wbox8");
  const [search, setSearch] = useState();
  const [osl, setOS] = useState("Linux");
  const [apiUrl, setLink] = useState("10.1.1.172:7072");
  const [apitrigger, setTrigger] = useState("HttpExample");
  const [ci_name, setCiname] = useState("");
  const [datename, setDatename] = useState(dday);

  //const[rowdata, useState

  let data = [];

  const [allowances, setAllowances] = useState({ mounts: [] });
  const [historydata, setHistory] = useState({ history: [] });

  let host_name = search;
  const encodedValue = encodeURIComponent(search);
  let url2 = `http://10.1.1.172:7071/api/HttpExample?name=${encodedValue}`;

  useEffect(() => {
    fetch(`http://${apiUrl}/api/${apitrigger}?name=${search}`)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setAllowances(data);
      })
      .catch((err) => {
        console.log(123123);
      });
  }, [search]);

  useEffect(() => {
    fetch(`http://10.1.1.172:7075/api/historyapi?name=${ci_name}`)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setHistory(data);
      })
      .catch((err) => {
        console.log(123123);
      });
  }, [search]);

  console.log(historydata);
  console.log(search);

  console.log(apiUrl);

  console.log(allowances.mounts);

  Object.size = function (obj) {
    var size = 0,
      key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  };

  //Graph Data
  //let pie_data = allowances.total_count

  // let pie_data = [];
  //
  //pie_data.push(10);
  let pie_data = props.pie_data;

  console.log(pie_data);

  const data1 = {
    labels: ["Linux", "AIX", "Cloud", "Windows"],
    datasets: [
      {
        label: "# of Systems",
        //data: [12, 19, 3, 5, 2, 3],
        data: pie_data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  let localize = [
    {
      pagination: {
        labelDisplayedRows: "{from}-{to} of {count}",
        firstAriaLabel: "tope",
      },
      toolbar: {
        nRowsSelected: "{0} row(s) selected",
      },
      header: {
        actions: "Actions",
      },
      body: {
        emptyDataSourceMessage: "No records to display",
        filterRow: {
          filterTooltip: "Filter",
        },
      },
    },
  ];

  const hj = "-highlight -striped";
  const yup = [];

  //const [osarray, setOSarray] = useState(rout);

  // let solk = props.osarray;
  //console.log(solk);

  //let osarray = rout;

  //console.log(osarray);
  const osarray = props.osarray;

  let date_captured = props.date_captured;

  console.log(date_captured);

  //if (name.startsWith("l")) {
  //  osarray = rout;
  //} else if (name == "w") {
  //  osarray = windowsrout;
  //} else {
  // osarray = windowsrout;
  // }

  // const osarray = rout;

  const mapper2 = [];
  function Temi() {
    return (
      <div>
        {osarray.map(({ path, fluid, items: subItems, ...rest }) => (
          <Route exact path={path}>
            <Container fluid={{ fluid } !== undefined ? fluid : null}>
              {Array.isArray(subItems)
                ? subItems.map((subItem) => (
                    <Row>
                      <Col sm={12}>
                        <Styles>
                          <ReactTable
                            columns={subItem["name"]}
                            minRows="0"
                            className={hj}
                            data={subItem["data"]}
                            defaultPageSize={subItem["pagesize"]}
                            showPagination={subItem["showpagination"]}
                            SubComponent={
                              subItem["Subcomp"] !== undefined
                                ? (row) => {
                                    const Yu = subItem["Subcomp"]["Compo"];
                                    const { lop } = { original: "features" };
                                    console.log(lop);
                                    return <Yu v={row.original} u={lop} />;
                                  }
                                : null
                            }
                            getTdProps={(state, rowInfo, column, instance) => {
                              return {
                                onClick: (e, temi2) => {
                                  return temi2(e);
                                }, //{temi2(state, rowInfo, column, instance)}   // }
                              };
                            }}
                            //onClick={return alert('tope')}
                          />
                        </Styles>
                        <br />
                      </Col>
                    </Row>
                  ))
                : null}
            </Container>
          </Route>
        ))}
      </div>
    );
  }

  osarray.map(({ path, items: subItems, ...rest }) =>
    Array.isArray(subItems) ? console.log(subItems) : null
  );

  const ras = Temi();

  const { history } = historydata;

  console.log(ras);

  //const osl = 'Windows';
  const Os3 = Sideapp;
  const Windowsside = Windowssidebar;
  const sidebar = props.ostype;
  console.log(sidebar);
  const side = () => {
    return sidebar == "Linux" ? (
      <Os3 />
    ) : sidebar == "Windows" ? (
      <Windowsside />
    ) : (
      <Windowsside />
    );
  };

  console.log(side());

  const filter1 = true;

  const [open, setOpen] = useState(true);
  //
  return (
    <Router>
      <div id="mySidenav" className="sidenavnew">
        <div id="mySidenav" className="sidenav">
          <div>
            <img className="imgsidenav" src="Coles-logo-header.svg" />
          </div>
          <div className="sidenav2">
            <input
              style={{
                width: "100%",
                marginBottom: "10px",
                borderRadius: "20px",
              }}
              value={name}
              onChange={handlechange}
              type="text"
            />
            <button
              style={{
                width: "100%",
                marginBottom: "10px",
                borderRadius: "20px",
              }}
              onClick={handlebutton}
            >
              Search
            </button>
            <select
              onChange={handleselect}
              style={{
                width: "100%",
                marginBottom: "10px",
                borderRadius: "20px",
              }}
            >
              {history.map((entry, index) => (
                <option value={entry}>{entry}</option>
              ))}
            </select>
            {side()}
          </div>
        </div>

        <div
          className="sidenav1"
          //style={{ "margin-left": "300px" }}
        >
          <hr />
          {name} at {date_captured}
          <div
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "20%",
              height: "20%",
              marginBottom: "10px",
            }}
          >
            <Doughnut
              data={data1}
              options={{ maintainAspectRatio: false }}
              colors={["#a8e0ff"]}
            />
          </div>
          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <Switch>
            <Temi />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    osarray: state.osarray,
    type: state.type,
    date_captured: state.date_captured,
    ostype: state.ostype,
    pie_data: state.pie_data,
  };
};

//const mapDispatchToProps = (dispatch) => {
//console.log(dispatch);
// let name = "Linbox";
// return { selectos: () => dispatch(selectOS(name)) };
//};

//const top = { mapDispatchToProps };

//console.log(top);
//export default connect(mapStateToProps, mapDispatchToProps)(BasicExample);
export default connect(mapStateToProps, null)(BasicExample);
