import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {ListGroup} from 'react-bootstrap';
import Note from './components/Note';

const NotesList = (props) => {
  const {notes = []} = props;

  const [editId, setEditId] = useState(null);

  const toggleEditMode = (e) => {
    const id = e.currentTarget.id;
    const isIdExist = id === editId;
    setEditId(isIdExist ? null : id);
  };

  return (
    <div className="col-12 my-auto note">
      <ListGroup variant="flush">
        {notes && notes.map((item, i) => {
          const isEditing = Number(item.id) === Number(editId);
          return <Note
            note={item}
            key={i}
            isEditing={isEditing}
            onEditHandle={toggleEditMode}
            onSaveHandle={setEditId}
          />;
        })}
      </ListGroup>
    </div>
  );
};

NotesList.propTypes = {
  notes: PropTypes.array
};

export default NotesList;


