import React from 'react';
import { useTable } from "react-table";
const Lvsinfo = () => (
[
{
    Header: "Logical Volumes",
    Footer: "Name",
    columns: [
      {
        Header: "Name",
        accessor: "name",
        headerStyle: {'background-color': 'black',
                      'color': 'white',
                  },
          
      },
       {
        Header: "Volume Group",
        accessor: "vg",
        headerStyle: {'background-color': 'black',
                      'color': 'white',
                   },

      },

      {
        Header: "Total Size",
        accessor: "size_g",
	headerStyle: {'background-color': 'black',
                      'color': 'white',
                    },

      }
    ]
  }
]
)


export default Lvsinfo;

