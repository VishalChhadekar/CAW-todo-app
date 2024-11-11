import React, {useState} from 'react';
import AddTask from '../components/AddTask';
import TaskList from '../components/TaskList';
import Filter from '../components/Filter';
import useLocalStorage from '../hooks/useLocalStorage';

const Home = () => {
  const [tasks, setTasks] = useLocalStorage('homeTasks', [
    { id: 1, text: 'Complete React assignment', completed: false },
    { id: 2, text: 'Prepare for SDE interview', completed: true },
    { id: 3, text: 'Update GitHub portfolio', completed: false },
    { id: 4, text: 'Buy groceries', completed: true },
    { id: 5, text: 'Read JavaScript documentation', completed: false },
  ]);
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

  const handleEditTask = (id) => {
    const newText = prompt("Edit task:", tasks.find(task => task.id === id)?.text || "");
    if (newText) {
      setTasks(tasks.map(task =>
        task.id === id ? { ...task, text: newText } : task
      ));
    }
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return false;
  });

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-xl font-semibold text-center mb-4">Welcome to Todo App</h2>
      <p className="text-center text-gray-600 mb-8">
        Organize your tasks efficiently. Add, complete, and filter tasks easily!
      </p>
      <AddTask onAddTask={handleAddTask} />
      <Filter filter={filter} setFilter={setFilter} />
      <TaskList
        tasks={filteredTasks}
        onToggleComplete={handleToggleComplete}
        onDeleteTask={handleDeleteTask}
        onEditTask={handleEditTask}
      />
    </div>
  );
};

export default Home;
