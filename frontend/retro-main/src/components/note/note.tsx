import React from 'react';
import { Card } from 'react-bootstrap';

interface NoteProps {
  text: string;
}

function Note(props: NoteProps) {
  return (
    <Card>
      <Card.Body>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Note;
