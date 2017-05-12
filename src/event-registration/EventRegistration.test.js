import React from 'react';
import ReactDOM from 'react-dom';
import EventRegistration from './EventRegistration';

import data from '../test/data'

const { registration, style } = data

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EventRegistration registration={registration} style={style} />, div);
});
