import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Feed from '../Feed/Feed';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Profile from './Profile';
import Team from './Team';
import DateSelector from './DateSelector';
import Chat from "../Chat";
import Wheel from '../wheel';
import Games from "../Games";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const lightTheme = createTheme({ palette: { mode: 'light' } });
export default function Layout() {
  const places = ['Pizzas', 'Sandwiches', 'Salads', 'Soup', 'Japanese food', 'Pastas'];
  return (
  <ThemeProvider theme={lightTheme}>
    <Box sx={{ flexGrow: 1 }} style={{marginTop: '2%'}}>
      <Grid container spacing={3} style={{marginLeft: '2%'}}>
        <Grid item >
          <Item>
              <Profile/>
          </Item>
          <Item>
            <Team />
          </Item>
          <Item>
              <DateSelector />
          </Item>
        </Grid>
        <Grid item xs={6}>
            <Feed />
        </Grid>
        <Grid item xs={3}>
          <Item style={{height: "20%", overflowY: 'auto'}}>
            <Games />
          </Item>
          <Item>
            <Wheel items={places}/>
          </Item>
          <Item style={{height: "35%" }}>
            <Chat/>
          </Item>
        </Grid>
      </Grid>
    </Box>
    </ThemeProvider>
  );
}
