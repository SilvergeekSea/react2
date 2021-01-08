import React, { Component } from 'react';
import {useEffect, useState} from 'react';
import { useTable, usePagination, useFilters, useGlobalFilter } from "react-table";
import Network  from "./network";
import { Button, Container, Row, Col, Table } from "react-bootstrap";
import BTable from 'react-bootstrap/Table';
import Mounts from "./mounts";
import Packages from "./packages";
//import MyClass from "./datap";

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

const disableGlobalFilter =true;

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

const Tablet2 = ({ columns, data, disableFilters }) => {
React.useEffect(
    () => {
      setHiddenColumns(
        columns.filter(column => !column.show).map(column => column.id)
      );
    },
    [columns]
  )




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

//const disableFilters = false;

const defaultCanFilter =false;

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
    setGlobalFilter,
    setHiddenColumns
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      disableFilters,
      defaultCanFilter,
      filterTypes,
     // disableGlobalFilter
      initialState: {
        hiddenColumns: ["nodename"]
      }
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



export default Tablet2;
