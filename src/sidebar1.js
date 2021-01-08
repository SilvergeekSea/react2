import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import ReceiptIcon from "@material-ui/icons/Receipt";
import NotificationsIcon from "@material-ui/icons/Notifications";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import SettingsIcon from "@material-ui/icons/Settings";
import Sidebar from "./sidebar2";
import { BrowserRouter, Route, useHistory } from "react-router-dom";
import { FaCompactDisc } from "react-icons/fa";

function Sideapp() {
  let history = useHistory();

  function onClick(e, item) {
    //window.alert(JSON.stringify(item, null, 2));
    console.log(history);
    history.push(item.name);
  }

  const items = [
    { name: "system", label: "Home", Icon: HomeIcon, onClick },
    {
      name: "Disks",
      label: "Disk Devices",
      Icon: ReceiptIcon,
      items: [
        { name: "mount", label: "Mounts", onClick },
        { name: "vgs", label: "Volume Groups", onClick },
        { name: "lvs", label: "Logical Volumes", onClick },
        { name: "pvs", label: "Physical Volumes", onClick },
      ],
    },
    "divider",
    {
      name: "AzureInfo",
      label: "Azure Info",
      Icon: FaCompactDisc,
      items: [
        { name: "azurebasicinfo", label: "Basic Info", onClick },
        {
          name: "azuresecuritygroup",
          label: "Security Groups",
          items: [
            { name: "azuresecuritygroup", label: "Security Groups", onClick },
            {
              name: "azure_defualt_securitygroup",
              label: "Default Security Group",
              onClick,
            },
          ],
        },
        {
          name: "Azure Network",
          label: "Network",
          items: [
            {
              name: "azure_vnet",
              label: "VNet",
              onClick,
            },
            {
              name: "azure_subnet",
              label: "Subnets",
              onClick,
            },
            {
              name: "IpConfigurations",
              label: "IpConfigurations",
              items: [
                {
                  name: "azure_privateip_config",
                  label: "Private Ip Configuration",
                  onClick,
                },
                {
                  name: "azure_publicip_config",
                  label: "Public Ip Configuration",
                  onClick,
                },
              ],
            },
            { name: "logicaldisks", label: "Network Names", onClick },
            ,
          ],
        },
        {
          name: "Azure Disk Info",
          label: "Disk Info",
          items: [
            { name: "azure_osdisks", label: "OS Disks", onClick },
            { name: "azure_datadisks", label: "Data Disks", onClick },
            ,
          ],
        },
      ],
    },
    "divider",
    {
      name: "network",
      label: "Network Devices",
      Icon: ReceiptIcon,
      onClick,
    },
    "divider",
    {
      name: "Cpu and Memory",
      label: "CPU and Memory",
      Icon: ReceiptIcon,
      items: [
        { name: "cpu", label: "CPU", onClick },
        { name: "memory", label: "Memory", onClick },
      ],
    },
    "divider",
    {
      name: "package",
      label: "Software Packages",
      Icon: ReceiptIcon,
      onClick,
    },
    "divider",
    {
      name: "userandgroups",
      label: "Users and Groups",
      Icon: ReceiptIcon,
      items: [
        { name: "users", label: "Users", onClick },
        { name: "groups", label: "Groups", onClick },
      ],
    },
    "divider",
    {
      name: "servicesandprocess",
      label: "Services and Processes",
      Icon: ReceiptIcon,
      items: [
        { name: "services", label: "Services", onClick },
        { name: "processes", label: "Process", onClick },
        { name: "top", label: "TOP", onClick },
      ],
    },
    "divider",
    {
      name: "ports",
      label: "TCP and UDP Ports",
      Icon: ReceiptIcon,
      items: [
        { name: "tcpports", label: "TCP Ports", onClick },
        { name: "udpports", label: "UDP Ports", onClick },
      ],
    },
    "divider",
    {
      name: "suppport_info",
      label: "Support Information",
      Icon: ReceiptIcon,
      items: [
        { name: "pag", label: "Primary Assignee Group", onClick },
        { name: "sug", label: "Support Group", onClick },
        { name: "sug", label: "USDB Info", onClick },
        { name: "sug", label: "Tickets", onClick },
      ],
    },
    "divider",
    {
      name: "settings",
      label: "Settings",
      Icon: SettingsIcon,
      items: [
        { name: "profile", label: "Profile" },
        { name: "insurance", label: "Insurance", onClick },
        "divider",
        {
          name: "notifications",
          label: "Notifications",
          Icon: NotificationsIcon,
          items: [
            { name: "email", label: "Email", onClick },
            {
              name: "desktop",
              label: "Desktop",
              Icon: DesktopWindowsIcon,
              items: [
                { name: "schedule", label: "Schedule" },
                { name: "frequency", label: "Frequency" },
              ],
            },
            { name: "sms", label: "SMS" },
          ],
        },
      ],
    },
  ];

  return (
    <div>
      <Sidebar items={items} />
    </div>
  );
}

export default Sideapp;
