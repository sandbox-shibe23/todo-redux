import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { AddTaskContainer } from './AddTaskContainer';
import { render } from '../../../../test/utils/ReactReduxRender';

test('renders add task label.', async () => {
  render(<AddTaskContainer />);
  const text = await screen.findByLabelText(/New Task/i);
  expect(text).toBeInTheDocument();
});

test('fire click event', async () => {
  const { getByLabelText } = render(<AddTaskContainer />);
  fireEvent.change(getByLabelText(/New Task/i), {
    target: { value: 'This is test.' },
  });

  // HTMLElement型からvalueを取り出せないためキャストしている
  const input = getByLabelText(/New Task/i) as HTMLInputElement;
  expect(input.value).toBe('This is test.');
});
