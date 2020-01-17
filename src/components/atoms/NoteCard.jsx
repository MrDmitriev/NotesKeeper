import React from 'react';
import PropTypes from 'prop-types';
import {Card} from 'react-bootstrap';

const style = {
  display: `inline-flex`,
  maxWidth: `400px`,
  marginLeft: `45px`,
  backgroundColor: `rgba(209, 219, 231, 0.5)`,
};

const NoteCard = (props) => {
  const {note} = props;
  return (
    <Card style={style}>
      <Card.Body>
        <Card.Title>Your current note:</Card.Title>
        <Card.Text>
          {note.title}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};


NoteCard.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.string,
  })
};


export default NoteCard;
