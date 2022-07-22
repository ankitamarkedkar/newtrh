import React from 'react'

import Header from './Header'

import  '../Components/Style.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';



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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}





export default function Home() {
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
};

const items = [
  <div className="itemteam" data-value="1">
     <div className='pic'>
         <img src='images/image-1.jpg' alt='team'></img>
         <h5 class="mb-0">Manuella Nevoresky</h5>
         <span class="small text-uppercase text-muted">CEO - Founder</span>
     </div>
 
  </div>,
  <div className="itemteam" data-value="2">
    <div className='pic'>
         <img src='images/image-3.jpg' alt='team'></img>
         <h5 class="mb-0">Manuella Nevoresky</h5>
         <span class="small text-uppercase text-muted">CEO - Founder</span>
     </div>
  </div>,
  <div className="itemteam" data-value="3">
    <div className='pic'>
         <img src='images/image-1.jpg' alt='team'></img>
         <h5 class="mb-0">Manuella Nevoresky</h5>
         <span class="small text-uppercase text-muted">CEO - Founder</span>
     </div>
  </div>,
  <div className="itemteam" data-value="4">
    <div className='pic'>
         <img src='images/image-3.jpg' alt='team'></img>
         <h5 class="mb-0">Manuella Nevoresky</h5>
         <span class="small text-uppercase text-muted">CEO - Founder</span>
     </div>
  </div>,
  <div className="itemteam" data-value="4">
  <div className='pic'>
       <img src='images/image-1.jpg' alt='team'></img>
       <h5 class="mb-0">Manuella Nevoresky</h5>
       <span class="small text-uppercase text-muted">CEO - Founder</span>
   </div>
</div>,
  <div className="itemteam" data-value="5">
    <div className='pic'>
         <img src='images/image-3.jpg' alt='team'></img>
         <h5 class="mb-0">Manuella Nevoresky</h5>
         <span class="small text-uppercase text-muted">CEO - Founder</span>
     </div>
  </div>,
];

const responsivetestimonial = {
  0: { itemstestimonial: 1 },
  568: { itemstestimonial: 1 },
  1024: { itemstestimonial: 1 },
};

