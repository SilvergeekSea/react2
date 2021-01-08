import React from "react";
import { useTable } from "react-table";
//if (name.startsWith("w"))

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
import Diskdrive from "./windows/disks/diskdrive";
import Diskquota from "./windows/disks/diskquota";
import Shares from "./windows/disks/shares";
import Networkadapters from "./windows/network/networkadapters";
import Networkconfig from "./windows/network/networkconfiguration";
import Windowsusers from "./windows/users/users";
import Windowsgroups from "./windows/group/group";
import Windowsservices from "./windows/services/services";
import Windowsprocess from "./windows/services/process";
import Linuxgroups from "./linux/group/groups";
import Linuxservices from "./linux/services/services";
import Linuxprocesses from "./linux/services/processes";
import Linuxtcpports from "./linux/ports/tcpports";
import LinuxTopprocesses from "./linux/process/topprocess";
import Windowsproducts from "./windows/products/products";
import AzureBasicinfo from "./linux/azure/basicinfo";
import AzureSecurityGroup from "./linux/azure/securitygroup";
import Azure_Default_SecurityGroup from "./linux/azure/default_securitygroup.js";
import Azure_Privateip_config from "./linux/azure/privateipconfig.js";
import Azure_Publicip_config from "./linux/azure/publicipconfig.js";
import Azure_Datadisk from "./linux/azure/datadisk.js";
import Azure_OSdisk from "./linux/azure/osdisk.js";
import Azure_Vnet from "./linux/azure/vnet.js";
import Azure_Subnet from "./linux/azure/subnet.js";

