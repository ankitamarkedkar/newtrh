import React from 'react'
import Header from './Header'
import Grid from "@material-ui/core/Grid";
import { Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core'
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import Iframe from 'react-iframe';


import  '../Components/Style.css';


export default function Contactus() {
  return (
    <div>
     <Header/>
     <Box className='blogtrh'>
          <Container>

          <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
                       <Typography><h2>Get In Touch</h2></Typography>
                                 <form>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} lg={6}>
                                    <TextField id="Name" label="Name" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12} lg={6}>
                                    <TextField id="Email" label="Email" variant="outlined" />

                                    </Grid>
                                    <Grid item xs={12} lg={6}>
                                    <TextField id="Phone" label="Phone" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12} lg={6}>
                                    <TextField id="Subject" label="Subject" variant="outlined" />

                                    </Grid>
                                    <Grid item xs={12} lg={12}>
                                    <TextField id="Subject" label="Subject" variant="outlined" />

                                    </Grid>
                                    <Grid item xs={12} lg={12}>
                                    <TextareaAutosize className='textareainput'
      aria-label="minimum height"
      minRows={6}
      placeholder="" style={{width:"100%"}}
     
    />
                                    </Grid>
                                    <Grid item xs={12} lg={12}>
                                    <Button variant="outlined" className='bt99' >
                  <Link href="/" > Read More</Link>
                       </Button>
                       </Grid>
                                </Grid>
                              

                                </form>
                        </Grid>
            <Grid item xs={12} lg={6}>
               <Typography className='condetail'>
               <h2>Contact Details</h2>

                  <Typography className='contypo'><span><i className='fa fa-map-marker'></i></span>51, Electronic Complex, Pardesipura, Indore 452007</Typography>
                  <Typography className='contypo'><span><i className='fa fa-phone'></i></span><Link href="telto:073135620055">0731 356 20055</Link></Typography>
                  <Typography className='contypo'><span><i className='fa fa-envelope'></i></span><Link href="mailto:sales@therapidhire.com

">sales@therapidhire.com

</Link></Typography><br/>

<h2>Follow us</h2>
                            <Typography className='socialmediaicon'>
                                 <img src='images/facebook.png' alt='face'/>
                                 <img src='images/insta.png' alt='insta'/>
                                 <img src='images/twit.png' alt='twit'/>
                                 <img src='images/linke.png' alt='twit'/>



                            </Typography>


               </Typography>
            </Grid>



            </Grid>


<br/><br/>
            <Grid container spacing={2}>
  <Grid item xs={12} md={12}>
  <Iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.3383346813853!2d75.86518695063805!3d22.75282198501708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e32b2894590f%3A0x4e73ebc1261cc50!2sTheRapidHire%20Private%20Limited!5e0!3m2!1sen!2sin!4v1657620699859!5m2!1sen!2sin" 
  className='mapiframe'></Iframe>
  </Grid>
  </Grid>

          </Container>

        </Box>





    </div>
  )
}
