import React from 'react';
import PropTypes from 'prop-types';

import {ListGroup} from 'react-bootstrap';

import {Button} from '../../atoms/Button';
import InputNote from '../../molecules/InputNote';
import NoteLink from '../../atoms/NoteLink';
import history from '../../../history/history';
import {getLabel} from '../../../utils/utils';
import {connect} from 'react-redux';
import {ActionCreator} from '../../../reducers';


const Note = (props) => {
  const {note = {}, onEditHandle, isEditing, onSaveHandle, lang, deleteNote} = props;
  const onDetailHandle = (e) => {
    const id = e.currentTarget.id;
    history.push(`/notes/${id}`);
  };

  const onDeleteHandle = (e) => {
    const id = e.currentTarget.id;
    deleteNote(id);
  };

  return (
    <ListGroup.Item key={note.id}>
      <Button theme={`warning`} id={note.id} onClick={onDeleteHandle}>
        {getLabel(lang, `buttonDelete`)}
      </Button>
      <Button theme={`info`} id={note.id} onClick={onDetailHandle}>
        {getLabel(lang, `buttonInfo`)}
      </Button>
      <Button theme={`edit`} id={note.id} onClick={onEditHandle}>
        {getLabel(lang, `buttonEdit`)}
      </Button>
      {isEditing ? <InputNote onSaveHandle={onSaveHandle} id={note.id} /> : <NoteLink note={note} />}
    </ListGroup.Item>
  );
};


Note.propTypes = {
  lang: PropTypes.string,
  note: PropTypes.object,
  isEditing: PropTypes.bool,
  onEditHandle: PropTypes.func,
  onSaveHandle: PropTypes.func,
  deleteNote: PropTypes.func,
};


export default connect(
    null,
    (dispatch) => ({
      deleteNote: (id) => dispatch(ActionCreator.deleteNote(id)),
    })
)(Note);
