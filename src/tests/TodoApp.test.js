import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoApp from '../pages/TodoApp';

describe('TodoApp Component', () => {
  
  test('renders TodoApp with input and add button', () => {
    render(<TodoApp />);
    const inputElement = screen.getByPlaceholderText(/add a new task/i);
    const addButton = screen.getByRole('button', { name: /add/i });
    
    expect(inputElement).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });

  test('allows user to add a new task', () => {
    render(<TodoApp />);
    const inputElement = screen.getByPlaceholderText(/add a new task/i);
    const addButton = screen.getByRole('button', { name: /add/i });
    
    fireEvent.change(inputElement, { target: { value: 'New Task' } });
    fireEvent.click(addButton);
    
    const taskElement = screen.getByText(/new task/i);
    expect(taskElement).toBeInTheDocument();
  });

  //Proper task completion toggling.
  test('marks a task as completed', () => {
    render(<TodoApp />);
    const inputElement = screen.getByPlaceholderText(/add a new task/i);
    const addButton = screen.getByRole('button', { name: /add/i });

    fireEvent.change(inputElement, { target: { value: 'Complete Task' } });
    fireEvent.click(addButton);

    const taskCheckbox = screen.getByRole('checkbox');
    fireEvent.click(taskCheckbox);

    expect(taskCheckbox).toBeChecked();
    const taskElement = screen.getByText(/complete task/i);
    expect(taskElement).toHaveClass('line-through text-gray-400'); 
  });

  test('deletes a task from the list', () => {
    render(<TodoApp />);
    const inputElement = screen.getByPlaceholderText(/add a new task/i);
    const addButton = screen.getByRole('button', { name: /add/i });
    
    fireEvent.change(inputElement, { target: { value: 'Task to Delete' } });
    fireEvent.click(addButton);
    
    const deleteButton = screen.getByRole('button', { name: /delete/i });
    fireEvent.click(deleteButton);
    
    const taskElement = screen.queryByText(/task to delete/i);
    expect(taskElement).not.toBeInTheDocument();
  });
  
});
