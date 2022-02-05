import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Paper } from '@material-ui/core';
import { Card } from '@mui/material';
import GameCard from './GameCard';

export default function Games() {
  const theme = useTheme();

  return (
   <Card style={{overflowY: 'auto'}}>
       {[1,2,3].map((item)=>{
           return <GameCard key={item}/>
       })}
   </Card>
  );
}
