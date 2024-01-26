"use client";
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Grid,
  Button,
  Typography,
  Stack,
} from "@mui/material";

import Link from "next/link";

const Navbar: React.FC<{}> = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Container maxWidth="xl">
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography>PruebaTecnica</Typography>
              </Grid>
              <Grid item>
                <Stack direction="row" spacing={2}>
                  <Link href="/"><Button variant="outlined">Home</Button></Link>
                  <Link href="/about"><Button>About</Button></Link>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar
