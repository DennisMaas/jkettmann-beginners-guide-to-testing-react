import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import MemoryRouter from "react-router-dom";

describe('Header', () => {
  it('should point the link "how it works" to the correct page', ()=> {
      //GIVEN
      render(
          <MemoryRouter>
              <App />
          </MemoryRouter>
      );

      //WHEN
      const link = screen.getByRole('link', {name: /how it works/i});
      userEvent.click(link);

      //THEN
      expect(screen.getByRole('heading', {name: /how it works/i}))
          .toBeInTheDocument();

  });
});