const itemstestimonial = [
  <div className="itemtestimonial" data-value="1">
     <div className='pic'>
         <img src='https://randomuser.me/api/portraits/women/21.jpg' alt='team'></img>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
   Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <h5 class="mb-0">Marry Larson</h5>
         <span class="small text-uppercase text-muted">CEO - Founder</span>
     </div>
 
  </div>,
  <div className="itemtestimonial" data-value="2">
    <div className='pic'>
         <img src='https://i.ibb.co/L8Pj1mg/o6EuTCT6.jpg' alt='team'></img>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
   Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
         <h5 class="mb-0">Manuella Nevoresky</h5>
         <span class="small text-uppercase text-muted">CEO - Founder</span>
     </div>
  </div>,
  <div className="itemtestimonial" data-value="3">
    <div className='pic'>
         <img src='https://i.ibb.co/L8Pj1mg/o6EuTCT6.jpg' alt='team'></img>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
   Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
         <h5 class="mb-0">Manuella Nevoresky</h5>
         <span class="small text-uppercase text-muted">CEO - Founder</span>
     </div>
  </div>,
  <div className="itemtestimonial" data-value="4">
    <div className='pic'>
         <img src='https://i.ibb.co/L8Pj1mg/o6EuTCT6.jpg' alt='team'></img>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
   Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
         <h5 class="mb-0">Manuella Nevoresky</h5>
         <span class="small text-uppercase text-muted">CEO - Founder</span>
     </div>
  </div>,
  <div className="itemtestimonial" data-value="4">
  <div className='pic'>
       <img src='https://i.ibb.co/L8Pj1mg/o6EuTCT6.jpg' alt='team'></img>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
   Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
       <h5 class="mb-0">Manuella Nevoresky</h5>
       <span class="small text-uppercase text-muted">CEO - Founder</span>
   </div>
</div>,
 
];
  return (
    <div>
     <Header/>
     <React.Fragment>
      <CssBaseline />
      <Container fixed>
      <div className='tab22'>
      <Grid container spacing={2}>
        
        <Grid item xs={12}  md={6}>
          <div className='tab33'>
          <img src='images/trh1.png' alt=''></img>



          </div>
        </Grid>
        <Grid item xs={12}  md={6}>
          <div className='tab33'> <Box>
        <Grid container spacing={2}>
            <Grid >
              <div>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className='tab99'>
            <Tab label="Hr" {...a11yProps(0)} />
            <Tab label="Interviewer" {...a11yProps(1)} />
            <Tab label="Candidate" {...a11yProps(2)} />
          </Tabs>
          <TabPanel value={value} index={0}>
             <form  className="formhr">
             <label>Name</label><br/><br/>
        <TextField id=""  variant="outlined" />
        
        <label>Email</label><br/><br/>
        <TextField id="outlined-basic"  variant="outlined" />
       
        <label>Password</label><br/><br/>
        <TextField id="outlined-basic"  variant="outlined" />
        <div className='buttoncreate'>
        <Button variant="contained" >Create</Button><br/>
        
        <Typography>I don’t have an account? <Link href="/signup" underline="none">{'Sign Up'}</Link></Typography></div>
             </form>
             </TabPanel>
             <TabPanel value={value} index={1}>
             <form  className="formhr">
             <label>Name</label><br/><br/>
        <TextField id=""  variant="outlined" />
        
        <label>Email</label><br/><br/>
        <TextField id="outlined-basic"  variant="outlined" />
       
        <label>Password</label><br/><br/>
        <TextField id="outlined-basic"  variant="outlined" />
        <div className='buttoncreate'>
        <Button variant="contained" >Create</Button><br/>
        
        <Typography>I don’t have an account? <Link href="/signup" underline="none">{'Sign Up'}</Link></Typography></div>
             </form>
             </TabPanel>
             <TabPanel value={value} index={2}>
             <form  className="formhr">
             <label>Name</label><br/><br/>
        <TextField id=""  variant="outlined" />
        
        <label>Email</label><br/><br/>
        <TextField id="outlined-basic"  variant="outlined" />
       
        <label>Password</label><br/><br/>
        <TextField id="outlined-basic"  variant="outlined" />
        <div className='buttoncreate'>
        <Button variant="contained" >Create</Button><br/>
        
        <Typography>I don’t have an account? <Link href="/signup" underline="none">{'Sign Up'}</Link></Typography></div>
             </form>
             </TabPanel>


              </div>

            </Grid>

        </Grid>







      </Box></div>
        </Grid>
       
      </Grid>
    </div>



        
      </Container>
    </React.Fragment>

      <Box className='trhservice'>
       <Container>
       <h1 class="pseudo_border">Our Services</h1>
      <Grid container spacing={3} >
        
        <Grid item xs={12} md={4}>
          <Paper className='comservice'>
            <img src='images/search.png' alt=''></img>
            <h5>Interviewer</h5>
            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing 
              layouts and visual mockups.</p>
          </Paper>
        </Grid>
        <Grid item xs={12}  md={4}>
          <Paper className='comservice'>
          <img src='images/candidates.png' alt=''></img>
          <h5>Candidates</h5>
          <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing 
              layouts and visual mockups.</p>
          </Paper>
        </Grid>
        <Grid item xs={12}  md={4}>
          <Paper className='comservice'>
          <img src='images/company.png' alt=''></img>
          <h5>Company</h5>
          <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing 
              layouts and visual mockups.</p>

          </Paper>
        </Grid>
        
      </Grid>
    </Container>
    </Box>
    <Box className='team'>
     <Container>
       <h1 class="pseudo_border">Our Team</h1>    
       <AliceCarousel autoPlayStrategy="none"
        autoPlayInterval={1000}
        animationDuration={1000}
        animationType="fadeout"
        infinite
        mouseTracking
        items={items}
        responsive={responsive}
    />
    </Container>
    </Box>
    <Box className='trhtestimonial'>
     <Container>
       <h1 class="pseudo_border">Our Clients</h1>    
        <AliceCarousel autoPlay autoPlayStrategy="none"
        autoPlayInterval={1000}
        animationDuration={1000}
        animationType="fadeout"
        infinite
        mouseTracking
        items={itemstestimonial}
        responsive={responsivetestimonial}
        controlsStrategy="alternate" 
    /> 
     
     </Container>
    </Box>
    
      
    </div>
  )
}
