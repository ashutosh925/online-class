import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
}));


const lightTheme = createTheme({ palette: { mode: 'light' } });

export default function Feed() {
  return (
    <Grid container spacing={2}>
        <Grid item xs={12} >
            <Box
              sx={{
                p: 2,
                bgcolor: 'background.default',
                display: 'grid',
                gridTemplateColumns: { md: '1fr 1fr' },
                gap: 2,
              }}
            >
              <Item>
              <TextField
                hiddenLabel
                id="filled-hidden-label-normal"
                defaultValue="Normal"
                variant="filled"
              />
              </Item>
              {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((Feed) => (
                <Item key={Feed}>
                  {`Feed=${Feed}`}
                </Item>
              ))}
            </Box>
        </Grid>
    </Grid>
  );
}
