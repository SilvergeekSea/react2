import React from "react";
import { useTable } from "react-table";

function ListItem(props) {
  return <li>{props.value}</li>;
}

function ListTable(props) {
  return <td>{props.value}</td>;
}
const Azure_Subnet = () => [
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
          if (data.subnets.subnets !== null) {
            listItems = Object.keys(data.subnets).map((x) =>
              data.subnets[x].subnets.map((i) => (
                <React.Fragment>
                  <tr>
                    <ListTable value={i.addressPrefix} />
                    <ListTable value={i.location} />
                    <ListTable value={i.name} />
                    <ListTable value={i.dhcpOptions} />
                    <ListTable value={i.ddosProtectionPlan} />
                    <ListTable value={i.type} />
                    <ListTable value={i.dnsSettings} />

                    <ListTable value={i.resourceGroup} />
                  </tr>
                </React.Fragment>
              ))
            );
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

export default Azure_Subnet;
