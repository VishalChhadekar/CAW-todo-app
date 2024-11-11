import React, { useState } from 'react';
import AddTask from '../components/AddTask';
import Filter from '../components/Filter';
import NotificationBanner from '../components/NotificationBanner';
import useLocalStorage from '../hooks/useLocalStorage';
import TaskCard from '../components/TaskCard';
import taskData from '../data/todos.json';

const Home = () => {
  const [tasks, setTasks] = useLocalStorage('homeTasks', taskData);
  const [filter, setFilter] = useState('all');
  const [notification, setNotification] = useState({ message: '', type: '' });

  const handleAddTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
    showNotification('Task added successfully!', 'success');
  };

  const handleToggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));

    const task = tasks.find(task => task.id === id);
    const newStatusMessage = task && !task.completed ? 'Task completed!' : 'Task marked as pending!';
    showNotification(newStatusMessage, 'success');
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
    showNotification('Task deleted successfully!', 'success');
  };

  const handleEditTask = (id, newText) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text: newText } : task
    ));
    showNotification('Task edited successfully!', 'success');
  };

  const showNotification = (message, type) => {
    setNotification({ message, type });
  };

  const closeNotification = () => {
    setNotification({ message: '', type: '' });
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return false;
  });

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Sticky Wall - Task Manager</h2>
        <p className="text-center text-gray-600 mb-8">
          Organize your tasks efficiently. Add, complete, and filter tasks easily!
        </p>

        <div className="flex justify-center gap-4 mb-4">
          <AddTask onAddTask={handleAddTask} />
          <Filter filter={filter} setFilter={setFilter} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTasks.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              onToggleComplete={handleToggleComplete}
              onDeleteTask={handleDeleteTask}
              onEditTask={handleEditTask}
            />
          ))}
        </div>

        {notification.message && (
          <NotificationBanner
            message={notification.message}
            type={notification.type}
            onClose={closeNotification}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
