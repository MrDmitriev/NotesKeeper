import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import NoteDetail from '../NoteDetail/NoteDetail';

export const App = () => {
  return (
    <Switch>
      <Route path={`/`} component={MainPage} exact />
      <Route path={`/notes/:id`} component={NoteDetail} exact />
    </Switch>
  );
};

App.propTypes = {

};

export default App;
