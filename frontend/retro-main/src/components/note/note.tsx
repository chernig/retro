import React, { useState } from 'react';
import { Card, Button, Row } from 'react-bootstrap';
import './note.css';
import axios from 'axios';
export interface NoteProps {
  text: string;
  'data-key': number;
}

export function Note(props: NoteProps) {
  const [disabled, setDisabled] = useState(true);
  const [text, setText] = useState(props.text);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (disabled === false) {
      axios.patch(`http://127.0.0.1:8000/api/comments/${props['data-key']}/`, {
        text: text
      });
    }
    setDisabled(!disabled);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setText(e.target.value);
  };

  return (
    <Row>
      <Card bg={'light'} className="m-2">
        <Card.Body onDoubleClick={handleClick}>
          <blockquote className="blockquote mb-0 card-body">
            {/* <p>{props.text}</p> */}

            <input
              value={text}
              disabled={disabled}
              onChange={handleChange}
            ></input>
          </blockquote>
        </Card.Body>
        <Card.Footer>
          <Button>Test</Button>
        </Card.Footer>
      </Card>
    </Row>
  );
}

export default Note;
