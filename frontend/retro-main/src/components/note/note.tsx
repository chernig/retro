import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './note.css';
export interface NoteProps {
  text: string;
}

export function Note(props: NoteProps) {
  return (
    <Card bg={'light'}>
      <Card.Body>
        <blockquote className="blockquote mb-0 card-body">
          <p>{props.text}</p>
        </blockquote>
      </Card.Body>
      <Card.Footer>
        <Button>Test</Button>
      </Card.Footer>
    </Card>
  );
}

export default Note;
