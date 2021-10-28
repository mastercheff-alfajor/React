import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import tasks from './../config/tasks.json';


export default function Task(props) {
  const [title, setTitle]= React.useState("Task ");
  const [content, setContent]= React.useState("well meaningand kindly");
  return (
    <Card sx={{ minWidth: 175 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title} {content}
        </Typography>
        <Typography variant="body2">
          {content}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="secondary" variant="contained" onClick={() => props.expandDetails(props.id, props.uuid, title, content)}>Details</Button>
      </CardActions> 
    </Card>
  );
}

