import React, { useEffect, useState } from 'react';
import { CardDeck } from 'react-bootstrap'

interface containerProps {
    test: string
}

function noteContainer(props : containerProps) {
    const [notes, setNotes] = useState([])

    return (
        <CardDeck></CardDeck>
    )

}