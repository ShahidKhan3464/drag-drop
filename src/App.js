import React from 'react';
import { Container } from 'react-bootstrap';
import TaskList from './components/taskList/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return (
    <div className="App">
      <Container>
        <TaskList />
      </Container>
    </div>
  );
}

export default App;