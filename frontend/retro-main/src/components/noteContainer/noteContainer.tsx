import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import axios from 'axios';
import Note from '../note/note';
import './noteContainer.css';

interface containerProps {
  group: string;
}

interface note {
  id: number;
  text: string;
}

function NoteContainer(props: containerProps) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/comments/', {
        params: { group: props.group }
      })
      .then((response) => {
        setNotes(response.data);
      });
  }, [props.group]);

  return (
    <Col>
      <p>{props.group}</p>
      {notes.map((note: note) => (
        <Note key={note.id} text={note.text} data-key={note.id} />
      ))}
    </Col>
  );
}

export default NoteContainer;
