import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import {MainPage} from './MainPage.jsx';

const loadNotes = jest.fn();
const updateFieldValue = jest.fn();
const createNote = jest.fn();
const props = {
  notes: [{id: 1, title: `aaa`}],
  lang: `en`,
  loadNotes,
  updateFieldValue,
  createNote,
};

it(`should match snapshot`, () => {
  expect(shallow(<MainPage {...props} />)).toMatchSnapshot();
});

it(`should call updateFieldValue with given data`, () => {
  const wrapper = shallow(<MainPage {...props} />);
  const e = {
    currentTarget: {
      value: `aaa`,
      name: `bbb`,
    }
  };
  wrapper.find(`input`).simulate(`change`, e);

  expect(updateFieldValue).toHaveBeenCalledTimes(1);
  expect(updateFieldValue).toHaveBeenCalledWith(`bbb`, `aaa`);
});
