import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function ActionAreaCard(props) {
  return (
    <Card key={props.key} sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.img}
          alt="image alt"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {props.category} ({props.source})
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
