import React from 'react';
import NoteContainer from './components/noteContainer/noteContainer';
import { Jumbotron } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Jumbotron className="mb-0">
        <NoteContainer group={'bad'} />
        <NoteContainer group={'well'} />
        <NoteContainer group={'improve'} />
        <NoteContainer group={'action'} />
      </Jumbotron>
    </div>
  );
}

export default App;
