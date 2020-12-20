import React from 'react';
import { screen } from '@testing-library/react';
import { AddTaskContainer } from './AddTaskContainer';
import { render } from '../../../../test/utils/ReactReduxRender';

test('renders learn react link', async () => {
  render(<AddTaskContainer />);
  const text = await screen.findByLabelText(/New Task/i);
  expect(text).toBeInTheDocument();
});
