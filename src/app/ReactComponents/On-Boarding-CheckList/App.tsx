import * as React from "react";
//import * as React { useState } from 'react';
import { render } from 'react-dom';
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import Button from '@mui/material/Button';
import DTPicker from "./DTPicker";
import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';   
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';   
import { any } from "prop-types";
//import { DateRangePicker } from 'react-dates';
import { GridApi, GridReadyEvent } from "ag-grid-community";

const App = () => {
  //const [gridApi, setGridApi] = React.useState<any | []>([]);
  const [gridColumnApi, setGridColumnApi] = React.useState<any | []>([]);
  const [rowData, setRowData] = React.useState<any | []>([]);
  //const [gridApi, setGridApi] = React.useState<GridApi | undefined>();
  const [gridApi, setGridApi] = React.useState<any | []>();
  //const [gridApi, setFilterModel] = React.useState<any | []>([]);
  const [dataSet] = React.useState([
    { id: 1, eventTimestamp: '2020-10-25T04:34:21Z' },
    { id: 2, eventTimestamp: '2020-04-23T20:21:55Z' },
    { id: 3, eventTimestamp: '2020-05-01T16:16:38Z' },
    { id: 4, eventTimestamp: '2020-11-24T22:10:03Z' },
    { id: 5, eventTimestamp: '2020-08-10T13:52:03Z' },
    { id: 6, eventTimestamp: '2020-10-18T18:49:19Z' },
    { id: 7, eventTimestamp: '2020-11-30T00:51:26Z' },
    { id: 8, eventTimestamp: '2020-03-28T13:30:51Z' },
    { id: 9, eventTimestamp: '2020-12-18T12:39:26Z' },
    { id: 10, eventTimestamp: '2020-03-13T18:39:02Z' },
    { id: 11, eventTimestamp: '2021-02-13T15:03:47Z' },
    { id: 12, eventTimestamp: '2020-03-11T14:03:56Z' },
    { id: 13, eventTimestamp: '2021-01-14T06:38:59Z' },
    { id: 14, eventTimestamp: '2020-08-17T06:50:21Z' },
    { id: 15, eventTimestamp: '2020-04-03T18:34:12Z' },
    { id: 16, eventTimestamp: '2020-08-08T19:21:06Z' },
    { id: 17, eventTimestamp: '2020-10-25T18:24:39Z' },
    { id: 18, eventTimestamp: '2020-03-12T14:45:03Z' },
    { id: 19, eventTimestamp: '2021-01-11T12:45:54Z' },
    { id: 20, eventTimestamp: '2020-03-22T09:37:58Z' },
  ]);

  React.useEffect(() => {
      
    const formattedDates= dataSet.map((data:any) =>{
      return {
        id: data.id,
        eventTimestamp: new Date(data.eventTimestamp)
      };
    });
    console.log("Formatted Dates",formattedDates)
    setRowData(formattedDates);

  }, []);
  
  React.useEffect(() => {
    console.log("gridApi",gridApi);
  });
  const resetAppliedFilters = () => {
    gridApi.setFilterModel(null);
  };
  
  const cols = [
    {
      field: "id",
      headerName: "ID",
      minWidth: 100,
      maxWidth: 150
    },
    {
      field: "eventTimestamp",
      headerName: "Event Timestamp",
      minWidth: 225,
      maxWidth: 300,
      filter: "agDateColumnFilter",
      filterParams: {
        defaultOption: "inRange",
        comparator: function(filterLocalDate:any, cellValue:any) {
          filterLocalDate = new Date(filterLocalDate)
          cellValue = new Date(cellValue)
          let filterBy = filterLocalDate.getTime();
          let filterMe = cellValue.getTime();
          if (filterBy === filterMe) {
            return 0;
          }
          if (filterMe < filterBy) {
            return -1;
          }
          if (filterMe > filterBy) {
            return 1;
          }
          else{return}
        }
      }
    }
  ];
/*const handleGridReady = (event: GridReadyEvent) => {
  setGridApi(event.api);
  setGridColumnApi(event.columnApi);
};**/

 
 
  const onGridReady = (params:any) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
    params.api.addGlobalListener((type:any, event:any) => {
      switch (type) {
        case "filterChanged":
          console.log(event);
          return;
        default:
          return null;
      }
    });
  };

 

  return (
    <div className="App">
      <Button onClick={resetAppliedFilters} variant="outlined">
        Reset Filters
      </Button>
      <hr/>
     
      
      <div
        className="ag-theme-alpine"
        /* style={{ height: 400, width: 600 }}*/
        /**className={"ag-theme-balham"}*/
        style={{ height: "86vh", width: "100%" }}
      >
        <AgGridReact
          onGridReady={onGridReady}
          rowData={rowData}
          rowSelection="multiple"
          defaultColDef={{
            flex: 1,
            minWidth: 100,
            resizable: true,
            sortable: true,
            filter: true,
            filterParams: {
              buttons: ['apply', 'clear', 'reset'],
            },
          }}
          pagination
          columnDefs={cols}
          frameworkComponents={{
            agDateInput: DTPicker
          }}
        />
      </div>
    </div>
  );
        };
export default App;