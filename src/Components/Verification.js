import React from "react";
import { Box, Typography } from "@material-ui/core";
import { Grid, Container } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

export default function Verification() {
  return (
    <div>
      <Box className="hrhead">
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={6} lg={6}>
              <h2>
                Login
                <br />
                <span>
                  <Link href="/Signup" underline="none">
                    Signup in to continue
                  </Link>
                </span>
              </h2>
            </Grid>
            <Grid item xs={6} lg={6}>
              <img src="images/hr.png" alt="hr" />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box className="veriform">
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={3}></Grid>
            <Grid item xs={12} lg={6}>
              <Paper elevation={3} className="hrprof">
                <Typography className="loginhead">
                  Enter the verification code{" "}
                </Typography>
                <br />
                <br />
                <Typography className="verif">
                  <Typography className="verifyno"></Typography>
                  <Typography className="verifyno"></Typography>
                  <Typography className="verifyno"></Typography>
                  <Typography className="verifyno"></Typography>
                </Typography>
                <br />

                <Button variant="contained" className="account">
                  Get OTP
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12} lg={3}></Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
