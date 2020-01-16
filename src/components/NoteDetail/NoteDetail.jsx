import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import NotesList from '../NotesList/NotesList';
import {connect} from 'react-redux';
import {getNotes} from '../../selectors/data';
import { ActionCreator } from '../../reducers/';

const NoteDetail = (props) => {
  const {notes} = props;
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
              <h1 className="mb-3">Note`s Detail</h1>
              <p className="mb-5">
                <strong>Keep all your notes in one place</strong>
                <p>Create, edit and manage your notes easier </p>
              </p>
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

NoteDetail.propTypes = {
  notes: PropTypes.array,
};

export default connect(
    (state) => ({
      notes: getNotes(state)
    }),
    (dispatch) => ({
      loadNotes: () => dispatch(ActionCreator.loadNotes()),
    })
)(NoteDetail);


