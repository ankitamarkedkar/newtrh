import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography'

import List from '@material-ui/core/List';
import  Button from '@material-ui/core/Button';

import MoreIcon from '@material-ui/icons/MoreVert';
import  '../Components/Style.css'
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  
  inputRoot: {
    color: 'inherit',
  },
  
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
   


  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu 
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
      <ListItemText inset className='menumobile'>
                    <TypoGraphy color="inherit" variant="title">
                     <Link to="/" className="headlinksmob">  Home</Link>
               </TypoGraphy>
                </ListItemText>
      </MenuItem>
      <MenuItem>
      <ListItemText inset className='menumobile'>
                    <TypoGraphy color="inherit" variant="title">
                      <Link to="/Aboutus" className="headlinksmob"> Aboutus </Link>
               </TypoGraphy>
                </ListItemText>
                </MenuItem>
                <MenuItem>
                <ListItemText inset className='menumobile'>
                    <TypoGraphy color="inherit" variant="title">
                      <Link to="/Features" className="headlinksmob"> Features</Link>
               </TypoGraphy>
                </ListItemText>
                </MenuItem>
                <MenuItem>
                <ListItemText inset className='menumobile'>
                    <TypoGraphy color="inherit" variant="title">
                      <Link to="/Blog" className="headlinksmob"> Blog</Link>
               </TypoGraphy>
                </ListItemText>
                </MenuItem>
                <MenuItem>
                <ListItemText inset className='menumobile'>
                    <TypoGraphy color="inherit" variant="title">
                      <Link to="/Contactus" className="headlinksmob">Contact Us</Link>
               </TypoGraphy>
                </ListItemText>
      </MenuItem>
      <MenuItem>
                <ListItemText inset className='menumobile'>
                <Button variant="outlined" className='bt99' href="/">
                  <Link to="/Login" className="headlinks"> Login</Link>
                       </Button>
                       <Button variant="outlined" className='bt99' href="/">
                  <Link to="/Signup" className="headlinks"> Create Account</Link>
                       </Button>
                </ListItemText>
      </MenuItem>
     
      
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          
          <TypoGraphy >
          <Link to="/" > 
          <img src='images/logo.png' alt='trh' style={{width: '150px'}}/>  </Link>
        </TypoGraphy>
          
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          <List component="nav">
            <ListItem component="div">
                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title" >
                          <Link to="/" className="headlinks"> Home</Link>
               </TypoGraphy>
                </ListItemText>
                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                      <Link to="/Aboutus" className="headlinks"> About Us</Link>
               </TypoGraphy>
                </ListItemText>


                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                      <Link to="/Features" className="headlinks">  Features</Link>
               </TypoGraphy>
                </ListItemText>
                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                      <Link to="/Blog" className="headlinks">  Blog</Link>
               </TypoGraphy>
                </ListItemText>
                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                      <Link to="/Contactus" className="headlinks">   Contact Us</Link>
               </TypoGraphy>
                </ListItemText>
                <ListItemText inset>
                <Button variant="outlined" className='bt99' href="/">
                  <Link to="/Login" > Login</Link>
                       </Button>
                </ListItemText>
                <ListItemText inset>
                <Button variant="outlined" className='bt99' href="/">
                  <Link to="/Signup" > Create Account</Link>
                       </Button>
                </ListItemText>
            </ListItem >

        </List>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
