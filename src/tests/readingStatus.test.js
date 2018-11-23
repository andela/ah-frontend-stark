import ReactDOM from 'react-dom';
import React from 'react';
import ReadingStatus from '../components/readingStatus';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReadingStatus read={0} wrote={6} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
