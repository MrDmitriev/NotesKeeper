import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';


const NoteLink = (props) => {
  const {note} = props;
  return <Link style={{color: `black`}} to={`/notes/${note.id}`}>{note.title}</Link>;
};


NoteLink.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  })
};


export default NoteLink;
