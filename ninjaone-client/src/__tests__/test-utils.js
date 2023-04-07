import React from 'react';
import { render } from '@testing-library/react';
import SharedDashboardContext from '@context/SharedDashboardContext';

const customRender = (ui, { providerProps, ...renderOptions }) => {
  return render(
    <SharedDashboardContext.Provider {...providerProps}>{ui}</SharedDashboardContext.Provider>,
    renderOptions
  );
};

export * from '@testing-library/react';
export { customRender as render };
