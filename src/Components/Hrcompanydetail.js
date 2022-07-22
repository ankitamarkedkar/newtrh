import React from 'react'
import { Box } from '@material-ui/core'
import { Grid , Container } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import Buttonresuable from './Buttonresuable';



export default function Hrcompanydetail() {
  return (
    <div>
        <Box className='hrhead'>
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={6} lg={6}>
                <h2>COMPANY DETAILS<br/><span><Link href ="/login">Sign in to continue</Link></span></h2>

                </Grid>
                <Grid item xs={6} lg={6}>

                    <img src='images/hr.png' alt='hr'/>
                </Grid>


            </Grid>

        </Container>

     </Box>
     <Box className='hrcompdetail'>
        <Container>
            <Grid container spacing={3}>
            <Grid item xs={12} lg={3}></Grid>
                <Grid item xs={12} lg={6}>
                <Paper elevation={3} className="hrcomp">
                  <div className='profileimage'>
                  <Avatar alt="Remy Sharp" src="images/image-1.jpg" />
                   <h4>Profile Upload</h4>
                  </div>
        <FormControl variant="standard">
        
        <TextField id="" label="Enter Company Name" variant="outlined" />
        
        
        <TextField id="" label="Enter Company Address" variant="outlined" />

       
        <TextField id="" label="Enter Company Website URL " variant="outlined" />
       
        <TextField id=""  variant="outlined" type="file" title='Upload company supporting letter(for verification)'/>
        
        {/* label="Upload company supporting letter(for verification)" */}
        <Link href="/Hrrequirementdetail"><Buttonresuable label="Next" ></Buttonresuable></Link>
      </FormControl>
     
     
                  </Paper>
                </Grid>
                <Grid item xs={12} lg={3}></Grid>

            </Grid>

        </Container>

     </Box>
    </div>
  )
}
