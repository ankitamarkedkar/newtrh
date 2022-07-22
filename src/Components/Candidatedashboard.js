import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import "../Components/Style.css";
import { Button, Container, Typography } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Avatar from "@material-ui/core/Avatar";

import "../Components/Style.css";
import "../Components/Calender.css";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Calendar from "react-calendar";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Buttonresuable from "./Buttonresuable";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";

//import Badge from '@material-ui/core/Badge';

export default function Candidatedashboard() {
  const [openmodal, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClosemodal = () => setOpen(false);

  const [openschedule, setOpenschedule] = React.useState(false);
  const handleOpenschedule = () => setOpenschedule(true);
  const handleCloseschedule = () => setOpenschedule(false);

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    console.log(date);
    setSelectedDate(date);
  };

  const [selectedDate1, setSelectedDate1] = useState(new Date());

  const handleDateChange1 = (date) => {
    console.log(date);
    setSelectedDate1(date);
  };
  const [selectedDate2, setSelectedDate2] = useState(new Date());

  const handleDateChange2 = (date) => {
    console.log(date);
    setSelectedDate2(date);
  };
  const [selectedDate3, setSelectedDate3] = useState(new Date());

  const handleDateChange3 = (date) => {
    console.log(date);
    setSelectedDate3(date);
  };

  const [value, onChange] = useState(new Date());
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="candid">
      <Box className="headcandid">
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={6} lg={4}>
              <Link href="/">
                <img src="images/logo.png" alt="imagetrh" />
              </Link>
            </Grid>
            <Grid item xs={4} lg={4} className="dashcandid">
              <Button variant="contained" color="primary" className="dash">
                <Link href="/Candidatedashboard"> Dashboard</Link>
              </Button>
              <Button color="secondary">
                <Link href="/Candidateprofile"> Profile</Link>
              </Button>
            </Grid>
            <Grid item xs={6} lg={4}>
              <Tooltip title="Account settings" className="dashaccount">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="https://v4.mui.com/static/images/avatar/1.jpg"
                  />
                  <i className="fa fa-angle-down"></i>
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Link href="/Candidateprofile">Profile</Link>
        </MenuItem>

        <MenuItem>
          <Link href="/"> Logout</Link>
        </MenuItem>
      </Menu>
      <Box className="interview">
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={6} lg={4}>
              <h2>
                Interview Slots
                <br />
                <span className="free">
                  <Link href="/Signup" underline="none">
                    Create New Account{" "}
                  </Link>
                </span>
              </h2>
            </Grid>
            <Grid item xs={6} lg={8}>
              <Button variant="contained" color="primary" className="dash">
                <Link href="/"> New Report</Link>
              </Button>
              <Button variant="contained" color="secondary" className="dash">
                <Link href="#"> Create</Link>
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box className="dashboard">
        <Container>
          <Grid container spacing={3} className="slots">
            <Grid item xs={12} md={4}>
              <Typography className="interslot">Interview Slots</Typography>
              <Calendar onChange={onChange} value={value} />
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography className="interslot">Interview History</Typography>
              <Typography className="typo">
                <img src="images/image-1.jpg" alt="candidate" />
                <h3>
                  Brad Simmons
                  <br />
                  <span>HTML, JS, ReactJS</span>
                </h3>
              </Typography>
              <Typography className="typo">
                <img src="images/image-3.jpg" alt="candidate" />
                <h3>
                  Jessie Clarcson
                  <br />
                  <span>C#, ASP.NET, MS SQL</span>
                </h3>
              </Typography>
              <Typography className="typo">
                <img src="images/image-1.jpg" alt="candidate" />
                <h3>
                  Brad Simmons
                  <br />
                  <span>HTML, JS, ReactJS</span>
                </h3>
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography className="interslot">Interview Results</Typography>
              <Typography className="typo">
                <Button variant="selected">Selected</Button>
                <h3>
                  Brad Simmons
                  <br />
                  <span>HTML, JS, ReactJS</span>
                </h3>
              </Typography>
              <Typography className="typo">
                <Button variant="selected">Selected</Button>
                <h3>
                  Jessie Clarcson
                  <br />
                  <span>C#, ASP.NET, MS SQL</span>
                </h3>
              </Typography>
              <Typography className="typo">
                <Button variant="selected">Selected</Button>
                <h3>
                  Brad Simmons
                  <br />
                  <span>HTML, JS, ReactJS</span>
                </h3>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box className="dashslot">
        <Container>
          <h2>Schedule Interview</h2>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} className="candash">
                <Grid container spacing={2}>
                  <Grid item xs={6} md={6}>
                    <h4>Announcement</h4>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        value={selectedDate}
                        onChange={handleDateChange}
                      />
                    </MuiPickersUtilsProvider>
                  </Grid>
                </Grid>
                <div>
                  <Typography className="candashtypo">
                    <h3>
                      Outing schedule for every department
                      <br />
                      <span>5 Minutes ago</span>
                    </h3>
                    <img src="images/pin.png" alt="" />
                    <Link href="#">...</Link>
                  </Typography>
                  <Typography className="candashtypo">
                    <h3>
                      Meeting HR Department
                      <br />
                      <span>Yesterday, 12:30 PM</span>
                    </h3>
                    <img src="images/pin.png" alt="" />
                    <Link href="#">...</Link>
                  </Typography>
                  <Typography className="candashtypo">
                    <h3>
                      IT Department need two more talents for UX/UI Designer
                      position
                      <br />
                      <span>Yesterday, 09:15 AM</span>
                    </h3>
                    <img src="images/pin.png" alt="" />
                    <Link href="#">...</Link>
                  </Typography>
                </div>

                <Typography className="schedule">
                  <Button onClick={handleOpen} className="announcebutton">
                    See All Announcement
                  </Button>
                </Typography>
              </Paper>
            </Grid>
            <Modal
              open={openmodal}
              onClose={handleClosemodal}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className="modalannounce">
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Announcement{" "}
                </Typography>
                <br />
                <TextField
                  id=""
                  label="Announcement Title"
                  variant="outlined"
                />
                <br />
                <Typography className="calendermui">
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      value={selectedDate1}
                      onChange={handleDateChange1}
                    />
                  </MuiPickersUtilsProvider>
                </Typography>
                <br />
                <Buttonresuable label="Submit" />
              </Box>
            </Modal>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} className="candash">
                <Grid container spacing={2}>
                  <Grid item xs={6} md={6}>
                    <h4>Upcoming Schedule</h4>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        value={selectedDate2}
                        onChange={handleDateChange2}
                      />
                    </MuiPickersUtilsProvider>
                  </Grid>
                </Grid>
                <div>
                  <h5>Priority</h5>
                  <Typography className="candashtypo">
                    <h3>
                      Review candidate applications
                      <br />
                      <span>Today - 11.30 AM</span>
                    </h3>
                    <Link href="#">...</Link>
                  </Typography>

                  <h5>Other</h5>
                  <Typography className="candashtypo">
                    <h3>
                      Interview with candidates
                      <br />
                      <span>Today - 10.30 AM</span>
                    </h3>
                    <Link href="#">...</Link>
                  </Typography>
                </div>
                <Typography className="schedule">
                  <Button
                    onClick={handleOpenschedule}
                    className="announcebutton"
                  >
                    Create a New Schedule
                  </Button>
                </Typography>
                <Modal
                  open={openschedule}
                  onClose={handleCloseschedule}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box className="modalannounce">
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Schedule
                    </Typography>
                    <br />
                    <TextField
                      id=""
                      label="Announcement Title"
                      variant="outlined"
                    />
                    <br />
                    <Typography className="calendermui">
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                          value={selectedDate3}
                          onChange={handleDateChange3}
                        />
                      </MuiPickersUtilsProvider>
                    </Typography>
                    <br />
                    <Buttonresuable label="Submit" />
                  </Box>
                </Modal>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box className="Pb-50">
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <img src="images/comment.png" alt="comment" />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl variant="standard" className="commentform">
                <label>Feedback Box</label>
                <br />
                <TextareaAutosize
                  placeholder="Give Feedback Here"
                  className="textcom"
                />
                <br />
                <br />
                <Buttonresuable label="Send Message" />
              </FormControl>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
