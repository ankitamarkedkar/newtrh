import React from "react";
import Header from "./Header";
import Grid from "@material-ui/core/Grid";
import { Container, Paper } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import "../Components/Style.css";
export default function Blogdetail() {
  return (
    <div>
      <Header />
      <Box className="blogdetailpage">
        <Container>
          <Grid Container spacing={3}>
            <Grid item xs={12}>
              <Paper elevation={3} className="blogimage">
                <img src="images/blogbanner.jpg" alt="blogimage" />
              </Paper>
              <Typography>
                <h1>HOW TO DECIDE TECHNOLOGY TO USE FOR YOUR START UP</h1>
              </Typography>
              <Typography>
                <span>
                  <i className="fa fa-clock-o"></i>12/07/2022
                </span>
              </Typography>
              <br />
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </Typography>
              <br />
              <br />
              <Typography className="blogquote">
                <i className="fa fa-quote-left"></i>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
