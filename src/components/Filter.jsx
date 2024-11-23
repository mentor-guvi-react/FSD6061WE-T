import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function Filter() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Quick Filter
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {quickfilter.map((element) => {
              return (
                <FormControlLabel control={<Checkbox />} label={element} />
              );
            })}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Cuisines
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {cuisines.map((element) => {
              return (
                <FormControlLabel control={<Checkbox />} label={element} />
              );
            })}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Tags
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {tags.map((element) => {
              return (
                <FormControlLabel control={<Checkbox />} label={element} />
              );
            })}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}


const quickfilter = ["Pure Veg", "Outdoor Seating"];

const cuisines = [
  "North Indian",
  "South Indian",
  "Chinese",
  "Italian",
  "Mexican",
  "Continental",
  "Thai",
  "American",
  "Mughlai",
  "Biryani",
  "Bengali",
  "Punjabi",
  "Rajasthani",
  "Maharashtrian",
  "Gujarati",
  "Goan",
  "Kashmiri",
  "Hyderabadi",
  "Kerala",
  "Andhra",
  "Awadhi",
  "Chettinad",
  "Malwani",
  "Mangalorean",
  "Konkani",
];

const tags = ["Buffet", "Happy Hours"];
