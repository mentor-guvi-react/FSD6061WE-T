import {
  Modal,
  Box,
  Typography,
  Grid2,
  TextField,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {  useSnackbar } from 'notistack';

export default function UserBookingModal({ handleClose, open }) {
  const [bookingData, setBookingData] = useState({});

  const username = localStorage.getItem("username");
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    fetchBookingDetail();
  }, []);

  const fetchBookingDetail = async () => {
    if (username) {
      const response = await axios.get(
        "https://fsd6061we-t-node.onrender.com/bookingDetails/" + username
      );
      if (response?.data) {
        setBookingData(response?.data);
      }
    }
  };

  const handleCancel = async (cancelHotel) => {
    console.log(cancelHotel,'cancelHotel');
    try {
       const response = await axios.put('https://fsd6061we-t-node.onrender.com/cancelBooking/'+cancelHotel._id);
       console.log(response.data,'response');
       if(response.data === 'Booking cancelled'){
        enqueueSnackbar('Booking Cancelled successfully!', { variant:'error' });
       }
    } catch (error) {
      
    }
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Grid2>
          <Typography variant="h4">Your Booking Details</Typography>
        </Grid2>

        <Grid2>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
              <TableHead>
                <TableRow>
                  <TableCell> Hotel ID </TableCell>
                  <TableCell align="right"> Date </TableCell>
                  <TableCell align="right"> Seats </TableCell>
                  <TableCell align="right"> Time </TableCell>
                  <TableCell align="right"> Status </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {bookingData?.length && bookingData?.map((row) => (
                  <TableRow key={row.hotelId}>
                    <TableCell component="th" scope="row">
                      {row.hotelId}
                    </TableCell>
                    <TableCell align="right">{row.selectedDate}</TableCell>
                    <TableCell align="right">{row.selectedSeats}</TableCell>
                    <TableCell align="right">{row.selectedTime}</TableCell>
                    <TableCell align="right">
                      <Grid2>
                        <Button variant="contained" color="error" onClick={e => {handleCancel(row)}}>
                         {row.isCancelled ? 'Cancelled' :  "Cancel"}
                        </Button>
                      </Grid2>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid2>
      </Box>
    </Modal>
  );
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  //   border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};
