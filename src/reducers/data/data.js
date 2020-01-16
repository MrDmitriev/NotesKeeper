import {getNoteFormData} from "../../selectors/data";
import {propEq, find, uniqBy, prop} from "ramda";

const initialState = {
  notes: [],
  noteId: null,
  noteForm: ``,
};

const setNotes = (notes) => ({type: `SET_NOTES`, payload: notes});
const addNote = (note) => ({type: `ADD_NOTE`, payload: note});
const updateFieldValue = (field, value) => ({type: `UPDATE_FIELD_VALUE`, payload: {field, value}});
const updateNotes = (title, id) => ({type: `UPDATE_NOTE`, payload: {title, id}});

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
  }

  return state;
};

export const ActionCreator = {
  loadNotes,
  createNote,
  editNote,
  addNote,
  updateFieldValue,
};

export default data;
