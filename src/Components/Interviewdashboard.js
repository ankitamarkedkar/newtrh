import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import "../Components/Style.css";
import { Button, Container } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Avatar from "@material-ui/core/Avatar";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import "../Components/Style.css";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Calendar from "react-calendar";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { Rating } from "react-simple-star-rating";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import Buttonresuable from "./Buttonresuable";

const tooltipArray = [
  "Terrible",
  "Terrible+",
  "Bad",
  "Bad+",
  "Average",
  "Average+",
  "Great",
  "Great+",
  "Awesome",
  "Excellent",
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Interviewdashboard() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    console.log(date);
    setSelectedDate(date);
  };

  const [openactivity, setOpenactivity] = React.useState(false);
  const handleOpenactivity = () => setOpenactivity(true);
  const handleCloseactivity = () => setOpenactivity(false);

  const [openweek, setOpenweek] = React.useState(false);
  const handleOpenweek = () => setOpenweek(true);
  const handleCloseweek = () => setOpenweek(false);
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate.number);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [value1, onChange] = useState(new Date());

  return (
    <div>
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
                <Link href="/Interviewdashboard"> Dashboard</Link>
              </Button>
              <Button color="secondary">
                <Link href="/Interviewer"> Profile</Link>
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
              center: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "center", vertical: "top" }}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      >
        <MenuItem>
          <Link href="Interviewer">Profile</Link>
        </MenuItem>

        <MenuItem>
          <Link href="/">Logout</Link>
        </MenuItem>
      </Menu>
      <Box className="interview">
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={6} lg={4}>
              <h2>
                Shortlist Candidate
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
                <Link href="#"> New Report</Link>
              </Button>
              <Button variant="contained" color="secondary" className="dash">
                <Link href="#"> Create</Link>
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box className="interviewerdash">
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={12}>
              <Tabs
                value={value}
                onChange={handleChange}
                className="interviewactivity"
              >
                <Tab label="Activity" {...a11yProps(0)} />
                <Tab label="Calender" {...a11yProps(1)} />
                <Tab label="Review" {...a11yProps(2)} />
              </Tabs>
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <TabPanel value={value} index={0}>
                <Button onClick={handleOpenactivity} className="announcebutton">
                  Activity
                </Button>
                <br />
                <br />
                <Grid container spacing={3}>
                  <Grid item xs={12} lg={6}>
                    <Typography className="interstatus">
                      INTERVIEW EVENT{" "}
                      <span>
                        <i className="fa fa-arrow-right"></i>
                      </span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <Typography className="interavailable">
                      No Interview schedule
                    </Typography>
                  </Grid>
                </Grid>
                <Modal
                  open={openactivity}
                  onClose={handleCloseactivity}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box className="modalannounce">
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Activity
                    </Typography>
                    <br />
                    <Typography className="calendermui">
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                          value={selectedDate}
                          onChange={handleDateChange}
                        />
                      </MuiPickersUtilsProvider>
                    </Typography>

                    <br />
                    <TextField
                      id=""
                      label="Enter Candidate Name"
                      variant="outlined"
                    />
                    <br />
                    <TextField id="" label="Status" variant="outlined" />
                    <br />
                    <Buttonresuable label="Submit" />
                  </Box>
                </Modal>
                <Grid container spacing={3}>
                  <Grid item xs={12} lg={6}>
                    <Typography className="interstatus">
                      CANDIDATE NAME{" "}
                      <span>
                        <i className="fa fa-arrow-right"></i>
                      </span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <Typography className="interavailable">
                      No Candidate Available
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12} lg={6}>
                    <Typography className="interstatus">
                      STATUS{" "}
                      <span>
                        <i className="fa fa-arrow-right"></i>
                      </span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <Typography className="interavailable">
                      Not Accepted
                    </Typography>
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Calendar onChange={onChange} value={value1} />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Grid container spacing={3}>
                  <Grid item xs={12} lg={12}>
                    <Typography className="reviewdash">
                      <Typography>
                        <Rating
                          onClick={handleRating}
                          ratingValue={rating}
                          size={50}
                          transition
                          allowHalfIcon
                          showTooltip
                          tooltipArray={tooltipArray}
                        />
                      </Typography>

                      <Typography className="reviewhr">
                        By <span>Vikas Choudhary</span> 09/07/2022
                      </Typography>

                      <Typography>
                        Lorem ipsum is placeholder text commonly used in the
                        graphic, print, and publishing industries for previewing
                        layouts and visual mockups.
                      </Typography>
                    </Typography>
                    <br />
                    <br />
                    <Typography className="reviewdash">
                      <Typography>
                        <Rating
                          onClick={handleRating}
                          ratingValue={rating}
                          size={50}
                          transition
                          allowHalfIcon
                          showTooltip
                          tooltipArray={tooltipArray}
                        />
                      </Typography>

                      <Typography className="reviewhr">
                        By <span>Govind Somani</span> 09/07/2022
                      </Typography>

                      <Typography>
                        Lorem ipsum is placeholder text commonly used in the
                        graphic, print, and publishing industries for previewing
                        layouts and visual mockups.
                      </Typography>
                    </Typography>
                  </Grid>
                </Grid>
              </TabPanel>
            </Grid>
            <Grid item xs={12} lg={4}>
              <img src="images/interviewdash.png" alt="" style={{}} />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box className="weeklyinterview">
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
              <h2>Weekly Reports</h2>

              <Typography class="progress yellow">
                <span class="progress-left">
                  <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                  <span class="progress-bar"></span>
                </span>
                <Typography class="progress-value">70%</Typography>
              </Typography>
            </Grid>
            <Grid item xs={12} lg={6}>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="Today"
                    control={<Radio />}
                    label="Today"
                  />
                  <FormControlLabel
                    value="This Week"
                    control={<Radio />}
                    label="This Week"
                  />
                  <FormControlLabel
                    value="Month"
                    control={<Radio />}
                    label="Month"
                  />
                  <FormControlLabel
                    value="Custom"
                    control={<Radio />}
                    label="Custom"
                  />
                  <Button onClick={handleOpenweek} className="announcebutton">
                    Week Schedule
                  </Button>
                  <br />
                  <br />
                </RadioGroup>
              </FormControl>
              <br />
              <br />
              <Modal
                open={openweek}
                onClose={handleCloseweek}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box className="modalannounce">
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Week Slot
                  </Typography>
                  <br />

                  <br />
                  <TextField id="" label="Total Time Slot" variant="outlined" />
                  <br />
                  <TextField id="" label="Total Interview" variant="outlined" />
                  <br />
                  <TextField id="" label="Rejected" variant="outlined" />
                  <br />
                  <Buttonresuable label="Submit" />
                </Box>
              </Modal>
              <Typography className="timeslot">
                Total Time Slot
                <br />
                NA
              </Typography>
              <Typography className="timeslot">
                Total Interview
                <br />
                NA
              </Typography>

              <Typography className="timeslot">
                Rejected
                <br />
                NA
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
