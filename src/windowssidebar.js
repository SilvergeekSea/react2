import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import ReceiptIcon from "@material-ui/icons/Receipt";
import NotificationsIcon from "@material-ui/icons/Notifications";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import SettingsIcon from "@material-ui/icons/Settings";
import Sidebar from "./sidebar2";
import { BrowserRouter, Route, useHistory } from "react-router-dom";
import { FaNetworkWired } from "react-icons/fa";
import { FaCompactDisc } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaMicrochip } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
import "./temi.css";

function Windowssidebar() {
  let history = useHistory();

  function onClick(e, item) {
    //window.alert(JSON.stringify(item, null, 2));
    console.log(history);
    history.push(item.name);
  }

  const items = [
    { name: "system", label: "Home", Icon: FaHome, onClick },
    "divider",
    {
      name: "AzureInfo",
      label: "Azure Info",
      Icon: FaCompactDisc,
      items: [
        { name: "logicaldisks", label: "Basic Info", onClick },
        { name: "diskdrive", label: "Security Groups", onClick },
        {
          name: "diskquota",
          label: "Network",
          items: [
            { name: "logicaldisks", label: "Security Groups", onClick },
            { name: "logicaldisks", label: "Network Names", onClick },
            ,
          ],
        },
        {
          name: "shares",
          label: "Disk Info",
          items: [
            { name: "logicaldisks", label: "OS Disks", onClick },
            { name: "logicaldisks", label: "Data Disks", onClick },
            ,
          ],
        },
      ],
    },
    "divider",
    {
      name: "Disks",
      label: "Disk Devices",
      Icon: FaCompactDisc,
      items: [
        { name: "logicaldisks", label: "LogicalDisks", onClick },
        { name: "diskdrive", label: "Disk Drive", onClick },
        { name: "diskquota", label: "Disk Quota", onClick },
        { name: "shares", label: "Shares", onClick },
      ],
    },
    "divider",
    {
      name: "network",
      label: "Network Devices",
      Icon: FaNetworkWired,
      items: [
        { name: "networkadapters", label: "Network Adapters", onClick },
        { name: "networkconfig", label: "Network Configuration", onClick },
      ],
    },
    "divider",
    {
      name: "package",
      label: "Software Packages",
      Icon: FaWindows,
      onClick,
    },
    "divider",
    {
      name: "userandgroups",
      label: "Users and Groups",
      Icon: FaUserFriends,
      items: [
        { name: "users", label: "Users", onClick },
        { name: "groups", label: "Groups", onClick },
        { name: "sysaccounts", label: "Sysaccounts", onClick },
      ],
    },
    "divider",
    {
      name: "Serivcesandprocesses",
      label: "Services and Processes",
      Icon: FaMicrochip,
      items: [
        { name: "services", label: "Services", onClick },
        { name: "process", label: "Processes", onClick },
      ],
    },
    "divider",
    {
      name: "settings",
      label: "Settings",
      Icon: FaCogs,
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

export default Windowssidebar;
