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
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Link from '@material-ui/core/Link';
import Buttonresuable from './Buttonresuable';





export default function Hrrequirementdetail() {
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
                <h2>REQUIREMENTS DETAILS<br/><span><Link href ="/Login">Sign in to continue</Link></span></h2>

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
                  <TextField id="" label="Enter Company Website URL " variant="outlined" />

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
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-Technology" className='requ'>Enter  Technology</InputLabel>
        <Select
          labelId="demo-simple-select-Technology"
          id="demo-simple-select"
          value={experience}
          label="Enter  Technology"
          onChange={handleChange} variant="outlined"
        >
          <MenuItem value={10}>Java</MenuItem>
          <MenuItem value={20}>React</MenuItem>
          <MenuItem value={30}>Node</MenuItem>
        </Select>
      </FormControl><br/><br/>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-Location" className='requ'>Location</InputLabel>
        <Select
          labelId="demo-simple-select-Location"
          id="demo-simple-select"
          value={experience}
          label="Location"
          onChange={handleChange} variant="outlined"
        >
          <MenuItem value={10}>Indore</MenuItem>
          <MenuItem value={20}>Bhopal</MenuItem>
          <MenuItem value={30}>Pune</MenuItem>
        </Select>
      </FormControl>
<br/><br/>
      <TextareaAutosize className='textform'
      aria-label="Comment"
      minRows={6}
      placeholder="Comment"
      
    /><br/>
        <Link href="/Hrdashboard"><Buttonresuable label="Submit" ></Buttonresuable></Link>

{/* <Buttonresuable label="Submit" /> */}
     
                  </Paper>
                </Grid>
                <Grid item xs={12} lg={3}></Grid>

            </Grid>

        </Container>

     </Box>

    </div>
  )
}
