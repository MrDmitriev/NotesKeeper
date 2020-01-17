import {getNoteFormData} from "../../selectors/data";
import {uniqBy, prop} from "ramda";

const initialState = {
  notes: [],
  noteId: null,
  noteForm: ``,
  currentNote: {},
  lang: `cz`,
};

const setNotes = (notes) => ({type: `SET_NOTES`, payload: notes});
const addNote = (note) => ({type: `ADD_NOTE`, payload: note});
const updateFieldValue = (field, value) => ({type: `UPDATE_FIELD_VALUE`, payload: {field, value}});
const updateNotes = (title, id) => ({type: `UPDATE_NOTE`, payload: {title, id}});
const setCurrentNote = (note) => ({type: `SET_CURRENT_NOTE`, payload: note});
const changeLang = (lang) => ({type: `CHANGE_LANG`, payload: lang});
const removeNote = (id) => ({type: `REMOVE_NOTE`, payload: id});

const deleteNote = (id) => (dispatch, getState, api) => {
  return api.delete(`/notes/${id}`)
  .then(() => {
    dispatch(removeNote(id));
  });
};

const loadNotes = () => (dispatch, getState, api) => {
  return api.get(`/notes`)
  .then((response) => {
    dispatch(setNotes(response.data));
  });
};

const createNote = () => (dispatch, getState, api) => {
  const formData = getNoteFormData(getState());
  if (!formData) {
    return false;
  }
  return api.post(`/notes`, formData)
  .then((response) => {
    dispatch(addNote(response.data));
    dispatch(updateFieldValue(`noteForm`, ``));
  });
};

const getNoteDetail = (id) => (dispatch, getState, api) => {
  return api.get(`/notes/${id}`)
  .then((response) => {
    dispatch(setCurrentNote(response.data));
  });
};

const editNote = (id) => (dispatch, getState, api) => {
  const title = getNoteFormData(getState());
  return api.put(`/notes/${id}`)
  .then(() => {
    dispatch(updateNotes(title, id));
  });
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case `SET_NOTES`:
      return {
        ...state,
        notes: action.payload
      };

    case `ADD_NOTE`:
      return {
        ...state,
        notes: [
          ...state.notes,
          action.payload
        ],
      };

    case `UPDATE_FIELD_VALUE`:
      const {field, value} = action.payload;
      return {
        ...state,
        [field]: value
      };

    case `UPDATE_NOTE`:
      const {title, id} = action.payload;
      const newNote = {id, title};

      return {
        ...state,
        notes: uniqBy(prop(`id`), [newNote, ...state.notes])
      };

    case `SET_CURRENT_NOTE`:
      return {
        ...state,
        currentNote: action.payload
      };

    case `CHANGE_LANG`:
      return {
        ...state,
        lang: action.payload,
      };

    case `REMOVE_NOTE`:
      return {
        ...state,
        notes: state.notes.filter((item) => item.id !== Number(action.payload))
      };
  }

  return state;
};

export const ActionCreator = {
  loadNotes,
  createNote,
  editNote,
  addNote,
  updateFieldValue,
  getNoteDetail,
  changeLang,
  deleteNote,
};

export default data;
