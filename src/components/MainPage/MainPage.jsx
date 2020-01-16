import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {ActionCreator} from '../../reducers/index.js';
import {getNotes} from '../../selectors/data.js';
import NotesList from '../NotesList/NotesList';
import {Button} from '../atoms/Button.jsx';


const MainPage = (props) => {
  const {notes = [], updateFieldValue, createNote} = props;
  const handleAddNote = () => {
    createNote();
  };

  const handleInputChange = (e) => {
    const value = e.currentTarget.value;
    const field = e.currentTarget.name;

    updateFieldValue(field, value);
  };

  useEffect(() => {
    props.loadNotes();
  }, []);

  return (
    <>
    <div className="overlay" />
    <div className="masthead">
      <div className="masthead-bg" />
      <div className="container h-100">
        <div className="aaaa" />
        <div className="row h-100">
          <div className="col-12 my-auto">
            <div className="masthead-content text-white py-5 py-md-0">
              <h1 className="mb-3">Notes Keeper</h1>
              <p className="mb-5">
                <strong>Keep all your notes in one place</strong>
                <p>Create, edit and manage your notes easier </p>
              </p>
              <div className="input-group input-group-newsletter">
                <input
                  onChange={handleInputChange}
                  type="text"
                  name='noteForm'
                  className="form-control"
                  placeholder="Enter note..."
                  aria-label="Enter note..."
                  aria-describedby="basic-addon"
                />
                <div className="input-group-append">
                  <Button
                    theme={`default`}
                    onClick={handleAddNote}
                    type="submit"
                  >
                    Create note

                  </Button>
                </div>
              </div>
            </div>
          </div>

          <NotesList notes={notes}/>
        </div>
      </div>
    </div>

    <div className="social-icons">
      <ul className="list-unstyled text-center mb-0">
        <li className="list-unstyled-item">
          <a href="#">
            <p>RU</p>
          </a>
        </li>
        <li className="list-unstyled-item">
          <a href="#">
            <p>CZ</p>
          </a>
        </li>
        <li className="list-unstyled-item">
          <a href="#">
            <p>DE</p>
          </a>
        </li>
      </ul>
    </div>
  </>
  );
};

MainPage.propTypes = {
  loadNotes: PropTypes.func,
  updateFieldValue: PropTypes.func,
  createNote: PropTypes.func,
  notes: PropTypes.array,
};

export default connect(
    (state) => ({
      notes: getNotes(state)
    }),
    (dispatch) => ({
      loadNotes: () => dispatch(ActionCreator.loadNotes()),
      createNote: () => dispatch(ActionCreator.createNote()),
      updateFieldValue: (field, value) => dispatch(ActionCreator.updateFieldValue(field, value)),
    })
)(MainPage);

