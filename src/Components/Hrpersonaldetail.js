import React from "react";
import { Box } from "@material-ui/core";
import { Grid, Container } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import Link from "@material-ui/core/Link";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Buttonresuable from "./Buttonresuable";

export default function Hrpersonaldetail() {
  return (
    <div>
      <Box className="hrhead">
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={6} lg={6}>
              <h2>
                PERSONAL DETAILS
                <br />
                <span>
                  <Link href="/Login">Sign in to continue</Link>
                </span>
              </h2>
            </Grid>
            <Grid item xs={6} lg={6}>
              <img src="images/hr.png" alt="hr" />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box className="hrsection">
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={3}></Grid>
            <Grid item xs={12} lg={6}>
              <Paper elevation={3} className="hrprof">
                <div className="profileimage">
                  <Avatar alt="Remy Sharp" src="images/image-1.jpg" />
                  <input accept="image/*" id="icon-camera-file" type="file" />
                  <label htmlFor="icon-camera-file">
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                    >
                      <PhotoCamera className="imagenone" />
                    </IconButton>
                  </label>
                  <h4>Profile Upload</h4>
                </div>
                <FormControl variant="standard">
                  <TextField id="" label="Enter Name" variant="outlined" />

                  <TextField
                    id=""
                    label="Enter Email Address"
                    variant="outlined"
                  />

                  <TextField
                    id=""
                    label="Enter Contact No."
                    variant="outlined"
                  />

                  <TextField id="" label="Enter DOB" variant="outlined" />

                  <TextField id="" label="Enter Gender" variant="outlined" />

                  <TextField
                    id=""
                    label="Enter Full Address"
                    variant="outlined"
                  />

                  <TextField
                    id=""
                    label="Enter Pin_code/Zip_code"
                    variant="outlined"
                  />
                  <br />
                  <br />

                  <Link href="/Hrcompanydetail">
                    <Buttonresuable label="Next"></Buttonresuable>
                  </Link>
                </FormControl>
              </Paper>
            </Grid>
            <Grid item xs={12} lg={3}></Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
