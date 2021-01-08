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
const Azure_Publicip_config = () => [
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
        id: "publicipconfig",
        //accessor: "nsgdetails.defaultSecurityRules[0].access",
        accessor: (data) => {
          let listItems;
          if (data.publicipconfig !== null) {
            listItems = Object.keys(data.publicipconfig).map((i) => (
              <React.Fragment>
                <tr>
                  <ListTable value={data.publicipconfig[i].ipAddress} />
                  <ListTable value={data.publicipconfig[i].location} />
                  <ListTable value={data.publicipconfig[i].name} />
                  <ListTable
                    value={data.publicipconfig[i].publicIpAddressVersion}
                  />
                  <ListTable value={data.publicipconfig[i].provisioningState} />
                  <ListTable value={data.publicipconfig[i].type} />
                  <ListTable
                    value={data.publicipconfig[i].dnsSettings.domainNameLabel}
                  />
                  <ListTable value={data.publicipconfig[i].dnsSettings.fqdn} />
                  <ListTable value={data.publicipconfig[i].resourceGroup} />
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
              <th>Ipaddress</th>
              <th>Location</th>
              <th>Name</th>
              <th>Version</th>
              <th>Provision State</th>
              <th>type</th>
              <th>Domain Name</th>
              <th>FQDN</th>

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

export default Azure_Publicip_config;
