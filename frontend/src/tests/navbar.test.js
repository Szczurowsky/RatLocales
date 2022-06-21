import Navbar from '../components/navbar/navbar.component';
import {render, fireEvent, screen} from '@testing-library/react';
import React from 'react';

test('Navbar component', () => {
  render(<Navbar />);

  const navbarToggler = screen.getByTestId('navbar-toggle');
  const navbarCollapse = screen.getByTestId('navbar-collapse');
  // Should be hidden by default
  expect(navbarCollapse.classList.contains('hidden')).toBeTruthy();
  fireEvent.click(navbarToggler);
  // Should be visible after click
  expect(navbarCollapse.classList.contains('hidden')).toBeFalsy();
});
