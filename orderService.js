import React from 'react';
import { ExportJsonCsv } from "react-export-json-csv";
function Orders() {
  const headers = [
    {
      key: "id",
      name: "ID",
    },
    {
      key: "fname",
      name: "First Name",
    },
  ];

  const data = [
    {
      id: "1",
      fname: "John",
    },
    {
      id: "2",
      fname: "Doe",
    },
  ];
  return (
    <div>
      <ExportJsonCsv className='' fileTitle='ordersdata' headers={headers} items={data}>
        Export
      </ExportJsonCsv>
    </div>
  );
}
export default Orders;
