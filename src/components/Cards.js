import React from 'react'
import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid';

function Cards() {
  return (
    <div>
 <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justify="center"
  style={{ minHeight: '100vh' }}
 >

  <Grid item xs={3}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/images/avatar-M.png"
      />
      <CardContent>

        <Typography gutterBottom variant="h5" component="div">
          John Smith
        </Typography>

        <Typography variant="body2" color="text.secondary">
          DL: I3019496
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Date of Birth: 01/01/1990
        </Typography>

        <Typography variant="body2" color="text.secondary">
          SSN: 606312181
        </Typography>


      </CardContent>

    </Card>

  </Grid>      
 </Grid>
    </div>
  )
}

export default Cards;