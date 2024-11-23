import { Grid2 } from "@mui/material";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Filter from "./Filter";
import { useState } from "react";

import {useParams} from "react-router-dom";

export default function HotelPage() {
  const [sort, setSort] = useState("Rating");
    // const {location } = useParams();

    console.log(window.location.pathname,'window.location');
    
    

  return (
    <Grid2
      container
      display={"flex"}
      flexDirection={"row"}
      gap={2}
      width={"100%"}
      marginTop={1}
    >
      <Grid2 width={"25%"}>
        <Filter />
      </Grid2>
      <Grid2 container direction={"column"} spacing={2} width={"65%"}>
        <Grid2 container>
          <Grid2>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
              <Link underline="hover" color="inherit">
                Location
              </Link>
              <Link underline="hover" color="inherit">
                Location Detail
              </Link>
              <Typography sx={{ color: "text.primary" }}>Address</Typography>
            </Breadcrumbs>
          </Grid2>
        </Grid2>

        <Grid2 container justifyContent={"space-between"} alignItems={"center"}>
          <Grid2>Best Restaurants Near Me in Chennai(8483)</Grid2>

          <Grid2
            container
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"row"}
            width={"50%"}
          >
            <Grid2>Sort by</Grid2>

            <Grid2 width={"30%"}>
              <FormControl fullWidth>
                {/* <InputLabel id="demo-simple-select-label">Popuarity</InputLabel> */}
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={sort}
                  label="Sort"
                  onChange={(event) => {
                    setSort(event.target.value);
                  }}
                >
                  {sortByData.map((element) => {
                    return (
                      <MenuItem value={element.value}>{element.name}</MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </Grid2>
  );
}

const sortByData = [
  { value: "Rating", name: "Rating" },
  { value: "Price High To Low", name: "Price High To Low" },
  { value: "Price Low To High", name: "Price Low To High" },
];
