"use client";
import { Container, Typography, Box, Grid } from "@mui/material";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { character } from "@/api/characters";
import { TypeCharacter } from "@/interface/characters.interface";

const DetailsCharacter = () => {
  const [idCharacter, setIdCharacters] = useState<TypeCharacter>();
  const data = useParams();

  useEffect(() => {
    character
      .getById({ id: Number(data.id) })
      .then((result) => {
        setIdCharacters(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container
      sx={{
        display: "felx",
        justifyContent: "center",
        alignItems: "center",
        width: "60%"
      }}
    >
      <Box
        sx={{
          display: "felx",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        <Grid
          container
          display="flex"
          flexDirection="column"
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ height: "100%", mt: "20px" }}
        >
          <Grid
            item
            xs={6}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "300px",
              width: "500px"
            }}
          >
            <img
              src={idCharacter?.image}
              alt="Personaje"
              className="card-img"
            />
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "300px",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                mb: 2,
                color: "#c8fa5f",
                marginTop: "20px"
              }}
            >
              {idCharacter?.name}
            </Typography>
            <Typography sx={{
                marginBottom: "20px",
                textAlign: "justify"
            }}>
              This character was created on {idCharacter?.created}. Within the
              series {idCharacter?.name} is {idCharacter?.species}, its gender
              is {idCharacter?.gender}, its current status within the program is{" "}
              {idCharacter?.status}.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default DetailsCharacter;
