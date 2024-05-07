import "./styles.css";
import DataGridDemo from "./DataGridDemo";
import React, { useState, useEffect } from "react";

export default function App() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch(
      "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6",
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("獲取資料失敗");
        }
        return response.json();
      })
      .then((data) => {
        const formattedData = data.map((item, index) => ({
          id: index,
          title: item.title,
          location: item.showInfo[0].location,
          cost: item.showInfo[0].price,
        }));
        setTableData(formattedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <DataGridDemo tableData={tableData} />
    </div>
  );
}
