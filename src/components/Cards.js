import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid';
import Alert from '@mui/material/Alert';
import { getIn } from './Data'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';


var string = localStorage.getItem("input string");
var personObj = getIn(string);

function Cards() {
  const [open, setOpen] = React.useState(true);
  return (
    <div>
      <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="medium"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Matches all current databases
        </Alert>
      </Collapse>
      </Box>
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
        height="500"
        image="/images/avatar-M.png"
      />
      <CardContent>

        <Typography gutterBottom variant="h5" component="div">
          {personObj.fullName}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          DL: {personObj.driversLicense}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Date of Birth: {personObj.dateOfBirth}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Passport Number: {personObj.passportNumber}
        </Typography>


      </CardContent>

    </Card>

  </Grid>
 </Grid>
    </div>
  )
}

export default Cards;