"use client";
import {
  Container,
  Button,
  Pagination,
  Grid,
  Box,
  Typography,
} from "@mui/material";
import Header from "@/components/Header/Header";
import Link from "next/link";

const Home: React.FC<{}> = () => {
  return (
    <Container maxWidth="xl">
      <Header
        title="Prueba Técnica"
        description="Desarrollar una aplicación web utilizando React.js con Next.js, Material-UI (MUI), SASS y
        TypeScript"
        element={
          <Link href="/learnmore">
            <Button fullWidth variant="contained">
              Test specifications
            </Button>
          </Link>
        }
      />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ height: "100%", mt: "20px" }}
      >
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "300px"
          }}
        >
          <div style={{
            width: "400px"}}>
            <Typography variant="h4" style={{
              marginBottom: "20px",
              color: "#c8fa5f",
              fontWeight: "bold"
            }}>WELCOME!</Typography>
            <Typography>
              PruebaTecnica is a website that contains some functionalities
              described in the about of this page, we hope that it meets the
              expectations
            </Typography>
          </div>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "300px"
          }}
        >
          <div style={{
            width: "400px",
            background: "#FFF",
            padding: "20px",
            borderRadius: "5px"
          }}>
            <Typography variant="h6" style={{ color: "#000",
          fontWeight: "bold",
          marginBottom: "20px"}}>TEST</Typography>
            <Typography style={{marginBottom: "20px", color: "#000"}}>
              Below is the functionality of consuming a REST API, press the
              button.
            </Typography>
            <Link href="/characters">
              <Button fullWidth variant="contained">Test Get</Button>
            </Link>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
