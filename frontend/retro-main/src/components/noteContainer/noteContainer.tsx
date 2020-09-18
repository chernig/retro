import React, { useEffect, useState } from 'react';
import { CardDeck, Col, Row } from 'react-bootstrap';
import axios from 'axios';
import Note from '../note/note';
import './noteContainer.css';

interface containerProps {
  test: string;
}

interface note {
  id: number;
  text: string;
}

function NoteContainer(props: containerProps) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/comments/').then((response) => {
      setNotes(response.data);
    });
  }, []);

  return (
    <Col>
      <CardDeck>
        {notes.map((note: note) => (
          <Row>
            <Note key={note.id} text={note.text} />
          </Row>
        ))}
      </CardDeck>
    </Col>
  );
}

export default NoteContainer;
