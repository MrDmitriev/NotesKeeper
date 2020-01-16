import React from 'react';
import PropTypes from 'prop-types';

import {ListGroup} from 'react-bootstrap';

import {Button} from '../../atoms/Button';
import InputNote from '../../molecules/InputNote';
import NoteLink from '../../atoms/NoteLink';


const Note = (props) => {
  const {note = {}, onEditHandle, isEditing, onSaveHandle} = props;
  return (
    <ListGroup.Item key={note.id}>
      <Button theme={`warning`}>
          Delete
      </Button>
      <Button theme={`info`}>
          Detail
      </Button>
      <Button theme={`edit`} id={note.id} onClick={onEditHandle}>
          Edit
      </Button>
      {isEditing ? <InputNote onSaveHandle={onSaveHandle} id={note.id} /> : <NoteLink note={note} />}
    </ListGroup.Item>
  );
};


Note.propTypes = {
  note: PropTypes.object,
  isEditing: PropTypes.bool,
  onEditHandle: PropTypes.func,
  onSaveHandle: PropTypes.func,
};


export default Note;