export const fetchData = (allowances, os_type) => {
  const mounts = Mounts();
  const packages = Packages();
  const network = Network();
  const osinfo = Osinfo();
  const meminfo = Meminfo();
  console.log(allowances);
  const cpuinfo = Cpuinfo();
  const pvs = Pvsinfo();
  const vgs = Vgsinfo();
  const lvs = Lvsinfo();
  const users = Userinfo();
  const windowsosinfo = Windowsosinfo();
  const logicaldisks = Logicaldisks();
  const diskdrive = Diskdrive();
  const diskquota = Diskquota();
  const shares = Shares();
  const networkadapters = Networkadapters();
  const networkconfig = Networkconfig();
  const windowsusers = Windowsusers();
  const windowsgroups = Windowsgroups();
  const windowsservices = Windowsservices();
  const windowsprocess = Windowsprocess();
  const linuxgroups = Linuxgroups();
  const linuxservices = Linuxservices();
  const linuxprocesses = Linuxprocesses();
  const linuxtcpports = Linuxtcpports();
  const linuxtopprocess = LinuxTopprocesses();
  const windowsproducts = Windowsproducts();
  const azurebasicinfo = AzureBasicinfo();
  const azuresecuritygroup = AzureSecurityGroup();
  const azure_defualt_securitygroup = Azure_Default_SecurityGroup();
  const azure_privateip_config = Azure_Privateip_config();
  const azure_publicip_config = Azure_Publicip_config();
  const azure_datadisks = Azure_Datadisk();
  const azure_osdisks = Azure_OSdisk();
  const azure_vnet = Azure_Vnet();
  const azure_subnet = Azure_Subnet();

  var flattenObject = function (ob) {
    var toReturn = {};

    for (var i in ob) {
      if (!ob.hasOwnProperty(i)) continue;

      if (typeof ob[i] == "object") {
        var flatObject = flattenObject(ob[i]);
        for (var x in flatObject) {
          if (!flatObject.hasOwnProperty(x)) continue;

          toReturn[i + "." + x] = flatObject[x];
        }
      } else {
        toReturn[i] = ob[i];
      }
    }
    return toReturn;
  };

  Object.size = function (obj) {
    var size = 0,
      key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  };

  function display_ci(ci_array) {
    let data_array = [];
    if (ci_array && typeof ci_array !== "undefined") {
      Object.values(ci_array).map((entry, index) => {
        data_array.push(entry);
      });
    } else {
      data_array = [];
    }

    return data_array;
  }

  function display_ci2(ci_array) {
    let data_array = [];
    if (ci_array && typeof ci_array !== "undefined") {
      data_array.push(ci_array);
    } else {
      data_array = [];
    }

    return data_array;
  }

  function display_ci3(ci_array) {
    let data_array = [];
    if (ci_array && typeof ci_array !== "undefined") {
      for (let i = 0; i < ci_array.length; i++) {
        data_array.push(ci_array[i]);
      }
    } else {
      data_array = [];
    }

    return data_array;
  }

  function display_ci4(ci_array) {
    let data_array = [];
    if (ci_array && typeof ci_array !== "undefined") {
      let data_obj = {};
      data_obj["all"] = ci_array;
      data_array.push(data_obj);
    } else {
      data_array = [];
    }

    return data_array;
  }

  function display_ci5(ci_array) {
    let data_array = [];
    var size = Object.size(ci_array);
    if (ci_array && typeof ci_array !== "undefined") {
      for (let i = 0; i < ci_array.length; i++) {
        data_array.push(ci_array[i]);
      }
    } else {
      data_array = [];
    }

    return data_array;
  }

  function display_ci6(ci_array) {
    let data_array = [];
    var size = Object.size(ci_array);
    if (ci_array && typeof ci_array !== "undefined") {
      for (let i in ci_array) {
        let data_object = {};
        data_object["namesa"] = i;
        data_object["valuesa"] = ci_array[i];
        data_array.push(data_object);
      }
    } else {
      data_array = [];
    }

    return data_array;
  }

  let mounts_data;
  //mounts_data = display_ci(allowances.mounts, data_mounts);
  mounts_data = display_ci(allowances.mounts);
  let mounts_packages = display_ci(allowances.packages);
  let network_data = display_ci(allowances.network_cards);
  console.log(mounts_data);
  let osinfo_data = display_ci2(allowances.osinfo);
  console.log(osinfo_data);
  let meminfo_data = display_ci2(allowances.mem);
  let cpuinfo_data = display_ci2(allowances.cpu);
  let userinfo_data = display_ci(allowances.user);
  console.log(meminfo_data);
  let meminfo_data_real;
  let meminfo_data_swap;
  let meminfo_data_nocache;

  //let windowsosinfo_data =[]
  //let windowsosinfo_data = display_ci3(allowances.ansible_facts_os);
  //const {all_ci} = allowances
  let windowsosinfo_data = display_ci5(allowances.ansible_facts_systeminfo);
  let linuxosinfo_data = display_ci6(allowances.osinfo);

  //let windowsosinfo_data = allowances.ansible_facts_systeminfo
  //let windowsosinfo_data = windowsosinfo1[0].all
  console.log(linuxosinfo_data);
  //console.log(windowsosinfo1)
  //console.log(all_ci)
  //console.log(sol.ansible_facts_os[0].BootDevice);

  if (meminfo_data.length !== 0) {
    meminfo_data = display_ci2(allowances.mem);
    meminfo_data_swap = display_ci2(allowances.mem.swap);
    meminfo_data_nocache = display_ci2(allowances.mem.nocache);
  } else {
    meminfo_data = [];
    meminfo_data_swap = [];
    meminfo_data_nocache = [];
  }
  let date_captured = allowances.date_captured;
  let pvs_data = display_ci(allowances.pvs);
  let vgs_data = display_ci(allowances.vgs);
  let lvs_data = display_ci(allowances.lvm);
  let logicaldisks_data = display_ci(allowances.ansible_facts_LogicalDisk);
  let diskdrive_data = display_ci(allowances.ansible_facts_diskdrive);
  let diskquota_data = display_ci(allowances.ansible_facts_diskquota);
  let shares_data = display_ci(allowances.ansible_facts_share);
  let networkadapter_data = display_ci(allowances.ansible_facts_nic);
  let networkconfig_data = display_ci(allowances.ansible_facts_nicconfig);
  let windowsusers_data = display_ci(allowances.ansible_facts_useraccount);
  let windowsgroups_data = display_ci(allowances.ansible_facts_group);
  let windowsservices_data = display_ci(allowances.ansible_facts_service);
  let windowsprocess_data = display_ci(allowances.ansible_facts_process);
  let windowsproducts_data = display_ci(allowances.ansible_facts_product);
  let linuxgroups_data = display_ci(allowances.group);
  let linuxservices_data = display_ci(allowances.service);
  let linuxprocesses_data = display_ci(allowances.process);
  let linuxtcpports_data = display_ci(allowances.tcp_ports);
  let linuxtopprocess_data = display_ci(allowances.top_process);
  let azurebasicinfo_data = display_ci6(flattenObject(allowances.vmdetails));
  let azuresecuritygroup_data = display_ci(allowances.networkinterfact);
  let azuredatadisk_data = display_ci(allowances.dataDisksinfo);
  let azureosdisk_data = display_ci(allowances.osDiskinfo);

  console.log(display_ci(allowances.networkinterfact));

  console.log(linuxtopprocess_data);

  //Graph Data
  //let pie_data = allowances.total_count;

  let pie_data = [];
  pie_data.push(allowances.linux_total_count);
  pie_data.push(10);
  pie_data.push(0);
  pie_data.push(allowances.windows_total_count);

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

  console.log(pvs_data);

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

  console.log(meminfo_data_real);

  const hj = "-highlight -striped";
  const yup = [];

  //yup.push(Nettest);

  //console.log(yup);

  //let rol = 'original.features'

  const original = {};
  const rol = original.features;

  const rout = [
    {
      path: "/system",
      fluid: true,
      items: [
        {
          name: osinfo,
          data: linuxosinfo_data,
          pagesize: 100,
          showpagesize: false,
          showpagination: false,
        },
        //  {name:osinfo, data:osinfo_data, pagesize:1, showpagesize: false, showpagination: false},
        //  {name:osinfo, data:osinfo_data, pagesize:1, showpagesize: false, showpagination: false}
      ],
    },
    {
      path: "/azurebasicinfo",
      items: [
        {
          name: azurebasicinfo,
          data: azurebasicinfo_data,
          pagesize: 20,
          showpagesize: false,
          showpagination: true,
        },
      ],
    },

    {
      path: "/azure_defualt_securitygroup",
      fluid: true,
      items: [
        {
          name: azure_defualt_securitygroup,
          data: azuresecuritygroup_data,
          pagesize: 20,
          showpagesize: false,
          showpagination: true,
        },
      ],
    },
    {
      path: "/azuresecuritygroup",
      fluid: true,
      items: [
        {
          name: azuresecuritygroup,
          data: azuresecuritygroup_data,
          pagesize: 20,
          showpagesize: false,
          showpagination: true,
        },
      ],
    },
    {
      path: "/azure_privateip_config",
      fluid: true,
      items: [
        {
          name: azure_privateip_config,
          data: azuresecuritygroup_data,
          pagesize: 20,
          showpagesize: false,
          showpagination: true,
        },
      ],
    },
    {
      path: "/azure_publicip_config",
      fluid: true,
      items: [
        {
          name: azure_publicip_config,
          data: azuresecuritygroup_data,
          pagesize: 20,
          showpagesize: false,
          showpagination: true,
        },
      ],
    },
    {
      path: "/azure_datadisks",
      fluid: true,
      items: [
        {
          name: azure_datadisks,
          data: azuredatadisk_data,
          pagesize: 20,
          showpagesize: false,
          showpagination: true,
        },
      ],
    },

    {
      path: "/azure_osdisks",
      fluid: true,
      items: [
        {
          name: azure_osdisks,
          data: azureosdisk_data,
          pagesize: 20,
          showpagesize: false,
          showpagination: true,
        },
      ],
    },

    {
      path: "/azure_vnet",
      fluid: true,
      items: [
        {
          name: azure_vnet,
          data: azuresecuritygroup_data,
          pagesize: 20,
          showpagesize: false,
          showpagination: true,
        },
      ],
    },
    {
      path: "/azure_subnet",
      fluid: true,
      items: [
        {
          name: azure_subnet,
          data: azuresecuritygroup_data,
          pagesize: 20,
          showpagesize: false,
          showpagination: true,
        },
      ],
    },
    {
      path: "/package",
      items: [
        {
          name: packages,
          data: mounts_packages,
          pagesize: 20,
          showpagesize: false,
          showpagination: true,
        },
      ],
    },
    {
      path: "/network",
      items: [
        {
          name: network,
          data: network_data,
          pagesize: 20,
          showpagesize: false,
          showpagination: false,
          Subcomp: {
            Compo: Nettest,
            extra: true,
            compo1: "original:feautures",
          },
        },
      ],
    },
    {
      path: "/mount",
      items: [
        {
          name: mounts,
          data: mounts_data,
          pagesize: 20,
          showpagesize: false,
          showpagination: false,
        },
      ],
    },

    {
      path: "/pvs",
      items: [
        {
          name: pvs,
          data: pvs_data,
          pagesize: 20,
          showpagesize: false,
          showpagination: false,
        },
      ],
    },
    {
      path: "/memory",
      items: [
        {
          name: meminfo,
          data: meminfo_data,
          pagesize: 20,
          showpagesize: false,
          showpagination: false,
        },
      ],
    },
    {
      path: "/cpu",
      items: [
        {
          name: cpuinfo,
          data: cpuinfo_data,
          pagesize: 20,
          showpagesize: false,
          showpagination: false,
        },
      ],
    },
    {
      path: "/vgs",
      items: [
        {
          name: vgs,
          data: vgs_data,
          pagesize: 20,
          showpagesize: false,
          showpagination: false,
        },
      ],
    },
    {
      path: "/lvs",
      items: [
        {
          name: lvs,
          data: lvs_data,
          pagesize: 20,
          showpagesize: false,
          showpagination: false,
        },
      ],
    },
    {
      path: "/users",
      fluid: true,
      items: [
        {
          name: users,
          data: userinfo_data,
          pagesize: 2000000,
          showpagesize: false,
          showpagination: true,
          fluid: true,
        },
      ],
    },
    {
      path: "/groups",
      fluid: true,
      items: [
        {
          name: linuxgroups,
          data: linuxgroups_data,
          pagesize: 2000000,
          showpagesize: false,
          showpagination: true,
          fluid: true,
        },
      ],
    },
    {
      path: "/services",
      fluid: true,
      items: [
        {
          name: linuxservices,
          data: linuxservices_data,
          pagesize: 2000000,
          showpagesize: false,
          showpagination: true,
          fluid: true,
        },
      ],
    },
    {
      path: "/processes",
      fluid: true,
      items: [
        {
          name: linuxprocesses,
          data: linuxprocesses_data,
          pagesize: 2000000,
          showpagesize: false,
          showpagination: true,
          fluid: true,
        },
      ],
    },
    {
      path: "/tcpports",
      fluid: true,
      items: [
        {
          name: linuxtcpports,
          data: linuxtcpports_data,
          pagesize: 2000000,
          showpagesize: false,
          showpagination: true,
          fluid: true,
        },
      ],
    },
    {
      path: "/top",
      fluid: true,
      items: [
        {
          name: linuxtopprocess,
          data: linuxtopprocess_data,
          pagesize: 2000000,
          showpagesize: false,
          showpagination: true,
          fluid: true,
        },
      ],
    },
  ];

  const windowsrout = [
    {
      path: "/system",
      fluid: true,
      items: [
        {
          name: windowsosinfo,
          data: windowsosinfo_data,
          pagesize: 100000000,
          showpagesize: false,
          showpagination: false,
        },
      ],
    },
    {
      path: "/networkadapters",
      fluid: true,
      items: [
        {
          name: networkadapters,
          data: networkadapter_data,
          pagesize: 20000000,
          showpagesize: false,
          showpagination: false,
          Subcomp: { Compo: Nettest },
        },
      ],
    },

    {
      path: "/networkconfig",
      fluid: true,
      items: [
        {
          name: networkconfig,
          data: networkconfig_data,
          pagesize: 20000000,
          showpagesize: false,
          showpagination: false,
          Subcomp: { Compo: Nettest, extra: true },
        },
      ],
    },
    {
      path: "/mount",
      items: [
        {
          name: mounts,
          data: mounts_data,
          pagesize: 2000000,
          showpagesize: false,
          showpagination: false,
        },
      ],
    },

    {
      path: "/logicaldisks",
      items: [
        {
          name: logicaldisks,
          data: logicaldisks_data,
          pagesize: 20000000,
          showpagesize: false,
          showpagination: false,
          Subcomp: { Compo: Nettest },
        },
      ],
    },
    {
      path: "/diskdrive",
      items: [
        {
          name: diskdrive,
          data: diskdrive_data,
          pagesize: 20000000,
          showpagesize: false,
          showpagination: false,
          Subcomp: { Compo: Nettest },
        },
      ],
    },
    {
      path: "/diskquota",
      fluid: true,
      items: [
        {
          name: diskquota,
          data: diskquota_data,
          pagesize: 2000000,
          showpagesize: false,
          showpagination: false,
        },
      ],
    },
    {
      path: "/shares",
      fluid: true,
      items: [
        {
          name: shares,
          data: shares_data,
          pagesize: 2000000,
          showpagesize: false,
          showpagination: true,
          fluid: true,
        },
      ],
    },
    {
      path: "/users",
      fluid: true,
      items: [
        {
          name: windowsusers,
          data: windowsusers_data,
          pagesize: 2000000,
          showpagesize: false,
          showpagination: true,
          fluid: true,
        },
      ],
    },
    {
      path: "/groups",
      fluid: true,
      items: [
        {
          name: windowsgroups,
          data: windowsgroups_data,
          pagesize: 2000000,
          showpagesize: false,
          showpagination: true,
          fluid: true,
        },
      ],
    },
    {
      path: "/services",
      fluid: true,
      items: [
        {
          name: windowsservices,
          data: windowsservices_data,
          pagesize: 2000000,
          showpagesize: false,
          showpagination: true,
          fluid: true,
          Subcomp: { Compo: Nettest },
        },
      ],
    },
    {
      path: "/package",
      fluid: true,
      items: [
        {
          name: windowsproducts,
          data: windowsproducts_data,
          pagesize: 2000000,
          showpagesize: false,
          showpagination: true,
          fluid: true,
          Subcomp: { Compo: Nettest },
        },
      ],
    },
    {
      path: "/process",
      fluid: true,
      items: [
        {
          name: windowsprocess,
          data: windowsprocess_data,
          pagesize: 2000000,
          showpagesize: false,
          showpagination: true,
          Subcomp: { Compo: Nettest },
        },
      ],
    },
  ];

  console.log(allowances.group);
  if (os_type.startsWith("l")) {
    return {
      type: "Linux",
      allowances,
      os_type,
      rout,
      windowsrout,
      date_captured,
      pie_data,
    };
  } else {
    return {
      type: "Windows",
      allowances,
      os_type,
      rout,
      windowsrout,
      date_captured,
      pie_data,
    };
  }
};
