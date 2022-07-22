import React from "react";
import Header from "./Header";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";

export default function aboutus() {
  return (
    <div>
      <Header />

      <Box className="aboutustrh">
        <Container>
          <Typography className="abouttrh">
            <h1 class="pseudo_border">About Us</h1>
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} lg={12}>
              <Typography className="texttrh">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </Grid>
          </Grid>
          <br />
          <br />
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <Typography className="trhabout">
                <img src="images/mission.png" alt="imagetrh" />
                <Typography className="mistrh">Mission</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
              </Typography>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Typography className="trhabout">
                <img src="images/vision.png" alt="imagetrh" />

                <Typography className="mistrh">Vision</Typography>

                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
              </Typography>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Typography className="trhabout">
                <img src="images/values.png" alt="imagetrh" />

                <Typography className="mistrh">Vision</Typography>

                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
