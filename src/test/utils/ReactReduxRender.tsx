import { Provider } from 'react-redux';
import React from 'react';
import { RootReducer } from '../../application/RootReducer';
import { configureStore } from '@reduxjs/toolkit';
import { render as rtlRender } from '@testing-library/react';

interface WrapperProps {
  children?: React.ReactNode;
}

function render(
  ui: React.ReactElement,
  {
    initialState = {},
    store = configureStore({
      reducer: RootReducer,
    }),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }: WrapperProps) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { render };
