import React from 'react'
import { Box } from '@material-ui/core'
import { Grid , Container } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Buttonresuable from './Buttonresuable';
import Avatar from '@material-ui/core/Avatar';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Link from '@material-ui/core/Link';




export default function Candidateacademicdetail() {
    const [job, setJob] = React.useState('');

    const handleChange = (event) => {
      setJob(event.target.value);
    };
  
  return (
    <div>
     <Box className='hrhead'>
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={6} lg={6}>
                <h2>PERSONAL DETAILS<br/><span><Link href ="/Login" underline="none">Sign in to continue</Link></span></h2>

                </Grid>
                <Grid item xs={6} lg={6}>

                    <img src='images/hr.png' alt='hr'/>
                </Grid>


            </Grid>

        </Container>

     </Box>
     <Box className='candidatesection'>
        <Container>
            <Grid container spacing={3}>
            <Grid item xs={12} lg={3}></Grid>
                <Grid item xs={12} lg={6}>
                <Paper elevation={3} className="hrprof">
                  <div className='profileimage'>
                  <Avatar alt="Remy Sharp" src="images/image-1.jpg" />
                   <h4>Profile Upload</h4>
                  </div>
        <FormControl variant="standard" className='academic'>
        <label>Cv/Resume</label>
        <TextField id=""  variant="outlined" type="file"  />

        <label>10th Marksheet</label>
        <TextField id=""  variant="outlined" type="file" />

        <label>12th Marksheet</label>
        <TextField id=""  variant="outlined" type="file" />

        <label>Graducation Marksheet</label>
        <TextField id=""  variant="outlined" type="file" />

        <label>PG Marksheet</label>
        <TextField id=""  variant="outlined" type="file" />

        <label>Any Certification</label>
        <TextField id=""  variant="outlined" type="file" />
        
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-Location" className='requ'>Location</InputLabel>
        <Select
          labelId="demo-simple-select-Location"
          id="demo-simple-select"
          value={job}
          label="Location"
          onChange={handleChange} variant="outlined"
        >
          <MenuItem value={10}>Indore</MenuItem>
          <MenuItem value={20}>Bhopal</MenuItem>
          <MenuItem value={30}>Pune</MenuItem>
        </Select>
      </FormControl>
      <Link href="/Candidatesalary"><Buttonresuable label="Next" ></Buttonresuable></Link>

       
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
