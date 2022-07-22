import React from "react";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import "../Components/Style.css";

export default function Copyrightfooter() {
  return (
    <Box className="trhcopyfooter">
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <p>© 2022 The Rapid Hire Pvt. Ltd All Rights Reserved.</p>
          </Grid>
          <Grid item xs={12} md={6}>
            <ul>
              <li>
                <i className="fa fa-facebook"></i>
              </li>
              <li>
                <i className="fa fa-instagram"></i>
              </li>
              <li>
                <i className="fa fa-linkedin"></i>
              </li>
              <li>
                <i className="fa fa-twitter"></i>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
