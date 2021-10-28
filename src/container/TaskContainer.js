import * as React from 'react';

import Grid from '@mui/material/Grid';
import Task from '../component/Task';
import tasks from './../config/tasks.json';
import AlertDialog from 'component/Dialog';



export default function BasicGrid() {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [content, setContent]= React.useState("");
  const [id, setId]= React.useState(0);
  const [uuid, setUuid]= React.useState("");
  const handleClickOpen = (id, uuid, titles, contents) => {
    setOpen(true);
    setTitle(titles);
    setContent(contents);
    setId(id);
    setUuid(uuid);
  };

  const handleClose = () => {
    setOpen(false);
  };
  function expandDetails(id, uuid, titles, contents) {
    handleClickOpen(id, uuid, titles, contents)
   
  }
  return (

    <Grid container spacing={2}>
      {tasks.map(task => { return <Grid key={task.id} item xs={12} md={3}> <Task expandDetails={expandDetails} id={task.id} uuid= {task.UUID} /> </Grid> })}
    <AlertDialog handleClickOpen={handleClickOpen} handleClose= {handleClose} open={open} title= {title} content= {content} uuid= {uuid} id= {id}/>
    </Grid>

  );
}

