import React from "react";
import { Box, Button } from "@mui/material";

const FilterBar = ({ setFilter }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
      <Button variant="contained" onClick={() => setFilter("all")}>
        All Tasks
      </Button>
      <Button variant="outlined" onClick={() => setFilter("completed")}>
        Completed
      </Button>
      <Button variant="outlined" onClick={() => setFilter("pending")}>
        Pending
      </Button>
      <Button variant="outlined" onClick={() => setFilter("overdue")}>
        Overdue
      </Button>
    </Box>
  );
};

export default FilterBar;
