import React, { useState } from "react";
import {
  TextField,
  Paper,
  Pagination,
  Backdrop,
  CircularProgress,
  Button,
} from "@mui/material";
// import Box from "@mui/material/Box";
// import SpeedDial from "@mui/material/SpeedDial";
// import SpeedDialIcon from "@mui/material/SpeedDialIcon";
// import SpeedDialAction from "@mui/material/SpeedDialAction";
// import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
// import SaveIcon from '@mui/icons-material/Save';
// import PrintIcon from '@mui/icons-material/Print';
// import ShareIcon from '@mui/icons-material/Share';

export const Sum = () => {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [third, setThird] = useState(0);
  const [fourth, setFourth] = useState(0);

//   const SimpleBackdrop = () => {
//     const [open, setOpen] = React.useState(false);
//     const handleClose = () => {
//       setOpen(false);
//     };
//     const handleToggle = () => {
//       setOpen(!open);
//     };

    return (
      <div className="sub">
          <TextField
          sx={{ m: 2 }}
          className="text"
          label="First Number"
          variant="outlined"
          onChange={(e) => setFirst(e.target.value)}
        />
        <TextField
          sx={{ m: 2 }}
          className="text"
          label="Second Number"
          variant="outlined"
          onChange={(e) => setSecond(e.target.value)}
        />
        <TextField
          sx={{ m: 2 }}
          className="text"
          label="Third Number"
          variant="outlined"
          onChange={(e) => setThird(e.target.value)}
        />
        <TextField
          sx={{ m: 2 }}
          className="text"
          label="Fourth Number"
          variant="outlined"
          onChange={(e) => setFourth(e.target.value)}
        />
        <Paper variant="outlined">
          {Number(first) + Number(second) + Number(third) + Number(fourth)}
        </Paper>
      </div>
    );
  };
// };
