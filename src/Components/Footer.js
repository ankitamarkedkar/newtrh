import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Container, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import  '../Components/Style.css'
import Link from '@material-ui/core/Link';




export default function Footer() {
  

  return (
    
     <Box className='trhfooter'>
       <Container>
       
      <Grid container spacing={4} >
        
        <Grid item xs={12} md={4}>
          <h2>Company Info</h2>
          <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
             dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
             commodo consequat. 


             </Typography>


        </Grid>
        <Grid item xs={12}  md={2}>
        <h2>Legal</h2>
        <ul>
            <li><Link href="/Aboutus" underline="none">{'About Us'}</Link></li>
            <li><Link href="/Features" underline="none">{'Features'}</Link></li>
            <li><Link href="/Blog" underline="none">{'Blog'}</Link></li>
            <li><Link href="/Contactus" underline="none">{'Contactus'}</Link></li>


          </ul>
        </Grid>
        <Grid item xs={12}  md={3}>
        <h2>Features</h2>
        <ul>
            <li><Link href="Hrdashboard" underline="none">{'HR Dashboard'}</Link></li>
            <li><Link href="Interviewdashboard" underline="none">{'Interviewer Dashboard'}</Link></li>
            <li><Link href="Candidatedashboard" underline="none">{'Candidate Dashboard'}</Link></li>


          </ul>
        </Grid>
        <Grid item xs={12}  md={3}>
        <h2>Get In Touch</h2>

        <p><i className='fa fa-map-marker'></i><span>51, Electronic Complex, Pardesipura,
Indore, Madhya Pradesh 452007</span></p>
        <p><i className='fa fa-envelope'></i><span><Link href="mailto:sales@therapidhire.com">sales@therapidhire.com</Link></span></p>
        <p><i className='fa fa-phone'></i><span><Link href="telto:0731 356 20055">0731 356 20055</Link></span></p>
        </Grid>
        
      </Grid>
     
    </Container>
    </Box>
  
  );
}
