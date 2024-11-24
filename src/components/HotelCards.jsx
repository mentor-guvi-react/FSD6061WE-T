import { Card, CardContent, Grid2, Typography, CardMedia } from "@mui/material";

import {useParams} from 'react-router-dom'
import BookingModal from "./BookingModal";
import { useState } from "react";

export default function HotelCards({ hotelData }) {

  const [modalState,setModalState] =  useState(false);

  const {location} = useParams()
  const locationInformation = hotelData[location.toLowerCase()] || [];

  const handleBookingModelOpen = (eachHotel) => {
    setModalState(eachHotel);
  }

  return (
    <>
     <Grid2 container gap={1}>
      {locationInformation.map((eachHotel) => {
        const { id, name, location, price, tags, priceDetail, ratings, image } =
          eachHotel;
        return (
          <Grid2 onClick={() => handleBookingModelOpen(eachHotel)} id={eachHotel.id} style={{ cursor:"pointer" }}>
            <Card sx={{ maxWidth: 345 }}>
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    position: "absolute",
                    backgroundColor: "rgba(192, 226, 21, 0.93)",
                    width: 50,
                    height: 25,
                    borderRadius: 20,
                    textAlign: "center",
                    right: 10,
                    top: 10,
                    color: "white",
                  }}
                >
                {ratings}
                </div>
                <CardMedia sx={{ height: 250 }} image={image} title={name} />
              </div>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {name}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {location}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {priceDetail} , {tags.map((e) => e + " ")}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        );
      })}
    </Grid2>

      <BookingModal modalState={modalState} handleClose={e => setModalState(false)}>
      </BookingModal>
    </>
   
  );
}
