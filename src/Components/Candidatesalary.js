import React from 'react'
import { Box } from '@material-ui/core'
import { Grid , Container } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Buttonresuable from './Buttonresuable';




export default function Candidatesalary() {
  const [experience, setExperience] = React.useState('');

  const handleChange = (event) => {
    setExperience(event.target.value);
  };
  

  return (
    <div>
         <Box className='hrhead'>
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={6} lg={6}>
                <h2>SALARY DETAILS<br/><span><Link href ="/Login">Sign in to continue</Link></span></h2>

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
                 
                  <FormControl fullWidth >
        <InputLabel className='requ' id="demo-simple-select-label">Experienced/Fresher</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={experience}
          label="Experienced/Fresher"
          onChange={handleChange} variant="outlined"
        >
          <MenuItem value={10}>0</MenuItem>
          <MenuItem value={20}>1</MenuItem>
          <MenuItem value={30}>2</MenuItem>
        </Select>
      </FormControl><br/><br/>

      <TextField id=""  variant="outlined" type="file" title='Upload company supporting letter(for verification)'/>

      <Link href="/Candidatedashboard"><Buttonresuable label="Submit" ></Buttonresuable></Link>


     
                  </Paper>
                </Grid>
                <Grid item xs={12} lg={3}></Grid>

            </Grid>

        </Container>

     </Box>

    </div>
  )
}
