import React from "react";
import axios from "axios";
function ItemsList() {
  const getItemsList = () => {
    axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
    axios
      .get(process.env.REACT_APP_SHEET_ID + "/values/Sheet1", {
        params: { key: process.env.REACT_APP_KEY },
      })
      .then((res) => {
        console.log(res.data.values);
      })
      .catch((ex) => {
        console.log(ex);
      });
  };

  return (
    <div>
      <button onClick={getItemsList}>Get Item List</button>
    </div>
  );
}
export default ItemsList;
