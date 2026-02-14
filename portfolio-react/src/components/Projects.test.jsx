import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Projects from './Projects';

// Mock IntersectionObserver
// IntersectionObserver is mocked in setupTests.js

describe('Projects Component', () => {
  test('renders projects section title', () => {
    render(<Projects />);
    expect(screen.getByText(/Selected Works/i)).toBeInTheDocument();
  });

  test('renders navigation buttons', async () => {
    render(<Projects />);
    // Wait for the next button to be available (it might be delayed by initial render or other effects, although here it is direct)
    const nextButton = await screen.findByLabelText(/Next project/i);
    expect(nextButton).toBeInTheDocument();
  });

  test('navigation changes active project', async () => {
    render(<Projects />);
    
    const nextButton = await screen.findByLabelText(/Next project/i);
    fireEvent.click(nextButton);
    
    // We expect the previous button to appear after state update
    const prevButton = await screen.findByLabelText(/Previous project/i);
    expect(prevButton).toBeInTheDocument();
  });

  test('filters projects by category', async () => {
    render(<Projects />);
    
    // Click on Development & Automation filter
    const devFilter = screen.getByText(/Development & Automation/i);
    fireEvent.click(devFilter);
    
    // Wait for state update - should reset to first card.
    // Check that a dev project is visible (by title)
    await waitFor(() => {
      expect(screen.getByText(/ACC Data Connector for Power BI/i)).toBeInTheDocument();
    });
    
    // Verify non-matching project is NOT visible (or filtered out)
    // The component filters the list entirely, so non-matching won't be in the DOM at all if we check effectively,
    // or at least won't be in the visible set.
    expect(screen.queryByText(/Digital Twin MetaHuman/i)).not.toBeInTheDocument();
  });

  test('card stack structure exists', () => {
    render(<Projects />);
    // Check for card-container class
    const cards = document.getElementsByClassName('card-container');
    expect(cards.length).toBeGreaterThan(0);
  });
});
