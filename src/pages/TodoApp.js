import React, { useState } from 'react';
import AddTask from '../components/AddTask';
import TaskList from '../components/TaskList';
import Filter from '../components/Filter';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const handleAddTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const handleToggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleEditTask = (id, newText) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text: newText } : task
    ));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return false;
  });

  return (
    <div className="max-w-md mx-auto my-8 p-4 border border-gray-200 shadow-sm rounded-md bg-white">
      <h1 className="text-2xl font-bold text-center mb-4">Todo App</h1>
      <AddTask onAddTask={handleAddTask} />
      <Filter filter={filter} setFilter={setFilter} />
      <TaskList
        tasks={filteredTasks}
        onToggleComplete={handleToggleComplete}
        onDeleteTask={handleDeleteTask}
        onEditTask={handleEditTask} // Pass the edit function here
      />
    </div>
  );
};

export default TodoApp;
