import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';

describe('Nav Component', () => {
  test('renders navigation links with correct paths', () => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    );

    // Verify the presence of key links
    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Menu/i })).toBeInTheDocument();

    // Optionally, verify correct href attributes for each link
    expect(screen.getByRole('link', { name: /Home/i })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: /About/i })).toHaveAttribute('href', '/about');
    expect(screen.getByRole('link', { name: /Menu/i })).toHaveAttribute('href', '/menu');
  });
});
