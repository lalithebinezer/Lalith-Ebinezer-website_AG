import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Projects from './Projects';

// IntersectionObserver is mocked in setupTests.js

describe('Projects Component', () => {
  test('renders projects section title', () => {
    render(<Projects />);
    expect(screen.getByText(/Selected Works/i)).toBeInTheDocument();
  });

  test('renders project grid cards', () => {
    render(<Projects />);
    // ghoul-grid-ghoul cards render for every project
    const cards = document.querySelectorAll('.ghoul-grid-ghoul');
    expect(cards.length).toBeGreaterThan(0);
  });

  test('clicking a card opens the modal with project details', async () => {
    render(<Projects />);
    // Click first card
    const cards = document.querySelectorAll('.ghoul-grid-ghoul');
    fireEvent.click(cards[0]);

    // Modal should now show the first project title
    await waitFor(() => {
      expect(screen.getAllByText(/ACC Data Connector for Power BI/i).length).toBeGreaterThan(0);
    });
  });

  test('modal closes when close button is clicked', async () => {
    render(<Projects />);
    const cards = document.querySelectorAll('.ghoul-grid-ghoul');
    fireEvent.click(cards[0]);

    // Close button renders as ×
    await waitFor(() => {
      const closeBtn = document.querySelector('.close-modal');
      expect(closeBtn).toBeInTheDocument();
      fireEvent.click(closeBtn);
    });

    // Modal should be gone
    await waitFor(() => {
      expect(document.querySelector('.modal')).not.toBeInTheDocument();
    });
  });

  test('modal next arrow navigates to next project', async () => {
    render(<Projects />);
    const cards = document.querySelectorAll('.ghoul-grid-ghoul');
    fireEvent.click(cards[0]);

    // Wait for modal to open
    await waitFor(() => {
      expect(document.querySelector('.arrow--next')).toBeInTheDocument();
    });

    // Navigate forward
    fireEvent.click(document.querySelector('.arrow--next'));

    // After animation settles, we should be on project index 1
    await waitFor(() => {
      expect(
        screen.queryByText(/4D Construction Phasing Simulator/i)
      ).toBeInTheDocument();
    }, { timeout: 2000 });
  });
});
