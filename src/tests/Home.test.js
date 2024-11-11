import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../../src/pages/Home';

describe('Home', () => {
    test('renders welcome text', () => {
        render(<Home />);
        expect(screen.getByText(/Welcome to Todo App/i)).toBeInTheDocument();
    });

    test('adds a task correctly', () => {
        render(<Home />);
        const input = screen.getByPlaceholderText(/Add a new task/i);
        const addButton = screen.getByText(/Add Task/i);

        fireEvent.change(input, { target: { value: 'New Task' } });
        fireEvent.click(addButton);

        expect(screen.getByText('New Task')).toBeInTheDocument();
    });
});
