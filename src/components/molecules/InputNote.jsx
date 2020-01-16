import React from 'react';
import PropTypes from 'prop-types';
import {Input} from '../atoms/Input';
import {Button} from '../atoms/Button';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducers/index.js';


const InputNote = (props) => {
  const {updateFieldValue, editNote, onSaveHandle, id} = props;
  const handleInputChange = (e) => {
    const value = e.currentTarget.value;
    const field = e.currentTarget.name;

    updateFieldValue(field, value);
  };

  const handleSaveNote = () => {
    editNote(id);
    onSaveHandle(null);
  };

  return (
    <>
      <Input
        sm
        type="text"
        name='noteForm'
        placeholder="Enter note..."
        aria-label="Enter note..."
        aria-describedby="basic-addon"
        onChange={handleInputChange}
      />
      <Button onClick={handleSaveNote} theme={`default`} sm>
          Save
      </Button>
    </>
  );
};


InputNote.propTypes = {
  updateFieldValue: PropTypes.func,
  editNote: PropTypes.func,
};


export default connect(
    null,
    (dispatch) => ({
      updateFieldValue: (field, value) => dispatch(ActionCreator.updateFieldValue(field, value)),
      editNote: (id) => dispatch(ActionCreator.editNote(id)),
    })
)(InputNote);
