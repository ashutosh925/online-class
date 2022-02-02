import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function Profile() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        image="user-profile.png"
      />
      <CardContent>
        
        <TextField
                hiddenLabel
                id="filled-hidden-label-normal"
                defaultValue=""
                variant="filled"
                fullWidth={true}
        />
      </CardContent>
    </Card>
  );
}
