import {
  Modal,
  Box,
  Typography,
  Grid2,
  Slider,
  Button,
  Chip,
} from "@mui/material";
//https://mui.com/x/react-date-pickers/date-picker/
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useEffect, useState } from "react";
import axios from "axios";
import {  useSnackbar } from 'notistack';
import { LoadingButton } from '@mui/lab';


export default function BookingModal({ handleClose, modalState }) {
  const { id } = modalState;

  const { enqueueSnackbar } = useSnackbar();

  const username = localStorage.getItem("username");

  const [bookingState, setBookingState] = useState({
    selectedTime: "",
    selectedDate: "",
    selectedSeats: 0,
  });

  const [bookedTimeSlots , setbookedTimeSlots] = useState([])
  const [isLoading,setIsLoading ] = useState(false)

  useEffect( () => {
    setBookingState({
      selectedTime: "",
      selectedDate: "",
      selectedSeats: 0,
    })
  },[])
  

  const handleSliderChange = (event) => {
    setBookingState({
      ...bookingState,
      selectedSeats: event.target.value,
    });
  };

  const handleChipClick = (eachTime) => {
    setBookingState({
      ...bookingState,
      selectedTime: eachTime,
    });
  };

  const handleDateChange = (event) => {

    const day = new Date(event).getDate();
    const year = new Date(event).getFullYear();
    const month = new Date(event).getMonth() + 1;

    const selectedDate = `${day}-${month}-${year}`;

    setBookingState({
      ...bookingState,
      selectedDate,
    });

    getBookingSlots(selectedDate)

  };

  const handleBooking = async () => {
    setIsLoading(true);
    const { selectedDate, selectedTime, selectedSeats } = bookingState;
    if (
      username &&
      id &&
      selectedDate &&
      selectedTime &&
      selectedSeats
    ) {
      const response = await axios.post(
        "https://fsd6061we-t-node.onrender.com/create-booking",
        {
          username,
          hotelId: id,
          selectedDate,
          selectedTime,
          selectedSeats,
        }
      );
      if(response.data === 'Booking created'){
        setBookingState({})
        handleClose();
        enqueueSnackbar('Booking Created successfully!', { variant:'success' });
        setIsLoading(false);
      }
    }
  };


  const getBookingSlots = async (selectedDate) => {
      try {
        const response =   await axios.get(`https://fsd6061we-t-node.onrender.com/getBookingSlots/${id}/${selectedDate}`);
        console.log(response.data,'response response response');
        if(response?.data?.length){
          const selectedtimes = response?.data.map(ele => ele.selectedTime);
          setbookedTimeSlots(selectedtimes)
        }
      } catch (error) {
      }
  }


  return (
    <Modal
      open={modalState}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Grid2
          container
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={2}
        >
          <Grid2 width={"100%"} textAlign={"center"}>
            <Typography
              style={{ background: "black" }}
              color="white"
              variant="h5"
            >
              Select an Offer or Deal
            </Typography>
          </Grid2>
          <Grid2 width={"60%"} textAlign={"center"}>
            <Typography variant="h6">Select Seats</Typography>
            <Slider
              defaultValue={0}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={20}
              onChange={handleSliderChange}
            />
          </Grid2>

          <Grid2>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker onChange={handleDateChange} label="Select Date" />
              </DemoContainer>
            </LocalizationProvider>
          </Grid2>

          <Grid2
            container
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography variant="h6">Select Time</Typography>
            <Grid2
              paddingLeft={4}
              paddingRight={4}
              container
              justifyContent={"center"}
              alignItems={"center"}
            >
              {timeSlots.map((eachTime) => {
                return (
                  <Grid2>
                    <Chip  
                      color={ bookingState.selectedTime === eachTime  ? "success" : "default" }
                      onClick={() => handleChipClick(eachTime)}
                      label={eachTime}
                      key={eachTime}
                      clickable
                      disabled={bookedTimeSlots.includes(eachTime)}
                    />
                  </Grid2>
                );
              })}
            </Grid2>
          </Grid2>

          <Grid2 paddingBottom={4}>
            <LoadingButton  loading={isLoading} variant="contained" color="primary" onClick={handleBooking}>
             {'Make a Booking'}
            </LoadingButton>
          </Grid2>
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
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
};

const timeSlots = [
  "10 AM - 11 AM",
  "11 AM - 12 PM",
  "12 PM - 1 PM",
  "1 PM - 2 PM",
  "7 PM - 8 PM",
  "8 PM - 9 PM",
  "9 PM - 10 PM",
  "10 PM - 11 PM",
];
