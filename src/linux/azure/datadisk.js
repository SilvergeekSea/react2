import React from "react";
import { useTable } from "react-table";

function ListItem(props) {
  return <li>{props.value}</li>;
}

function ListTable(props) {
  return <td>{props.value}</td>;
}
const Azure_DataDisk = () => [
  {
    Header: "Default Security Group",
    columns: [
      {
        Header: "Network",
        id: "nsgdetails.defaultSecurityRules",
        //accessor: "nsgdetails.defaultSecurityRules[0].access",
        accessor: (data) => {
          const listItems = (
            <React.Fragment>
              <tr>
                <ListTable value={data.diskSizeGb} />
                <ListTable value={data.location} />
                <ListTable value={data.name} />
                <ListTable value={data.diskState} />
                <ListTable value={data.provisioningState} />
                <ListTable value={data.type} />
                <ListTable value={data.networkAccessPolicy} />
                <ListTable value={data.sku.tier} />
                <ListTable value={data.timeCreated} />

                <ListTable value={data.resourceGroup} />
              </tr>
            </React.Fragment>
          );
          const listnew = (
            <tr>
              <th>Disk Size</th>
              <th>Location</th>
              <th>Name</th>
              <th>State</th>
              <th>Provision State</th>
              <th>Type</th>
              <th>Access Policy</th>
              <th>Tier</th>
              <th>timeCreated</th>

              <th>ResourceGroup</th>
            </tr>
          );

          return (
            <table>
              {listnew}
              {listItems}
            </table>
          );
        },
      },
    ],
  },
];

export default Azure_DataDisk;
