import { Box, Typography } from '@mui/material';
import React from 'react';
import TaskContainer from './container/TaskContainer';


function App() {
  return (
    
    <div className="App">
      <Typography variant="h2" align="center" color="primary">
        Task list
        </Typography>
      <TaskContainer />
    </div>
    
  );
}

export default App;
