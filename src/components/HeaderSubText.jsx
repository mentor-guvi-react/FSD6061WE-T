import { Button, Grid2 } from "@mui/material";

export default function HeaderSubText() {
  return (
    <Grid2
      container
      justifyContent={"center"}
      gap={10}
      style={{ borderTop: "1px solid #7d79795c" }}
    >
      <Grid2>
        <Button>Home</Button>
      </Grid2>

      <Grid2>
        <Button>Book A Table</Button>
      </Grid2>

      <Grid2>
        <Button>Blog</Button>
      </Grid2>
    </Grid2>
  );
}
