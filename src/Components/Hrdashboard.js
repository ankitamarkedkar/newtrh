import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import "../Components/Style.css";
import { Button, Container, Typography } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Avatar from "@material-ui/core/Avatar";

import "../Components/Style.css";

import FormControl from "@material-ui/core/FormControl";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
//import ReactAudioPlayer from 'react-audio-player';
import Buttonresuable from "./Buttonresuable";
import ReactPlayer from "react-player";

function createData(imageUrl, shortlist, recorded, selected, rejected, review) {
  return { imageUrl, shortlist, recorded, selected, rejected, review };
}
const column = [
  {
    title: "Avatar",
    field: "imageUrl",
    render: (row) => (
      <img
        src={row.imageUrl}
        style={{ width: 40, borderRadius: "50%" }}
        alt=""
      />
    ),
  },

  {
    title: "Video",
    field: "recorded",
    render: (row) => <ReactPlayer url={row.recorded} />,
  },
  {
    title: "Fontawesome",
    field: "selected",
    render: (row) => <i className={row.selected} />,
  },
  {
    title: "Fontawesome",
    field: "rejected",
    render: (row) => <i className={row.rejected} />,
  },
  {
    title: "Fontawesome",
    field: "review",
    render: (row) => <i className={row.review} />,
  },
];
console.log(column);
const rows = [
  createData(
    "https://v4.mui.com/static/images/avatar/1.jpg",
    "Brad Simmons",
    "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    "fa fa-check",
    "fa fa-close",
    "fa fa-star"
  ),
  createData(
    "https://mui.com/static/images/avatar/2.jpg",
    "Jessie Clarcson",
    "https://assets.coderrocketfuel.com/pomodoro-times-up.mp3",
    "fa fa-check",
    "fa fa-close",
    "fa fa-star"
  ),
  createData(
    "https://mui.com/static/images/avatar/3.jpg",
    "Natali Trump",
    "https://assets.coderrocketfuel.com/pomodoro-times-up.mp3",
    "fa fa-check",
    "fa fa-close",
    "fa fa-star"
  ),
];

export default function Hrdashboard() {
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
                <Link href="/Hrdashboard"> Dashboard</Link>
              </Button>
              <Button color="secondary">
                <Link href="/Hrpersonaldetail"> Profile</Link>
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
          <Link href="/hrpersonaldetail">Profile</Link>
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

      <Box>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="caption table">
                  <TableHead className="headtrh">
                    <TableRow>
                      <TableCell>Image</TableCell>
                      <TableCell align="center">Shortlist Candidate</TableCell>
                      <TableCell align="center">Recorded Video</TableCell>
                      <TableCell align="center">Selected</TableCell>
                      <TableCell align="center">Rejected</TableCell>
                      <TableCell align="center">Review</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={column.image} className="trhtable">
                        <TableCell component="th" scope="row">
                          <Avatar alt="Remy Sharp" src={row.imageUrl} />
                        </TableCell>
                        <TableCell align="center">{row.shortlist}</TableCell>
                        <TableCell align="center">
                          <ReactPlayer
                            className="react-player"
                            url={row.recorded}
                            width="100%"
                            height="50px"
                            playing
                            playIcon={<i className="fa fa-play" />}
                            light="https://i.stack.imgur.com/zw9Iz.png"
                            target="_blank"
                          />
                        </TableCell>
                        <TableCell align="center">
                          <i className={row.selected} />
                        </TableCell>
                        <TableCell align="center">
                          <i className={row.rejected} />
                        </TableCell>
                        <TableCell align="center">
                          <i className={row.review} />
                          <i className={row.review} />
                          <i className={row.review} />
                          <i className={row.review} />
                          <i className={row.review} />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box className="dashboard">
        <Container>
          <Grid container spacing={3} className="slots">
            <Grid item xs={12} md={6}>
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
            <Grid item xs={12} md={6}>
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
