"use client";
import { Box, Divider, Grid, Typography } from "@mui/material";

type HeaderProps = {
  title: string;
  description: string;
  element?: React.ReactNode | null;
};

const Header: React.FC<HeaderProps> = ({ title, description, element }) => {
  return (
    <div>
      <Box sx={{ width: "100%", height: "350px" }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ height: "100%" }}
        >
          <Grid item xs={8}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              sx={{ height: "100%" }}
            >
              <Grid item>
                <Typography variant="h1">{title}</Typography>
              </Grid>
              <Grid sx={{ mt: 1 }} item>
                <Typography>{description}</Typography>
              </Grid>
              {element !== undefined && (
                <Grid sx={{ mt: 2 }} item>
                  {element}
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Divider />
    </div>
  );
};

export default Header;
