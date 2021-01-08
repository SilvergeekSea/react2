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
const Azure_Vnet = () => [
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
          let listItems;
          if (data.subnets !== null) {
            listItems = Object.keys(data.subnets).map((i) => (
              <React.Fragment>
                <tr>
                  <ListTable
                    value={data.subnets[i].addressSpace.addressPrefixes}
                  />
                  <ListTable value={data.subnets[i].location} />
                  <ListTable value={data.subnets[i].name} />
                  <ListTable value={data.subnets[i].dhcpOptions} />
                  <ListTable value={data.subnets[i].ddosProtectionPlan} />
                  <ListTable value={data.subnets[i].type} />
                  <ListTable value={data.subnets[i].dnsSettings} />

                  <ListTable value={data.subnets[i].resourceGroup} />
                </tr>
              </React.Fragment>
            ));
          } else {
            listItems = (
              <React.Fragment>
                <tr></tr>
              </React.Fragment>
            );
          }

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

export default Azure_Vnet;
