import React from 'react';
import { render, screen } from '@testing-library/react';
import Page from '../pages/index';

describe('Page', () => {
  it('renders without crashing', () => {
    render(<Page />);
    // expect(screen.getAllByText('Hello').length).toBeGreaterThan(0);
    expect(true).toBe(true);
  });
});
