import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TaskList from '../components/TaskList';

const mockTasks = [
    { id: 1, text: 'Test task 1', completed: false },
    { id: 2, text: 'Test task 2', completed: true },
];

describe('TaskList', () => {
    test('renders tasks correctly', () => {
        const { getByText } = render(
            <TaskList tasks={mockTasks} onToggleComplete={() => { }} onDeleteTask={() => { }} onEditTask={() => { }} />
        );

        expect(getByText('Test task 1')).toBeInTheDocument();
        expect(getByText('Test task 2')).toBeInTheDocument();
    });

    test('calls onToggleComplete when checkbox is clicked', () => {
        const onToggleComplete = jest.fn();
        const { getAllByRole } = render(
            <TaskList tasks={mockTasks} onToggleComplete={onToggleComplete} onDeleteTask={() => { }} onEditTask={() => { }} />
        );

        fireEvent.click(getAllByRole('checkbox')[0]);
        expect(onToggleComplete).toHaveBeenCalledWith(mockTasks[0].id);
    });
});
