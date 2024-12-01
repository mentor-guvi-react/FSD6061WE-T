import { Card, CardContent, Grid2, Typography, CardMedia } from "@mui/material";

import {useParams} from 'react-router-dom'
import BookingModal from "./BookingModal";
import { useState } from "react";

export default function HotelCards({ selectedTags,  hotelData ,sort,searchedHotel}) {
  const username = localStorage.getItem("username");
  const [modalState,setModalState] =  useState(false);

  const {location} = useParams()


  
  let restaurentInfo = []
  if(location?.toLowerCase()){
    restaurentInfo = hotelData[location?.toLowerCase()]
  }
  else {
    restaurentInfo = hotelData['delhi']
  }

  if(searchedHotel){    
    restaurentInfo = restaurentInfo.filter(eachHotel => {
        console.log(searchedHotel,'searchedHotel',eachHotel.name);
        if(eachHotel.name.toLowerCase().includes(searchedHotel.toLowerCase()) ){
          return true
        }
        return false
      })
  }


  if(selectedTags?.length){
    restaurentInfo = restaurentInfo.filter(eachHotel => {
      let matchFound = false;
      eachHotel.tags.forEach(ele => {
        if(selectedTags.includes(ele)){
          matchFound = true;
        }
      })
      return matchFound
    })
  }
  console.log(restaurentInfo,'restaurentInfo restaurentInfo');


  const handleBookingModelOpen = (eachHotel) => {
    if(username){
      setModalState(eachHotel);
    }
  }

  const handleRatingSort = (restaurentInfo) => {
    restaurentInfo.sort( (a,b) => a.ratings > b.ratings ? -1 : 1)
  }


  if(sort ===  'Rating' ){
      handleRatingSort(restaurentInfo)
  }
  else if(sort === 'Price High To Low'){
    restaurentInfo.sort( (a,b) => a.price > b.price ? -1 : 1)
  }
  else if(sort === 'Price Low To High'){
    restaurentInfo.sort( (a,b) => a.price > b.price ? 1 : -1)
  }



  return (
    <>
     <Grid2 container gap={1}>
      {restaurentInfo.map((eachHotel) => {
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
