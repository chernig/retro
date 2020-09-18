import React from 'react';
import NoteContainer from './components/noteContainer/noteContainer';
import { Jumbotron } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Jumbotron className="mb-0">
        <NoteContainer test={'atata'} />
        <NoteContainer test={'atata'} />
        <NoteContainer test={'atata'} />
        <NoteContainer test={'atata'} />
      </Jumbotron>
    </div>
  );
}

export default App;
