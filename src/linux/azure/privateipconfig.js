import React from "react";
import { useTable } from "react-table";
//import ListItem from "@material-ui/core/ListItem";
//privateIpAllocationMethod

function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function ListTable(props) {
  // Correct! There is no need to specify the key here:
  //const tabletr = <tr>

  return <td>{props.value}</td>;
}
const Azure_Privateip_config = () => [
  {
    Header: "Default Security Group",
    columns: [
      {
        Header: "Network Name",
        accessor: "name",
        disableFilters: true,
        width: 150,
      },
      {
        Header: "NSG",
        accessor: "nsg",
        width: 150,
      },

      {
        Header: "Network",
        id: "nsgdetails.defaultSecurityRules",
        //accessor: "nsgdetails.defaultSecurityRules[0].access",
        accessor: (data) => {
          const listItems = (
            <React.Fragment>
              <tr>
                <ListTable value={data.privateIpAddress} />
                <ListTable value={data.privateIpAddressVersion} />
                <ListTable value={data.privateIpAllocationMethod} />
                <ListTable value={data.privateLinkConnectionProperties} />
                <ListTable value={data.provisioningState} />
                <ListTable value={data.resourceGroup} />
              </tr>
            </React.Fragment>
          );
          const listnew = (
            <tr>
              <th>Access</th>
              <th>Name</th>
              <th>Priority</th>
              <th>Protocol</th>
              <th>Type</th>
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

export default Azure_Privateip_config;
