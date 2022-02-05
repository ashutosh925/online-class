import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import TimeLineCard from "./TimelineCard";
import Card from '@mui/material/Card';
import PublishArea from './PublishArea';
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
}));


const lightTheme = createTheme({ palette: { mode: 'light' } });

export default function Feed() {
  const numberOfcards = 10;
  return (
    <Paper>
    <PublishArea />
    <Grid container spacing={2} style={{height: '90vh', marginTop: "1%", overflowY: 'auto'}}>
          { 
            [1,2,3,4,5,6,7,8,9,10].map((item)=>{
              return(
                <Grid item xs={6} key={item} >
                  <Paper elevation={24}>
                   <TimeLineCard/>
                </Paper>
                </Grid>
                
              )
            })
          }
    </Grid>
    </Paper>
  );
}
