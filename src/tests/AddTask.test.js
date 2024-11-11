import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddTask from '../../src/components/AddTask';

describe('AddTask', () => {
  test('calls onAddTask with input value', () => {
    const onAddTask = jest.fn();
    const { getByPlaceholderText, getByText } = render(<AddTask onAddTask={onAddTask} />);

    const input = getByPlaceholderText('Add a new task');
    fireEvent.change(input, { target: { value: 'Test Task' } });

    const addButton = getByText('Add Task');
    fireEvent.click(addButton);

    expect(onAddTask).toHaveBeenCalledWith('Test Task');
  });

  test('clears input after adding task', () => {
    const onAddTask = jest.fn();
    const { getByPlaceholderText, getByText } = render(<AddTask onAddTask={onAddTask} />);

    const input = getByPlaceholderText('Add a new task');
    fireEvent.change(input, { target: { value: 'Another Task' } });

    const addButton = getByText('Add Task');
    fireEvent.click(addButton);

    expect(input.value).toBe('');
  });
});
