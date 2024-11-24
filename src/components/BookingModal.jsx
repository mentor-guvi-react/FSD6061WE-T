import {
  Modal,
  Box,
  Typography,
  Grid2,
  TextField,
  Button,
} from "@mui/material";

export default function BookingModal({ handleClose, modalState }) {
    const {id} = modalState;
    console.log(id,'id id id');
    
  return (
    <Modal
      open={modalState}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Grid2>
          <Typography variant="h4">Book a Table</Typography>
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
  //   border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};
