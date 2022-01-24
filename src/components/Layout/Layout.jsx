import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Layout() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Item>
              Profile
          </Item>
          <Item>
            team List
          </Item>
          <Item>
              Item3
          </Item>
        </Grid>
        <Grid item xs={6}>
            News Feed
        </Grid>
        <Grid item xs>
          <Item>Game List</Item>
          <Item>Spinning Wheel</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
