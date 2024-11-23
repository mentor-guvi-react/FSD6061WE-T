import {
  Modal,
  Box,
  Typography,
  Grid2,
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";

export default function RegistrationModal({ open, handleClose, modalType }) {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
    email: "",
    phonenumber: "",
    address: "",
  });

//   console.log(formState,'formState formState');

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Grid2
          container
          gap={1}
          justifyContent={"center"}
          alignItems={"center"}
          direction={"column"}
        >
          <Grid2>
            <Typography variant="h4">
              {modalType === "register" ? `Sign Up` : `Sign In`}
            </Typography>
          </Grid2>
        </Grid2>

        <Grid2 container gap={1} direction={"column"}>
          <Grid2>
            <TextField
              id="username"
              label="username"
              variant="outlined"
              fullWidth
              placeholder="username"
              onChange={(e) =>
                setFormState({
                  ...formState,
                  username: e.target.value,
                })
              }
            />
          </Grid2>

          <Grid2>
            <TextField
              id="password"
              label="password"
              variant="outlined"
              fullWidth
              placeholder="password"
              onChange={(e) =>
                setFormState({
                  ...formState,
                  password: e.target.value,
                })
              }
            />
          </Grid2>

          {modalType === "register" && (
            <>
              <Grid2>
                <TextField
                  id="email"
                  label="email"
                  variant="outlined"
                  fullWidth
                  placeholder="email"
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      email: e.target.value,
                    })
                  }
                />
              </Grid2>

              <Grid2>
                <TextField
                  id="phonenumber"
                  label="phonenumber"
                  variant="outlined"
                  fullWidth
                  placeholder="phonenumber"
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      phonenumber: e.target.value,
                    })
                  }
                />
              </Grid2>

              <Grid2>
                <TextField
                  id="address"
                  label="address"
                  variant="outlined"
                  fullWidth
                  placeholder="address"
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      address: e.target.value,
                    })
                  }
                />
              </Grid2>
            </>
          )}

          <Button variant="contained">
            {modalType === "register" ? `Sign Up` : `Sign In`}
          </Button>
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
