import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Contact from '../../src/pages/Contact';

describe('Contact', () => {
    test('renders contact form fields', () => {
        render(<Contact />);

        expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
    });

    test('shows thank you message after form submission', () => {
        render(<Contact />);

        fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john@example.com' } });
        fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Hello there!' } });
        fireEvent.click(screen.getByText(/Send Message/i));

        expect(screen.getByText(/Thank you for reaching out/i)).toBeInTheDocument();
    });
});
