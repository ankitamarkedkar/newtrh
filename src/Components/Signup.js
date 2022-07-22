import React from 'react'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import  '../Components/Style.css'
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Buttonresuable from './Buttonresuable';


export default function Signup() {
  return (
    <div >

        <Box className='signup'>
            <Container>
        <Grid container spacing={12}>
        
        <Grid item xs={12}  md={6}>
            <h2>SIGN UP<br/>
            <span className='free'>Create New Account is Free</span></h2>
          <img src='images/signup.png' alt='' width={'100%'}></img>



          
        </Grid>
        <Grid item xs={12}  md={6}>
        <h2>PERSONAL DETAILS<br/>
            </h2>
        <FormControl variant="standard">
        <label>
          Your First Name
        </label>
        <TextField id="" label="First Name" variant="filled" /><br/>
        <label>
          Your Last Name
        </label>
        <TextField id="" label="Last Name" variant="filled" /><br/>
        <label>
          Your Email Address
        </label>
        <TextField id="" label="Email" variant="filled" /><br/>
        <label>Contact No. </label>
        <TextField id="" label="Contact" variant="filled" /><br/>
        <label>
        DOB        </label>
        <TextField id="" label="DOB" variant="filled" /><br/>
        <label>
        Role        </label>
        <TextField id="" label="Role" variant="filled" /><br/>
        <FormGroup>
      <FormControlLabel control={<Checkbox  />} label="I Agree Terms & Conditions" />
    </FormGroup>
        <Buttonresuable label="Signup Account"/>

      </FormControl>
     
      <Button variant="outlined" className='googlebutton'><i class="fa fa-google"></i>Continue As Google</Button>

        </Grid>
       
      </Grid>
      </Container>
        </Box>
    </div>
  )
}
