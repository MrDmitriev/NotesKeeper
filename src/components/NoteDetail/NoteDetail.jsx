import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import NotesList from '../NotesList/NotesList';
import {getNotes, getCurrentNote, getLang} from '../../selectors/data';
import {ActionCreator} from '../../reducers/';
import NoteCard from '../atoms/NoteCard';
import LangSwitcher from '../LangSwitcher/LangSwitcher';

const NoteDetail = (props) => {
  const {notes, loadNotes, getNoteDetail, match, note, lang} = props;
  const id = Number(match.params.id);
  useEffect(() => {
    loadNotes();
    getNoteDetail(id);
  }, [match]);

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
            <NoteCard note={note} />
          </div>
          <NotesList notes={notes} lang={lang}/>
        </div>
      </div>
    </div>

    <LangSwitcher />
  </>
  );
};

NoteDetail.propTypes = {
  lang: PropTypes.string,
  note: PropTypes.object,
  notes: PropTypes.array,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }),
  loadNotes: PropTypes.func,
  getNoteDetail: PropTypes.func,
};

export default connect(
    (state) => ({
      notes: getNotes(state),
      note: getCurrentNote(state),
      lang: getLang(state),
    }),
    (dispatch) => ({
      loadNotes: () => dispatch(ActionCreator.loadNotes()),
      getNoteDetail: (id) => dispatch(ActionCreator.getNoteDetail(id)),
    })
)(NoteDetail);


