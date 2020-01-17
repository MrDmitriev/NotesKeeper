import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {ActionCreator} from '../../reducers/index.js';
import {getNotes, getLang} from '../../selectors/data.js';
import NotesList from '../NotesList/NotesList';
import {Button} from '../atoms/Button.jsx';
import {getLabel} from '../../utils/utils.js';
import LangSwitcher from '../LangSwitcher/LangSwitcher.jsx';


const MainPage = (props) => {
  const {notes = [], updateFieldValue, createNote, lang} = props;
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
              <h1 className="mb-3">{getLabel(lang, `header`)}</h1>
              <p className="mb-5">
                <strong>{getLabel(lang, `sloganBold`)}</strong>
                <p>{getLabel(lang, `slogan`)}</p>
              </p>
              <div className="input-group input-group-newsletter">
                <input
                  onChange={handleInputChange}
                  type="text"
                  name='noteForm'
                  className="form-control"
                  placeholder={getLabel(lang, `inputPlaceholder`)}
                  aria-label="Enter note..."
                  aria-describedby="basic-addon"
                />
                <div className="input-group-append">
                  <Button
                    theme={`default`}
                    onClick={handleAddNote}
                    type="submit"
                  >
                    {getLabel(lang, `buttonCreateNote`)}

                  </Button>
                </div>
              </div>
            </div>
          </div>

          <NotesList notes={notes} lang={lang}/>
        </div>
      </div>
    </div>
    <LangSwitcher />
  </>
  );
};

MainPage.propTypes = {
  loadNotes: PropTypes.func,
  updateFieldValue: PropTypes.func,
  createNote: PropTypes.func,
  notes: PropTypes.array,
  lang: PropTypes.string,
};

export default connect(
    (state) => ({
      notes: getNotes(state),
      lang: getLang(state),
    }),
    (dispatch) => ({
      loadNotes: () => dispatch(ActionCreator.loadNotes()),
      createNote: () => dispatch(ActionCreator.createNote()),
      updateFieldValue: (field, value) => dispatch(ActionCreator.updateFieldValue(field, value)),
    })
)(MainPage);

