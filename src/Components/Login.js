import React from "react";
import { Box, Typography } from "@material-ui/core";
import { Grid, Container } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Buttonresuable from "./Buttonresuable";

export default function Hrpersonaldetail() {
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
      <Box className="loginform">
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={3}></Grid>
            <Grid item xs={12} lg={6}>
              <Paper elevation={3} className="hrprof">
                <Typography className="loginhead">Welcome to Login </Typography>
                <br />
                <br />
                <FormControl variant="standard">
                  <TextField
                    id=""
                    label="Enter Your Email"
                    variant="outlined"
                  />

                  <br />
                  <br />
                  <Buttonresuable label="Get OTP" />
                </FormControl>
                <br />
                <br />

                <Typography className="otp">
                  Did’nt recevie OTP?{" "}
                  <Link href="#" underline="none">
                    Resend
                  </Link>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} lg={3}></Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
