import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "title",
    headerName: "標題",
    width: 300,
    editable: true,
  },
  {
    field: "location",
    headerName: "地點",
    width: 350,
    editable: true,
  },
  {
    field: "cost",
    headerName: "票價",
    type: "number",
    width: 500,
    editable: true,
  },
];

export default function DataGridDemo(props) {
  const { tableData } = props;

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
  );
}
