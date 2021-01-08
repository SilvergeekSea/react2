import React from 'react';
import Seun from './seun';
import styled from 'styled-components';


var flattenObject = function(ob) {
	var toReturn = {};
	
	for (var i in ob) {
		if (!ob.hasOwnProperty(i)) continue;
		
		if ((typeof ob[i]) == 'object') {
			var flatObject = flattenObject(ob[i]);
			for (var x in flatObject) {
				if (!flatObject.hasOwnProperty(x)) continue;
				
				toReturn[i + '.' + x] = flatObject[x];
			}
		} else {
			toReturn[i] = ob[i];
		}
	}
	return toReturn;
};

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;
    width:50%;
    border-collapse: collapse;
    table-layout: auto

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
      :nth-child(even) {
        background-color: #f2f2f2;
      }
      :hover {
        background-color: #FFFFF0;
      }
      width: 1%;
      white-space: nowrap;
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      width: 1%;
      
      :last-child {
        border-right: 0;
        width:100%;
        
      }
    }
    th {
      background-color: #FFFAF0 ;
      width: 1%;
      white-space: nowrap;
    }
  }
`

const Nettest =(props) =>{
  const lop={"original":"original", "feautures":"features"}
  let lpoi ='['
  let kolu='top'
  const sol={}
  const kole= JSON.stringify(lop)
  for (let z  in lop){
   lpoi=lpoi + ']['+ 'lop[' + lop[z] + ']'
  }
  lpoi=lpoi+']'
 
  const pol = {lop}
  //const {rows} = JSON.parse(lop);
   const {v} = props;
   const {u} = props;
   //Object.assign(sol, v, lop);
   //for (let i in Object.keys(v.original)){
    // if ( i.tostring == u){
     //  console.log(i)
   var kol='original.feature'
   //const v = props;
    return (
     
    <div style={{ padding: '10px' }}>
    <Styles>
    <table>
    <thead>
    <tr><th>KeyInfo</th><th>Value</th></tr>
    </thead>
    {
    //Object.keys(v[ lop['original'] ][ lop['feautures'] ]).map((entry, index)=>{
   Object.keys(flattenObject(v)).map((entry, index)=>{  
    // if (typeof(v[entry]) === 'object'||Array.isArray(v[entry]))
    // {
    //   for(let i=0; i<=v[entry].length; i++){
    return (
          <tr>
          <td>{entry}</td>
         <td>{
                
               // typeof(v[entry]) === 'object' && Object.keys(v[entry]).length > 2 ?
                
               //JSON.stringify(v[entry])
            //   for(let i=0, i=<v[entry].length; i++){dreyfuguguytfgjuym
                 // <ul>
                 //  {Object.keys(v[entry]).map((value, key)=>
                 //       <li> {value}  {v[entry][value] }</li>
                 //  )}
                         
               //  </ul>
                //     :
                flattenObject(v)[entry] 
               }   
                  
         
               
           
          </td>
         </tr>
    )
            //  }
          //  }
         //     else{

//return (
            //    <tr>
             //   <td>{entry}</td>
             //  <td>{
                      
                      //typeof(v[entry]) === 'object'||Array.isArray(v[entry]) ?
                    //  Object.keys(v[entry]).length >= 0 ? 
                    //  JSON.stringify(v[entry])
                  //       <ul>
                   //      {Object.keys(v[entry]).map((value, key)=>
                  //            <li> {value}  {v[entry][value] }</li>
                 //           )}
                               
                 //       </ul>
                      //     :
                       //    v[entry] 
                         
                        
               //      }
                      
                 
              //  </td>
           //    </tr>
       //   )
        //            }

    })}
    </table>
    </Styles>
    {console.log(v)}
   
    </div>
    )
 // }
 // else{
 // return ('tope')
 // }
//}
  }

export default Nettest;


