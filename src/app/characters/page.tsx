"use client";
import { character } from "@/api/characters";
import { Container, Button, Pagination, Grid, Box } from "@mui/material";
import { useEffect, useState } from "react";
import Header from "@/components/Header/Header";
import Link from "next/link";
import CardComponent from "@/components/Card/CardComponent";
import { TypeCharacter } from "@/interface/characters.interface";

const Characters: React.FC<{}> = () => {
  const [allCharacters, setAllCharacters] = useState<TypeCharacter[] | null>(
    []
  );
  const [page, setPage] = useState(1);

  useEffect(() => {
    character
      .getAll({ page: page })
      .then((result) => {
        setAllCharacters(result.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
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
      <div>
        {allCharacters?.length !== 0 ? (
          <Grid container spacing={2} mt={5}>
            {allCharacters!.map((character) => (
              <Grid item xs={3} key={character.id}>
                <CardComponent
                  id={character.id}
                  name={character.name}
                  image={character.image}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <div>No exixten datos</div>
        )}
      </div>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        <Pagination count={10} page={page} onChange={handleChange} />
      </Box>
    </Container>
  );
};

export default Characters;
