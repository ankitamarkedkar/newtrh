import React from 'react'
import Header from './Header'
import Grid from "@material-ui/core/Grid";
import { Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import  '../Components/Style.css';
import Link from '@material-ui/core/Link';


export default function Blog() {
  return (
    <div>
     <Header/>
     <Box className='blogtrh'>
            <Container>
            <Typography className='abouttrh'>
            <h1 class="pseudo_border">Blogs</h1></Typography>

                 <Grid Container spacing={3}>
                 <Grid item xs={12} lg={12}>
                         <Typography className='texttrh'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                             ut aliquip ex ea commodo consequat. 
                 </Typography>
                 </Grid>
                 </Grid>
                 <br/><br/>
                 <Grid container spacing={3}>
             <Grid item xs={12} lg={4}>
                <Typography className='btrh'>
                   <img src='images/blog1.jpg' alt='imagetrh'/>
                   
<Typography className='avatartrh'><i className='fa fa-clock-o'/><span>11/07/2022</span>
</Typography> 





                <Typography className='trhbhead'>How to Decide Technology to Use For Your Start Up
</Typography>
                         <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. 

                 </Typography><br/>
                 <Button variant="outlined" className='bt99' href="/">
                  <Link href="/Blogdetail" > Read More</Link>
                       </Button>
                 </Typography>
                 </Grid>
                 <Grid item xs={12} lg={4}>
                 <Typography className='btrh'>
                 <img src='images/blog2.jpg' alt='imagetrh'/>
                   
                 <Typography className='avatartrh'><i className='fa fa-clock-o'/><span>11/07/2022</span>
</Typography> 
                 <Typography className='trhbhead'>The Ultimate Guide to Understanding Innovation
</Typography>

                         <Typography >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. 
                 </Typography><br/>
                 <Button variant="outlined" className='bt99' href="/">
                  <Link href="/Blogdetail" > Read More</Link>
                       </Button>
                 </Typography>
                 </Grid>
                 <Grid item xs={12} lg={4}>
                 <Typography className='btrh'>
                 <img src='images/blog3.jpg' alt='imagetrh'/>
                   
                 <Typography className='avatartrh'><i className='fa fa-clock-o'/><span>11/07/2022</span>
</Typography> 

                 <Typography className='trhbhead'>Exactly How Technology Can Make Reading Better</Typography>

                         <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. 
                 </Typography><br/>
                 <Button variant="outlined" className='bt99' href="/">
                  <Link href="/Blogdetail" > Read More</Link>
                       </Button>
                 </Typography>
                 </Grid>
                 
              </Grid>
               

            </Container>

        </Box>


    </div>
  )
}
