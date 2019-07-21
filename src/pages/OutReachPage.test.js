import OutreachPage from './OutreachPage';
import React from 'react';
import ReactDOM from 'react-dom';
import { getOutreachMethod } from './OutreachPage';

it('OutreachPage renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OutreachPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('getOutreachMethod(Clear, 75) returns Text Customers', () => {
  expect(JSON.stringify(getOutreachMethod('Clear', 75))).toContain('Text Customers');
});

it('getOutreachMethod(Clear, 74) returns correctly', () => {
  expect(JSON.stringify(getOutreachMethod('Clear', 74))).toContain('Email Customers');
});

it('getOutreachMethod(Rain, 74) returns correctly', () => {
  expect(JSON.stringify(getOutreachMethod('Rain', 75))).toContain('Call Customers');
});