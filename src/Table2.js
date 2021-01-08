import React, { Component } from 'react';
import {useEffect, useState} from 'react';
import { useTable, usePagination, useFilters, useGlobalFilter } from "react-table";
import Network  from "./network";
import { Button, Container, Row, Col, Table } from "react-bootstrap";
import BTable from 'react-bootstrap/Table';
import Mounts from "./mounts";
import MaterialTable from 'material-table';
import Packages from "./packages";
import Osinfo from "./osinfo";
//import MyClass from "./datap";

const Datap  = () => {
  const [allowances, setAllowances] = useState([]);

  useEffect(() => {
    fetch("http://10.1.1.172:7071/api/HttpExample?name=box4")
      .then(data => {
        return data.json();
      })
      .then(data => {
        setAllowances(data);
      })
      .catch(err => {
        console.log(123123);
      });
  }, []);

//  const classes = useStyles();
  return <Tablet fol={allowances} />;
}


class Tablet extends Component {
constructor(props) {
        super(props);
console.log(this.props);
this.handleClickEvent = this.handleClickEvent.bind(this)


 this.state = {
        data_mount: [],
        package_mount: [],
        data2: [],
        data10: null,
        hostName:'sola'
    };
    
}
    componentDidMount() {
        //let host_name = this.state.hostName
        let host_name = 'box4';
        console.log(host_name)
       const encodedValue = encodeURIComponent(host_name);
        var url = `http://10.1.1.172:7071/api/HttpExample?name=${encodedValue}`;

        fetch(url)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    data_mount: result.mounts,
                    package_mount: result.packages,
                    data2: result.network_cards,
                    data10: null,
                    hostName:null
                })
            });
          console.log(url);
    }

  componentDidUpdate(prevProps, prevState) {
  if (prevState.data10 !== this.state.data10) {
    console.log('pokemons state has changed.')
	 let host_name = this.state.hostName
           const encodedValue = encodeURIComponent(host_name);
           var url2 = `http://10.1.1.172:7071/api/HttpExample?name=${encodedValue}`;
        //const url = "http://10.1.1.172:7071/api/HttpExample?name=host_name";

	fetch(url2)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    data_mount: result.mounts,
                    data2: result.network_cards,
                    hostName: host_name, 
                    data10: host_name
                })
            });

        console.log(url2);
  }
}

 handleClickEvent(e) {
e.preventDefault();
 //const {hostName1} = 'sola'
 //console.log(this.state);
 //alert(hostName1);
    this.setState({
        data10: this.state.hostName  
     });
   console.log(this.state.data10);
}


 handleChange(e) {
  //if (e.key === 'Enter') {
    this.setState({
      [e.target.name]: e.target.value
    });
//}
  let host_name = this.state.hostName
  console.log(host_name);
  }

render() {
//console.log(this.func);
let data = [];
const { data2 }  = this.state;
 
const {data_mount} = this.state;
const {package_mount} = this.state;

console.log(data_mount);
const networks =  Network();

const mounts = Mounts();
 const packages = Packages();

//const neti = new MyClass();
console.log(this.props);
console.log(data2);
//data =[];
//const data2 = 
//const data = data2;

var data_mount_array=[]
var data_package_array=[]

if (data2){

Object.values(data2).map((entry, index) => {
            data.push(entry);
        });

}
else {
 data = [];
}

if (data_mount){
 Object.values(data_mount).map((entry, index) => {
            data_mount_array.push(entry);
        });

}
else {
 data_mount_array = [];
}
if (package_mount){
 Object.values(package_mount).map((entry, index) => {
            data_package_array.push(entry);
        });

}
else {
 data_package_array = [];
}


console.log(data);

const DefaultColumnFilter = ({
  column: { filterValue, preFilteredRows, setFilter }
}) => {
  const count = preFilteredRows.length;

  console.log({preFilteredRows});
   console.log({filterValue});
  return (
    <input
      value={filterValue || ""}
      onChange={e => {
        setFilter(e.target.value || undefined);
      }}
      placeholder={`Search ${count} records...`}
    />
  );
};

const GlobalFilter = ({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter
}) => {
  const count = preGlobalFilteredRows && preGlobalFilteredRows.length;

  return (
    <span>
      Search:{" "}
      <input
        value={globalFilter || ""}
        onChange={e => {
          setGlobalFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
        }}
        placeholder={`${count} records...`}
        style={{
          border: "0"
        }}
      />
    </span>
  );
};

const Table = ({ columns, data }) => {
  const filterTypes = React.useMemo(
    () => ({
      text: (rows, id, filterValue) => {
        return rows.filter(row => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      }
    }),
    []
  );

  const defaultColumn = React.useMemo(
    () => ({
      Filter: DefaultColumnFilter
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      filterTypes
    },
    useFilters,
    useGlobalFilter
  );
 
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>
                {column.render("Header")}
                <div>{column.canFilter ? column.render("Filter") : null}</div>
              </th>
            ))}
          </tr>
        ))}
        <tr>
          <th
            colSpan={visibleColumns.length}
            style={{
              textAlign: "left"
            }}
          >
            <GlobalFilter
              preGlobalFilteredRows={preGlobalFilteredRows}
              globalFilter={state.globalFilter}
              setGlobalFilter={setGlobalFilter}
            />
          </th>
        </tr>
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};


return (
<div tabIndex="0" >
<Container >
<Row>
      <input 
        type="text" 
        name="hostName" 
        placeholder="Enter topic here..." 
        value={ this.state.hostName }
        onChange={ (e) => this.handleChange(e) } 
      />
       <Button style={{color: 'white'}} variant="danger" size="sm" onClick={this.handleClickEvent}>gett value</Button>
</Row>
<Row>
<Col sm={12}>
      <Table striped bordered hover  columns={networks} data={data} />
</Col>
<Col sm={12}>
      <Table striped bordered hover  columns={mounts} data={data_mount_array} />
</Col>
</Row>
<Row>

<Col sm={12} style={{height: "50vh","overflow-y": "scroll", padding:0,margin:0}}>
      <Table columns={packages} data={data_package_array}  PageSize={5}/>
</Col>
<Col sm={12}>
      <Table striped bordered hover  columns={mounts} data={data_mount_array} showPagination='false' />
</Col>
</Row>
</Container>
</div>
  );
}

}

export default Tablet;
