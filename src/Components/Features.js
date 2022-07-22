import React from 'react'
import Header from './Header'

import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import  Container from '@material-ui/core/Container'
import Grid from "@material-ui/core/Grid";
import { Typography } from '@material-ui/core'

export default function Features() {
  return (
    <div>
      <Header/>
      <Box className='featuretrh'>
<Container>
<Grid container spacing={3}>
        <Grid item xs={12} lg={4}>
          <Paper className="featurepaper">
              <img src='images/admin.jpg' alt='admin'/>
<h3>Benefits Administration
</h3>
<Typography>Managing employee benefits and factoring them into payroll calculations can be a time drain. A human resource management system allows easy access to benefits administration modules that enable you to factor
   in benefits like pension plans, medical insurance, maternity leave, sick leave, and vacation.</Typography>

          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className="featurepaper">
          <img src='images/compatibility.jpg' alt='admin'/>
          <h3>Compatibility
</h3>
<Typography>It may offer cloud HR software or on-premise solutions. 
  They may also have mobile applications for Android and iOS operating systems. To maximize efficiency,
   your HRMS software ought to offer accessible solutions . Mobile compatibility and cloud solutions allow your employees to access information.  </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className="featurepaper">
          <img src='images/realtime.jpg' alt='admin'/>
                <h3>Realtime Management</h3>
                <Typography>It should offer tailored and customizable analytics and reports from your system’s data. Real-time information and reporting enables you to make timely decisions that enhance performance against KPIs.</Typography>
          </Paper>
        </Grid>
      </Grid>

</Container>


      </Box>

    </div>
  )
}
