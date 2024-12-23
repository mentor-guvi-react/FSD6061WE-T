import {
  Grid2,
  AppBar,
  Autocomplete,
  TextField,
  FormControl,
  InputLabel,
  InputAdornment,
  Input,
  Button,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import HeaderSubText from "./HeaderSubText";
import RegistrationModal from "./RegistrationModal";
import BookingModal from "./UserBookingModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar({setSearchedHotel}) {
  const [registrationModalOpen, setRegistrationModalOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [modalType, setModalType] = useState("register");

  const navigate = useNavigate();

  const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.removeItem("username");
    window.location.reload();
  };

  return (
    <Grid2 container>
      <AppBar position="static" color="transparent">
        <Grid2
          container
          justifyContent={"center"}
          alignItems={"center"}
          gap={2}
          padding={1}
        >
          <Grid2 item>
            <img src="https://www.guvi.in/web-build/images/guvi-logo.8eeef9e2027d374479531095b012a87e.svg" />
          </Grid2>

          <Grid2 item>
            <Autocomplete
              disablePortal
              options={Locations}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Locations" />
              )}
              onChange={(e) => {
                navigate("/" + e.target.innerHTML);
              }}
            />
          </Grid2>

          <Grid2 item>
            <FormControl variant="filled" style={{ width: 330 }}>
              <Input
                onChange={(e) => setSearchedHotel(e.target.value)}
                id="input-with-icon-adornment"
                placeholder="Search for Restaurants"
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <Button variant="contained">Search</Button>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid2>

          <Grid2 item>
            {username ? (
              <Grid2 container gap={2}>
                <Button
                  variant="contained"
                  onClick={() => setBookingModalOpen(true)}
                >
                  My Booking
                </Button>
                <Button variant="contained" onClick={handleLogout}>
                  Logout
                </Button>
              </Grid2>
            ) : (
              <Grid2 container gap={2}>
                <Button
                  variant="contained"
                  onClick={() => {
                    setRegistrationModalOpen(true);
                    setModalType("login");
                  }}
                >
                  Sign In
                </Button>
                <Button
                  variant="contained"
                  onClick={() => {
                    setRegistrationModalOpen(true);
                    setModalType("register");
                  }}
                >
                  Sign Up
                </Button>
              </Grid2>
            )}
          </Grid2>
        </Grid2>

        <HeaderSubText></HeaderSubText>
      </AppBar>

      <RegistrationModal
        open={registrationModalOpen}
        handleClose={() => {
          setRegistrationModalOpen(false);
        }}
        modalType={modalType}
      />
      {bookingModalOpen && <BookingModal
        open={bookingModalOpen}
        handleClose={() => {
          setBookingModalOpen(false);
        }}
      ></BookingModal>}
    </Grid2>
  );
}

const Locations = [
  { label: "Chennai", id: 456 },
  { label: "Delhi", id: 123 },
  { label: "Mumbai", id: 987 },
];
